# copycraft (Buchstabenfeder)

Static Astro 6 site with Tailwind CSS v4 (through the Vite plugin) and Swup page transitions. It started from the "Purrfectly Zen" template.

- Write pages and components as `.astro`. React is only for interactive islands (currently just `navigation.tsx`, loaded with `client:load`).
- Page routes are German slugs (`angebote`, `ueber-mich`, `kontakt`). Renaming a page file changes a live URL.
- Import through the tsconfig path aliases (`@assets/*`, `@components/*`, `@lib/*`, `@layouts/*`) rather than long relative paths.
- Biome's Astro support is partial. Its parser rejects `{/* … */}` comments in templates, so put comments in the frontmatter.
- The sitemap's `lastmod` is a fixed date in [astro.config.mjs](astro.config.mjs). Update it when you change page content.
- Fonts come from Google through Astro's `fonts` config and are exposed as CSS variables (`--font-heading`, `--font-hand`, …).
- Business terms are in [GLOSSARY.md](GLOSSARY.md). Read it before you name code or write copy here, and use its terms instead of the ones listed under _Avoid_.
