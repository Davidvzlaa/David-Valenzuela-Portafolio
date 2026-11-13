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

Todo el texto está en **`src/data/portfolio.ts`**: perfil, experiencia, proyectos, habilidades, educación y certificaciones. No hace falta tocar los componentes.

- **CV descargable:** `public/cv-jesus-david-valenzuela.pdf`. Para actualizarlo, reemplaza ese archivo con el mismo nombre.
- **Foto:** `public/david.webp`.
- **Capturas de proyectos:** `public/proyectos/`. Agrega imágenes y ponlas en el arreglo `images` del proyecto.
- **LinkedIn:** pon tu URL en `profile.socials.linkedin` y el ícono aparece solo.

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
