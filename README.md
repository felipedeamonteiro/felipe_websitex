# Felipe Monteiro — Portfolio

Personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, React Hook Form, and Zod.

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

## Stack

- Next.js 16 (Pages Router)
- React 19 and TypeScript 5
- Tailwind CSS 4 with class-based dark mode
- Zod validation shared by the contact form and API
- Nodemailer for contact delivery
- ESLint 9 and Prettier with Tailwind class sorting
