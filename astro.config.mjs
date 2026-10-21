import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL y BASE_PATH los define el workflow de GitHub Pages (ver README).
// Ejemplo: SITE_URL=https://USUARIO.github.io  BASE_PATH=/NOMBRE-DEL-REPO
const site = process.env.SITE_URL || 'https://example.github.io';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
