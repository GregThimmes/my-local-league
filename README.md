# Little League Next.js

This app uses Next.js, NextAuth, Prisma, and PostgreSQL.

## Database Setup (Vercel Postgres)

1. Create a Vercel Postgres database from your Vercel project dashboard.
2. Add your connection string to `DATABASE_URL`.
3. Run Prisma migration commands locally:

```bash
npm run prisma:migrate:dev
npm run prisma:generate
```

4. Seed demo data if needed:

```bash
npm run db:seed
```

## Local Development

1. Set env vars in `.env`:

```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public"
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

2. Start the app:

```bash
npm run dev
```

## Production Deployment (Vercel)

Set `DATABASE_URL`, `NEXTAUTH_SECRET`, and `NEXTAUTH_URL` in Vercel project environment variables.

Before serving production traffic, apply migrations:

```bash
npm run prisma:migrate:deploy
```
