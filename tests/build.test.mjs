import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const dist = new URL('../dist/', import.meta.url);
const read = (p) => readFileSync(new URL(p, dist), 'utf8');

test('las páginas principales existen', () => {
  for (const p of [
    'index.html',
    'blog/index.html',
    'products/index.html',
    'affiliate-disclosure/index.html',
    'privacy-policy/index.html',
    'sitemap-index.xml',
  ]) {
    assert.ok(existsSync(new URL(p, dist)), `falta ${p}`);
  }
});

test('cada artículo Markdown genera su página', () => {
  const posts = readdirSync(new URL('../src/content/blog/', import.meta.url))
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
  assert.ok(posts.length > 0);
  for (const slug of posts) {
    assert.ok(existsSync(new URL(`blog/${slug}/index.html`, dist)), `falta blog/${slug}`);
  }
});

test('el pie enlaza el aviso de afiliados y la privacidad', () => {
  const html = read('index.html');
  assert.match(html, /affiliate-disclosure\//);
  assert.match(html, /privacy-policy\//);
});

test('los enlaces de afiliado llevan rel="sponsored"', () => {
  // Hoy no hay productos de afiliado; si aparece uno, su enlace debe ser sponsored.
  const html = read('products/index.html');
  const hasAffiliate = html.includes('affiliate link');
  assert.ok(!hasAffiliate || /rel="sponsored noopener"/.test(html));
});

test('los enlaces internos apuntan a páginas existentes', () => {
  const html = read('index.html');
  // En GitHub BASE_PATH llega sin barra final (/nombre-del-repo).
  const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
  const hrefs = [...html.matchAll(/href="([^"#?]+)"/g)].map((m) => m[1]);
  for (const h of hrefs) {
    if (!h.startsWith(base) || h.includes('.')) continue;
    const rel = h.slice(base.length);
    assert.ok(existsSync(new URL(`${rel}index.html`, dist)), `enlace roto: ${h}`);
  }
});
