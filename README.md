# AZETI :: IOT-MONO

## Status

### Working

- *PNPM* for workspace package installation
- *TurboRepo* for advanced build management
- *Vite* for application development/bundling
- *Storybook* for component development/browsing
- *TSC* for TypeScript conformance checks
- *ESLint* for TypeScript/JavaScript linting
- *Prettier* for automatic code formatting
- *Vercel* for development deployments (App + UIKit Storybook)

### Open

- *Jest* and *React Testing Library* for unit testing
- *Chromatic* for visual Storybook testing
- *Playground* for E2E testing

## Folders

### Apps

- *Portal*: Main application for the IOT portal

### Packages

- *Storybook-Config*: Shared configuration and dependencies for component browser
- *TypeScript-Config*: Shared configuration and dependencies for TypeScript compiler
- *UIKit*: Shared components and Material-UI wrappers

## Tasks

### Build

To build all apps and packages, run the following command:

```
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
pnpm run dev
```

## Findings

- PNPM installation still has issues with *Remix* application framework on Vercel related to access to files outside of root.
- Yarn v1 is dated (bug fixes only) and PNPM outperforms it by a major margin. Yarn v2/v3 is not yet officially supported by TurboRepo.
- NPM v8 is super stable and it's traditional package installation is very well supported. Even with workspaces. But it looses dramatically on performance compared to PNPM.

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
