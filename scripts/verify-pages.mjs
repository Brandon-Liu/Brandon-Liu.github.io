import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const output = 'dist/client';
const manifest = JSON.parse(readFileSync('dist/server/vinext-prerender.json', 'utf8'));
for (const route of manifest.routes) {
  assert.equal(route.status, 'rendered', `Static export failed for ${route.route}`);
}
for (const route of ['', 'about', 'contact', 'experience', 'projects']) {
  const file = join(output, route ? `${route}.html` : 'index.html');
  assert.ok(existsSync(file), `Missing static page: ${file}`);
  const html = readFileSync(file, 'utf8');
  assert.ok(!html.includes('/_next/image?'), `${file} requires a server image optimizer`);
  for (const [, reference] of html.matchAll(/(?:src|href)="(\/[^"#?]*)[^"]*"/g)) {
    if (reference.startsWith('//')) continue;
    assert.ok(existsSync(join(output, reference)), `Missing local asset in ${file}: ${reference}`);
  }
}
console.log('All five pages and their local asset links are ready for GitHub Pages.');
