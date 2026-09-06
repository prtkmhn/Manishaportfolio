# Manisha Deshpande — Portfolio

A modern, accessible portfolio and print-ready résumé for Manisha Deshpande, Software Development Engineer at Amazon Web Services.

## Routes

- Portfolio: `https://manisha-deshpande.github.io/portfolio/`
- A4 résumé: `https://manisha-deshpande.github.io/portfolio/resume/`

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm run verify
```

## Publishing

The `deploy-pages.yml` workflow builds and publishes `dist` whenever `main` changes. In the repository’s **Settings → Pages**, select **GitHub Actions** as the publishing source once.

Portfolio and résumé content share one source of truth in `src/data/profile.ts`.
