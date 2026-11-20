import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

test('dados historicos importados e 327 slugs validos', () => {
  const path = new URL('../src/data/legacy-works.json', import.meta.url);
  assert.ok(existsSync(path), 'Importar src/data/legacy-works.json antes de validar a migracao');
  const works = JSON.parse(readFileSync(path, 'utf8'));
  assert.equal(works.length, 327);
  const slugs = new Set();
  for (const work of works) {
    assert.match(work.slug, /^[a-z0-9-]+$/);
    assert.equal(work.url, '/trabalho/' + work.slug + '/');
    assert.ok(work.title?.trim());
    assert.ok(work.description?.trim());
    assert.ok(!slugs.has(work.slug), 'Slug duplicado: ' + work.slug);
    slugs.add(work.slug);
  }
});
