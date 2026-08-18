import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';

const outDir = resolve('out');
const distDir = resolve('dist');
const hostingConfig = resolve('.openai', 'hosting.json');

if (!existsSync(outDir)) {
  throw new Error('Expected Next static export directory "out" to exist.');
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });

mkdirSync(resolve(distDir, '.openai'), { recursive: true });
cpSync(hostingConfig, resolve(distDir, '.openai', 'hosting.json'));

function contentType(filePath) {
  const extension = extname(filePath).toLowerCase();

  if (extension === '.html') return 'text/html; charset=utf-8';
  if (extension === '.txt') return 'text/plain; charset=utf-8';
  if (extension === '.css') return 'text/css; charset=utf-8';
  if (extension === '.js') return 'application/javascript; charset=utf-8';
  if (extension === '.json') return 'application/json; charset=utf-8';
  if (extension === '.svg') return 'image/svg+xml';
  if (extension === '.png') return 'image/png';
  if (extension === '.jpg' || extension === '.jpeg') return 'image/jpeg';
  if (extension === '.webp') return 'image/webp';
  if (extension === '.ico') return 'image/x-icon';
  if (extension === '.woff') return 'font/woff';
  if (extension === '.woff2') return 'font/woff2';

  return 'application/octet-stream';
}

function collectAssets(dir) {
  const assets = {};

  for (const entry of readdirSync(dir)) {
    const absolutePath = join(dir, entry);
    const relativePath = relative(distDir, absolutePath);
    const [topLevel] = relativePath.split(sep);

    if (topLevel === 'server' || topLevel === '.openai') {
      continue;
    }

    if (statSync(absolutePath).isDirectory()) {
      Object.assign(assets, collectAssets(absolutePath));
      continue;
    }

    const routePath = `/${relativePath.split(sep).join('/')}`;
    assets[routePath] = {
      body: readFileSync(absolutePath).toString('base64'),
      type: contentType(absolutePath),
    };
  }

  return assets;
}

const assets = collectAssets(distDir);

mkdirSync(resolve(distDir, 'server'), { recursive: true });
writeFileSync(
  resolve(distDir, 'server', 'index.js'),
  `const assets = ${JSON.stringify(assets)};

function resolvePath(pathname) {
  if (pathname === '/') return '/index.html';
  if (assets[pathname]) return pathname;
  if (!pathname.includes('.')) return \`\${pathname}.html\`;
  return pathname;
}

function decodeAsset(asset) {
  const binary = atob(asset.body);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = resolvePath(url.pathname);
    const asset = assets[pathname] || assets['/404.html'];

    if (!asset) {
      return new Response('Not found', { status: 404 });
    }

    return new Response(decodeAsset(asset), {
      status: assets[pathname] ? 200 : 404,
      headers: {
        'content-type': asset.type,
      },
    });
  },
};
`,
);
