import { cpSync, existsSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';

const outDir = resolve('out');
const distDir = resolve('dist');

if (!existsSync(outDir)) {
  throw new Error('Expected Next static export directory "out" to exist.');
}

rmSync(distDir, { recursive: true, force: true });
cpSync(outDir, distDir, { recursive: true });
