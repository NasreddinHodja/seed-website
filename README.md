# S.E.E.D.

[![Nuxt 4](https://img.shields.io/badge/Nuxt-4.0-00DC82?logo=nuxt.js&logoColor=white)](https://nuxt.com)
[![Vue 3](https://img.shields.io/badge/Vue-3.5-4FC08D?logo=vue.js&logoColor=white)](https://vuejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-6.14-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](./LICENSE)

Website and digital archive for **S.E.E.D.**, a cross-disciplinary Latin American art collective working at the intersection of contemporary art, experimental media, and web3. The site serves as a living portfolio — cataloguing exhibitions, NFT drops, artist residencies, and merchandise across multiple countries.

> **[Project Documentation](https://seed-website-docs.vercel.app/)**

---

## Features

- **Exhibition Archive** — Detailed documentation of events like the *Cyberia* meet-party series and the *Parallel Biome Hypothesis* multi-room installation
- **NFT Collections** — Showcases for Zora v1/v2 collective drops with per-artist attribution
- **Masonry Gallery** — Dynamic, responsive image gallery with lazy loading, expandable views, and progressive reveal
- **Bilingual Content** — Full Portuguese/English support driven by structured content files
- **Media Optimization** — WebP-first images served through Cloudflare R2 Workers with NuxtImage processing
- **Artist Profiles** — Individual entity pages for collective members

## Architecture

```
app/
├── pages/            # File-based routing (methods, web3, merch, entities, tools)
├── components/
│   ├── Layouts/      # Page structure (headers, scrollable posts, nav indexes)
│   └── Shared/       # Reusable UI (galleries, embeds, credits, captions)
├── plugins/          # Vue directives (click-outside)
└── utils/            # Helpers (YouTube URL parsing)

content/              # Data layer — TypeScript files exporting typed content
│                     # per page, fully decoupled from presentation
shared/
├── types/            # Shared type definitions (Picture, LinkedName, etc.)
└── utils/            # CDN URL builders (Cloudflare R2)
```

Content is fully separated from components. Each page pulls from a corresponding TypeScript file in `content/`, making the site easy to update without touching any Vue templates.

## Tech Stack

| Layer     | Technology                                                  |
|-----------|-------------------------------------------------------------|
| Framework | Nuxt 4, Vue 3, Vue Router                                   |
| Language  | TypeScript (strict)                                         |
| Styling   | Tailwind CSS, custom fonts (Monument Extended, Azeret Mono) |
| Images    | @nuxt/image, Cloudflare R2 Workers                          |
| Icons     | @nuxt/icon with Meteor Icons                                |
| Quality   | ESLint 9, Prettier, GitHub Actions CI                       |

## Getting Started

**Prerequisites:** Node.js 23+ (see `.nvmrc`)

```bash
# Install dependencies
yarn install

# Start dev server at http://localhost:3000
yarn dev

# Generate static site for production
yarn generate

# Preview production build locally
yarn lserve
```

## Linting & Formatting

```bash
yarn format          # Auto-format with Prettier
yarn format:check    # Check formatting
yarn lint            # Run ESLint
yarn lint:fix        # Auto-fix lint issues
```

## License

[GPL-3.0](./LICENSE)
