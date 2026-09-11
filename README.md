# Brandon Liu portfolio

Live site: https://brandon-liu.github.io/

## Development

Use Node.js 22.13 or newer, then run:

```sh
npm ci
npm run dev
```

## GitHub Pages

Push changes to `main` to build and deploy through `.github/workflows/deploy-pages.yml`.
The repository's **Settings → Pages → Source** must be **GitHub Actions**.

```sh
npm run build:pages
```

The Pages build exports the routes to `dist/client`. The verification script
reads the build manifest and checks every exported page (including the 404 page)
and its local assets. Only that static folder is uploaded to Pages.
The default development and build commands retain the local Sites setup.

## Code layout

- `app/page.tsx` assembles the homepage sections.
- `components/featured-projects.ts` holds the CAD images, labels, and callout coordinates.
- `components/featured-showcase.tsx` handles project selection and scrolling.
- `components/cad-subsystem-viewer.tsx` renders each robot's subsystem views.
- `components/about-section.tsx` contains the coursework preview and ordered full list.
- `components/profile-intro.tsx` keeps the introduction shared by the hero and About section.
- `app/globals.css` contains the shared theme and responsive styles.
- `/contact`, `/experience`, and `/projects` redirect to homepage sections;
  `/about` retains its standalone profile page.

## Checks

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build:pages
```

Run `npm run format` to format source files. Generated build output is excluded.
Use `build:pages` before publishing: the default `build` alone does not validate
the static export used by GitHub Pages.
