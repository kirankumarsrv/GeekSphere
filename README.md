# GeekConnect MVP

GeekConnect is a verified student community for building, learning, and collaborating. This repository contains a working MVP implementation of the core product loop: college-email signup, verification, profile creation, project showcase, team discovery, and a build feed.

## What is implemented

- College-email signup flow with domain validation against stored colleges and allowed domains
- One-time verification code flow for email confirmation
- Local SQLite-backed persistence using Prisma
- Build feed for technical posts
- Project showcase pages and project creation form
- Team finder and search pages
- Admin view for colleges and moderation queue placeholder data
- Seed endpoint for demo data

## Stack

- Next.js 16 + TypeScript + Tailwind CSS
- Prisma + SQLite
- Server actions / route handlers for data writes

## Project structure

- app/ — routes, pages, and API handlers
- components/ — shared UI components
- lib/ — database client and auth helpers
- prisma/ — Prisma schema and migrations-ready setup

## Getting started

1. Install dependencies
   ```bash
   npm install
   ```

2. Create your local environment file
   ```bash
   cp .env.example .env
   ```

3. Generate Prisma client and apply the schema
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

5. Open http://localhost:3000

## Seed demo data

To populate sample colleges and users locally, run:

```bash
curl -X POST http://localhost:3000/api/seed
```

## Signup and verification flow

Use a college email domain that exists in the local seed data, for example:

- aarav@rvce.edu.in
- sana@pes.edu

The signup endpoint returns a verification code in the response body for local development. Enter that code on the verification step to complete signup.

## Build verification

Run:

```bash
npm run build
```

## Notes

- The current MVP uses local SQLite storage for simplicity.
- The verification flow is intentionally lightweight for local development and can be upgraded to real email delivery later.
