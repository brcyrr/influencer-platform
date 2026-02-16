# AGENTS.md — Project rules for Codex / agents

## Project goal
Build an influencer-brand collaboration platform (marketplace) with:
- Next.js web app
- NestJS API
- PostgreSQL DB
MVP focus: auth, profiles, campaigns, offers, admin. AI comes later as a separate service.

## Tech stack
- Monorepo: pnpm workspaces
- Frontend: Next.js (TypeScript, App Router)
- Backend: NestJS (TypeScript)
- Database: PostgreSQL (Docker for local)
- ORM: Prisma

## Coding standards
- TypeScript strict mode enabled
- Prefer small, composable modules
- Keep controllers thin; business logic in services

## Commands (must run before finishing a task)
- `pnpm install`
- `docker compose -f infra/docker-compose.yml up -d`
- `pnpm db:migrate`
- `pnpm --filter api dev`
- `pnpm --filter web dev`

## Dependencies
- Do not add new dependencies without explaining why.
