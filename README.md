# Tidy in Minutes: sitio web

Sitio estático hecho con [Astro](https://astro.build): inicio, blog en Markdown, productos, aviso de afiliados y política de privacidad. Se publica en GitHub Pages.

## Comandos que corrés vos

```bash
npm install        # instala dependencias (una sola vez)
npm run dev        # servidor local en http://localhost:4321
npm test           # build + tests del sitio generado
npm run build      # genera dist/
npm run preview    # sirve dist/ para revisarlo
```

## Publicar en GitHub Pages

1. Creá un repositorio en GitHub (vos, con tu cuenta).
2. Conectalo y subí el código:
   ```bash
   git remote add origin git@github.com:USUARIO/NOMBRE-DEL-REPO.git
   git push -u origin main
   ```
3. En GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. El workflow `.github/workflows/deploy.yml` corre en cada push a `main`, ejecuta los tests y publica. La URL queda `https://USUARIO.github.io/NOMBRE-DEL-REPO/`.

El workflow calcula `SITE_URL` y `BASE_PATH` solo. Si usás **dominio propio**, cambiá en el workflow `SITE_URL` a `https://tudominio.com`, `BASE_PATH` a `/`, y agregá un archivo `public/CNAME` con el dominio.

## Qué tenés que completar

- `src/config.ts`: `CONTACT_EMAIL` (hoy es `hello@example.com`) y los productos (`PRODUCTS`, con las URLs reales de la tienda y de afiliado).
- **Email:** creá cuenta en tu proveedor (Buttondown, MailerLite…). En GitHub, **Settings → Secrets and variables → Actions → Variables**, creá `PUBLIC_SUBSCRIBE_URL` con la URL del formulario y agregá `PUBLIC_SUBSCRIBE_URL: ${{ vars.PUBLIC_SUBSCRIBE_URL }}` en el bloque `env` del paso de build del workflow. Sin esa variable se muestra "coming soon".
- **Pinterest:** pegá la etiqueta `p:domain_verify` en `src/layouts/Base.astro` (hay un comentario donde va) y verificá el dominio en Pinterest.
- **Textos legales:** revisá `privacy-policy` y `affiliate-disclosure`; son plantillas, no asesoría legal. Si usás Amazon Associates, agregá su leyenda obligatoria.

## Agregar un artículo

Creá `src/content/blog/mi-articulo.md` con este encabezado y escribí en Markdown:

```md
---
title: "Título"
description: "Resumen para SEO"
pubDate: 2026-10-21
---
```

Con `draft: true` en el encabezado el artículo no se publica.
