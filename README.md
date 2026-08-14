# Jamal Alfan Technical Services Co.

Marketing site for **Jamal Alfan Technical Services Co.**, a Dubai technical contractor for villas and buildings — electrical works, painting, interior decor, gypsum ceilings, bathroom tiling, and plumbing.

**Production:** [jamalalfantechnicalservicesco.com](https://jamalalfantechnicalservicesco.com)

Slogan: *You Dream It We Build It* / *تحلم بها نحن نبنيها*

## Stack

- [Next.js](https://nextjs.org/) 15 (App Router) and React 19
- TypeScript (strict)
- Tailwind CSS 3
- English and Arabic (`en` / `ar`) with RTL
- Deployed on [Vercel](https://vercel.com)

## Requirements

- Node.js 22.23.2 (see `.nvmrc`)
- npm 10+

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). English is at `/en`, Arabic at `/ar`.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run lint` | ESLint |
| `npm run build` | Production build |
| `npm start` | Serve the production build |

## Project structure

```
app/[locale]/       Localized pages, metadata, Open Graph images
app/sitemap.ts      Sitemap
components/         Header, footer, service cards, quote form
lib/content.ts      Company, services, projects, cities, FAQs
lib/seo.ts          Metadata and JSON-LD
public/images/      Brand, service, and field-work photos
```

Service pages:

- `/services/electrical-works`
- `/services/painting-services`
- `/services/interior-decor`
- `/services/gypsum-ceiling-works`
- `/services/tile-bathroom-work`
- `/services/plumbing`

Coverage includes Dubai Marina, Jumeirah, Arabian Ranches, Abu Dhabi, Sharjah, and further UAE cities.

## Deployment

Vercel builds from the `main` branch. After changing environment variables, trigger a new deployment — `NEXT_PUBLIC_*` values are baked in at build time.

## License

Proprietary. See [LICENSE](LICENSE).
