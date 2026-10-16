# Aamir Portfolio System

Premium portfolio system built with Next.js App Router, Tailwind CSS, Framer Motion, Supabase, and Vercel-friendly API routes.

## Stack

- Next.js 15.5.3
- React 19.1.1
- Tailwind CSS 4.1
- Framer Motion 12.23
- Supabase PostgreSQL

## Architecture

`UI -> hooks -> service layer -> API -> database -> analytics`

## Routes

- `/`
- `/systems`
- `/project/[slug]`
- `/research`
- `/vision`
- `/api/projects`
- `/api/projects/[slug]`
- `/api/contact`
- `/api/cv`

## Setup

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env.local`.
3. Add Supabase and analytics keys.
4. Run `npm run dev`.

## Database

Use [`/Users/aamirkhan/Developer/Aamir_portfolio_codex/supabase/schema.sql`](/Users/aamirkhan/Developer/Aamir_portfolio_codex/supabase/schema.sql) and [`/Users/aamirkhan/Developer/Aamir_portfolio_codex/supabase/seed.sql`](/Users/aamirkhan/Developer/Aamir_portfolio_codex/supabase/seed.sql) to initialize the project content and lead capture tables.
