import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const output = 'dist/client';
const manifest = JSON.parse(
  readFileSync('dist/server/vinext-prerender.json', 'utf8'),
);
assert.ok(manifest.routes.length > 0, 'Static export contains no routes');
assert.ok(
  manifest.routes.some(({ route }) => route === '/'),
  'Missing home route',
);

// Use the build manifest so added or renamed routes are checked automatically.
for (const { route, status } of manifest.routes) {
  assert.equal(status, 'rendered', `Static export failed for ${route}`);
  const page =
    route === '/'
      ? 'index.html'
      : manifest.trailingSlash && route !== '/404'
        ? join(route.slice(1), 'index.html')
        : `${route.slice(1)}.html`;
  const file = join(output, page);
  assert.ok(existsSync(file), `Missing static page: ${file}`);
  const html = readFileSync(file, 'utf8');
  assert.ok(
    !html.includes('/_next/image?'),
    `${file} requires a server image optimizer`,
  );
  for (const [, reference] of html.matchAll(
    /(?:src|href)="(\/[^"#?]*)[^"]*"/g,
  )) {
    if (reference.startsWith('//')) continue;
    assert.ok(
      existsSync(join(output, reference)),
      `Missing local asset in ${file}: ${reference}`,
    );
  }
}
console.log(
  `Verified ${manifest.routes.length} exported pages and their local asset links.`,
);
