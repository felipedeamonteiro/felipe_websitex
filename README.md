# Felipe Monteiro — Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, three.js (React Three Fiber), Motion, React Hook Form, and Zod.

Contributors and AI agents: read [`AGENTS.md`](AGENTS.md) first. It documents the architecture, design system, i18n and conventions, and must be updated with every feature change.

## Requirements

- Node.js 24 or newer (see `.nvmrc`)
- npm 11 or newer

## Getting started

```bash
nvm use
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3003](http://localhost:3003).

## Environment variables

The contact form needs these values in `.env.local`:

- `USER_MAIL`: Gmail address used by Nodemailer
- `MAIL_PASSWORD`: Gmail app password (not the account password)
- `DESTINATION_MAIL`: address that receives contact messages

Environment files are ignored by Git. Do not commit credentials.

## Commands

```bash
npm run dev           # Development server on port 3003
npm run build         # Production build
npm run start         # Production server on port 3003
npm run lint          # ESLint
npm run typecheck     # Strict TypeScript checks
npm run format        # Format files with Prettier
npm run format:check  # Verify formatting
```

## Pages

| Route       | Description                                                                                        |
| ----------- | -------------------------------------------------------------------------------------------------- |
| `/`         | Main portfolio: neon-glass layout with a 3D workstation, a neon-city parallax scene and a 3D globe |
| `/original` | First version of the site                                                                          |
| `/glass`    | Neon-glass layout without 3D or parallax                                                           |
| `/cyber`    | Always-dark 3D layout                                                                              |
| `/parallax` | Always-dark neon-city parallax                                                                     |

Only `/` is linked and indexed. The other four layouts are kept for reference and are reachable only by typing their URL. Every page is available in Portuguese (default), English (`/en`), Spanish (`/es`) and Japanese (`/ja`).

## Stack

- Next.js 16 (Pages Router)
- React 19 and TypeScript 5
- Tailwind CSS 4 with class-based dark mode
- three.js with React Three Fiber, drei and postprocessing (client-only, lazy-loaded)
- Motion for scroll-driven parallax and reveals
- Next.js built-in i18n: pt-BR, en, es, ja
- Zod validation shared by the contact form and API
- Nodemailer for contact delivery
- ESLint 9 and Prettier with Tailwind class sorting
