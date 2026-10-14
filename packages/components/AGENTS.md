# @homestead/components

Shared Chakra UI v2 components for office-hub and vital-consultant.

- There is no build step. The apps import the TypeScript source directly through `main: src/index.ts`, so a change here shows up in both apps right away. Build both after you edit.
- Export every public component from [src/index.ts](src/index.ts).
- `react` and `framer-motion` are peer dependencies supplied by the apps. Add a new shared runtime library as a peer dependency too.
