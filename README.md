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

The Pages build exports all five routes to `dist/client` and checks that their
HTML and local assets exist. Only that static folder is uploaded to Pages.
The default development and build commands retain the local Sites setup.

The previous website remains available in Git history before this migration.
