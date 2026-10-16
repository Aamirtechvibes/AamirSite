create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text not null,
  teaser text not null default '',
  problem text not null,
  why_built text not null default '',
  users jsonb not null default '[]'::jsonb,
  solution text not null,
  impact text not null,
  outcomes jsonb not null default '[]'::jsonb,
  architecture jsonb not null default '[]'::jsonb,
  metrics jsonb not null default '[]'::jsonb,
  tech jsonb not null default '[]'::jsonb,
  tags jsonb not null default '[]'::jsonb,
  status text not null check (status in ('Live', 'In Progress', 'Case Study')),
  featured boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.content (
  id uuid primary key default gen_random_uuid(),
  type text not null unique check (type in ('hero', 'forYou', 'vision', 'research')),
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.projects enable row level security;
alter table public.content enable row level security;
alter table public.leads enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'projects' and policyname = 'Public read projects'
  ) then
    create policy "Public read projects" on public.projects for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'content' and policyname = 'Public read content'
  ) then
    create policy "Public read content" on public.content for select using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'leads' and policyname = 'Public insert leads'
  ) then
    create policy "Public insert leads" on public.leads for insert with check (true);
  end if;
end
$$;
