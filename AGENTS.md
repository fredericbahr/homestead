# Homestead

npm-workspaces monorepo with the websites of Frederic Bahr's family businesses. Code is in English. Site copy is in German.

## Workspaces

- `apps/copycraft` (package `copycraft`, unscoped): Buchstabenfeder, Sina Weichlein's copywriting business. Astro.
- `apps/office-hub` (`@homestead/office-hub`): Gabriela Bahr's bookkeeping and office services. Chakra app.
- `apps/vital-consultant` (`@homestead/vital-consultant`): Madita Bahr's sport and health consulting. Chakra app.
- `packages/components` (`@homestead/components`): shared components for the Chakra apps.
- `configs/config-ts`: shared tsconfig base.

## Deployment

Netlify deploys all three sites automatically on every push to `main`. A push to `main` is a release. Work on a branch, and push or merge to `main` only when the user asks.

## Tooling

- Biome via ultracite is the only linter and formatter, including for `.astro` files. Use `npm run check` and `npm run fix`. The pre-commit hook runs `ultracite fix` on staged files.
- Every rule turned off in [biome.jsonc](biome.jsonc) has a comment explaining why. Fix the code before you add a rule override.
- Name new files in kebab-case. Existing PascalCase files are allowed to stay, and their filename warnings are expected.
- Run one workspace with `npx turbo run <task> --filter=<package>`.

## Chakra apps (office-hub, vital-consultant)

- Chakra UI **v2** (`extendTheme`, `ChakraProvider`). Use only v2 APIs; v3 APIs won't work here.
- React Router v7: import from `react-router`. `react-router-dom` is not a dependency.
- The contact form sends through EmailJS. It reads `VITE_EMAILJS_PUBLIC_KEY`, `VITE_EMAILJS_SERVICE_ID` and `VITE_EMAILJS_TEMPLATE_ID`. Locally these come from a `.env.local`; in production, from Netlify.
- Shared UI belongs in `@homestead/components`.

## Done

A change is done when `npm run check` reports no errors and `npx turbo run build --filter=<package>` succeeds for every workspace you touched. There are no tests.

## Commits

Use Conventional Commits, with the workspace as the scope: `feat(copycraft): …`, `fix(office-hub): …`. Leave the scope off for repo-wide changes.
