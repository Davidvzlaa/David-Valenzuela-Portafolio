# Portafolio — Jesús David Valenzuela

Sitio estático de portafolio y CV hecho con **React + TypeScript + Vite**, **Tailwind CSS v4** y componentes **shadcn/ui**.

## Cómo correrlo

```bash
npm install      # instala Tailwind, shadcn/ui (dependencias), lucide-react, etc.
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera el sitio estático en /dist
npm run preview  # revisa el build final
```

## Cómo editar el contenido

Todo el texto está en **`src/data/portfolio.ts`**, en español (`es`) e inglés (`en`). Si cambias algo en un idioma, cámbialo también en el otro.

- **Proyectos:** los datos que no se traducen (imágenes, enlaces, tecnologías) van en `projectBase`; los textos y el caso de estudio (reto, papel, decisiones, resultados) van en `es.projects` y `en.projects`.
- **Imágenes de proyectos:** guárdalas en `public/proyectos/` y agrega sus rutas al arreglo `images` del proyecto.
- **CV:** `public/cv-jesus-david-valenzuela.pdf` (español) y `public/cv-jesus-david-valenzuela-en.pdf` (inglés). El botón descarga el del idioma activo.
- **LinkedIn:** pon tu URL en `shared.socials.linkedin` y aparece en todo el sitio.
- **Enlace directo a un proyecto:** `https://davidvalenzuelaportafolio.vercel.app/#proyecto-<id>` (por ejemplo `#proyecto-byarshop`).
- **Idioma por enlace:** agrega `?lang=en` o `?lang=es` a la URL.
- **Vista previa al compartir:** `public/og.png` (1200×630).

## Agregar más componentes de shadcn/ui

El proyecto ya está configurado (`components.json`), así que puedes usar:

```bash
npx shadcn@latest add dialog tabs tooltip
```

## Publicarlo gratis

- **Vercel / Netlify:** importa el repositorio de GitHub. Build command: `npm run build` · Output: `dist`.
- **GitHub Pages:** sube el contenido de `dist/` (el sitio usa rutas relativas, funciona en subcarpetas).

## Estructura

```
src/
  data/portfolio.ts        ← tu contenido
  App.tsx                  ← secciones de la página
  components/ui/           ← componentes shadcn/ui (button, card, badge, separator)
  components/              ← sección, cambio de tema, íconos de marca
  index.css                ← tema de Tailwind + shadcn (colores, modo oscuro)
public/                    ← CV, foto, capturas, favicon
```
