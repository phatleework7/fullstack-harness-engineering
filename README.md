# fullstack-harness-engineering

## Project automation

This repo can auto-sync projects from Vercel and Netlify, then rebuild [projects.js](/Users/phat1/GitHub/Myself/my_funfam/fullstack-loving/projects.js) for the static site.

### Files

- `data/projects.generated.json`: hosting inventory synced from Vercel and Netlify
- `data/projects-meta.json`: your manual labels and card content
- `scripts/sync-hosting.js`: fetches hosting projects by API
- `scripts/build-projects.js`: merges generated and manual data into `projects.js`

### Local usage

1. Revoke the Vercel token you pasted publicly and create a new one.
2. Export one or both tokens:
   - `export VERCEL_TOKEN=...`
   - `export NETLIFY_TOKEN=...`
3. Run `npm run sync:all`

### GitHub Actions setup

Add these repository secrets:

- `VERCEL_TOKEN`
- `NETLIFY_TOKEN`

The workflow at `.github/workflows/sync-projects.yml` runs every 12 hours and can also be triggered manually.

### Metadata behavior

When a new hosting project appears:

- it is added automatically to `data/projects.generated.json`
- it is included automatically in `projects.js`
- if it has no matching entry in `data/projects-meta.json`, it defaults to:
  - `audience: "personal"`
  - generated fallback descriptions
  - basic stack from hosting data

To customize a new card, add an entry with the same `id` in `data/projects-meta.json`.
