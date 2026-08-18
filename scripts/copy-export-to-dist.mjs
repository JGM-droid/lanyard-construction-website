import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

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

mkdirSync(resolve(distDir, 'server'), { recursive: true });
writeFileSync(
  resolve(distDir, 'server', 'index.js'),
  `export default {
  async fetch(request, env) {
    if (env?.ASSETS) {
      const response = await env.ASSETS.fetch(request);

      if (response.status !== 404) {
        return response;
      }

      const url = new URL(request.url);

      if (!url.pathname.includes('.')) {
        return env.ASSETS.fetch(new Request(new URL('/index.html', url), request));
      }

      return response;
    }

    return new Response('Site assets are unavailable.', { status: 500 });
  },
};
`,
);
