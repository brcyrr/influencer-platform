# Influencer Platform Monorepo

Monorepo for an influencer-brand collaboration MVP:
- `apps/web`: Next.js (TypeScript, App Router) on `http://localhost:3000`
- `apps/api`: NestJS (TypeScript) on `http://localhost:3001`
- PostgreSQL via `infra/docker-compose.yml`
- Prisma in API app

## Prerequisites
- Node.js 20+
- pnpm 9+
- Docker Desktop (or Docker Engine with Compose)

## Setup
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start PostgreSQL:
   ```bash
   docker compose -f infra/docker-compose.yml up -d
   ```
3. Run Prisma migration:
   ```bash
   pnpm db:migrate
   ```
4. Seed admin user:
   ```bash
   pnpm db:seed
   ```

## Run apps
- Start API only:
  ```bash
  pnpm --filter api dev
  ```
- Start Web only:
  ```bash
  pnpm --filter web dev
  ```
- Start both API + Web:
  ```bash
  pnpm dev
  ```

## Root scripts
- `pnpm dev`: run API and Web together (DB is started separately)
- `pnpm lint`: run lint scripts in both apps
- `pnpm typecheck`: run typecheck scripts in both apps
- `pnpm db:migrate`: run Prisma migration from API app
- `pnpm db:seed`: seed admin user from API app

## Admin seed user
- Email: `admin@example.com`
- Password: `Password123!`
- Role: `ADMIN`

Seed is idempotent and uses upsert by email.

## Health checks
- API: `GET http://localhost:3001/health` returns `{"status":"ok"}`
- Web home page calls API health endpoint and displays status.
