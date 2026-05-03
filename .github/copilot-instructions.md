# Copilot instructions for fullstack-loving (fullstack-harness-engineering)

This repo is a static frontend portfolio hub that syncs hosting projects and generates a JS data file used by the site.

Build / test / lint
- No test or lint scripts are present. Keep changes small and run manual checks in browser.
- Project generation scripts (run individually):
  - npm run build:projects  => node scripts/build-projects.js
  - npm run sync:hosting   => node scripts/sync-hosting.js
  - npm run sync:all       => runs sync-hosting then build-projects
- To run a single step, call node scripts/<script>.js directly (example above).

High-level architecture (big picture)
- Data flow: scripts/sync-hosting.js fetches hosting inventory (Vercel/Netlify) → writes data/projects.generated.json.
- scripts/build-projects.js merges data/projects.generated.json with data/projects-meta.json (manual metadata) → emits projects.js.
- index.html loads projects.js first, then app.js which renders the UI and preview iframe. projects.js is a generated source of truth and should not be edited manually.
- The site is purely static (HTML/CSS/vanilla JS). Hosting syncs are automated via GitHub Actions (.github/workflows/sync-projects.yml).

Key conventions and repository-specific patterns
- Data formats:
  - data/projects.generated.json: machine-synced hosting records (do not edit directly)
  - data/projects-meta.json: manual metadata used to enrich generated items; keys must match project id values
  - projects.js: const projects = [ ... ] — generated JS module included by index.html
- Multilingual fields: many string fields are objects with "vi" and "en" keys (always provide both where applicable).
- Canonical audience values: "girlfriend", "family", "personal" (used for filtering).
- Status values used in UI: e.g. "live", "needs-metadata"; status influences badges/behavior.
- Platform values: typically "netlify" or "vercel" — used by sync scripts.
- Secrets and tokens: VERCEL_TOKEN and NETLIFY_TOKEN must be set as env vars (and GitHub secrets) for sync-hosting. README.md notes revoking any publicly pasted token.
- Preview behavior: the UI attempts to load live sites into an iframe; many hosts may block embedding — UI falls back gracefully.

Integration notes
- No other AI assistant config files detected (CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, AIDER_CONVENTIONS.md, .clinerules, .cline_rules). If you add other assistant rules, merge important parts here.
- README.md contains the most relevant operational notes; this file summarizes actionable commands and conventions for Copilot sessions.

If you want Copilot to also generate or update data/projects-meta.json entries, prefer edits that change only that file and run npm run build:projects afterward to regenerate projects.js.

(Commit this file to .github so future Copilot sessions can find it.)
