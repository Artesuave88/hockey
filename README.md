# Nottingham Phantoms IHC (SvelteKit)

Community-focused placeholder site for Nottingham Phantoms IHC, built with SvelteKit + TypeScript + Tailwind CSS.

## Branding Asset Note

- Active logo source is `src/lib/assets/logo.jpg`.
- If a newer logo export is provided, replace that file.
- TODO: generate `favicon.ico` from the logo for broad browser compatibility.

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run check
```

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

- `vercel.json` is configured with:
  - `cleanUrls: true`
  - `trailingSlash: false`
- Deploy from Vercel dashboard or Vercel CLI using the project root.
