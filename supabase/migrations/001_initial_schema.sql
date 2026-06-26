-- =============================================
-- Club Florida - Database Schema
-- =============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- =============================================
-- DIVISIONS
-- =============================================
create table if not exists divisions (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null,
  sort_order int default 0,
  created_at timestamptz default now()
);

alter table divisions enable row level security;
create policy "Public read divisions" on divisions for select using (true);
create policy "Admin insert divisions" on divisions for insert with check (auth.role() = 'authenticated');
create policy "Admin update divisions" on divisions for update using (auth.role() = 'authenticated');
create policy "Admin delete divisions" on divisions for delete using (auth.role() = 'authenticated');

-- Seed divisions
insert into divisions (name, category, sort_order) values
  ('Primera División', 'Adultos', 1),
  ('Reserva', 'Adultos', 2),
  ('Sub-17', 'Juvenil', 3),
  ('Sub-15', 'Juvenil', 4),
  ('Sub-13', 'Infantil', 5),
  ('Sub-11', 'Infantil', 6),
  ('Sub-9', 'Escuela', 7),
  ('Damas', 'Adultos', 8)
on conflict do nothing;

-- =============================================
-- PLAYERS
-- =============================================
create table if not exists players (
  id uuid primary key default uuid_generate_v4(),
  division_id uuid references divisions(id) on delete set null,
  first_name text not null,
  last_name text not null,
  position text,
  jersey_number int,
  photo_url text,
  birth_date date,
  is_active boolean default true,
  created_at timestamptz default now()
);

create index if not exists idx_players_division on players(division_id);

alter table players enable row level security;
create policy "Public read active players" on players for select using (is_active = true);
create policy "Admin all players" on players for all using (auth.role() = 'authenticated');

-- =============================================
-- MATCHES
-- =============================================
create table if not exists matches (
  id uuid primary key default uuid_generate_v4(),
  division_id uuid references divisions(id) on delete set null,
  home_team text not null,
  away_team text not null,
  match_date timestamptz not null,
  venue text,
  status text default 'scheduled' check (status in ('scheduled','live','completed','postponed')),
  home_score int,
  away_score int,
  matchday text,
  competition text,
  created_at timestamptz default now()
);

create index if not exists idx_matches_division on matches(division_id);
create index if not exists idx_matches_date on matches(match_date);
create index if not exists idx_matches_status on matches(status);

alter table matches enable row level security;
create policy "Public read matches" on matches for select using (true);
create policy "Admin all matches" on matches for all using (auth.role() = 'authenticated');

-- =============================================
-- STANDINGS
-- =============================================
create table if not exists standings (
  id uuid primary key default uuid_generate_v4(),
  division_id uuid references divisions(id) on delete cascade,
  team_name text not null,
  played int default 0,
  won int default 0,
  drawn int default 0,
  lost int default 0,
  goals_for int default 0,
  goals_against int default 0,
  goal_difference int generated always as (goals_for - goals_against) stored,
  points int default 0,
  position int default 0,
  competition text,
  updated_at timestamptz default now()
);

create index if not exists idx_standings_division on standings(division_id);

alter table standings enable row level security;
create policy "Public read standings" on standings for select using (true);
create policy "Admin all standings" on standings for all using (auth.role() = 'authenticated');

-- =============================================
-- CALLUPS (Convocatorias)
-- =============================================
create table if not exists callups (
  id uuid primary key default uuid_generate_v4(),
  match_id uuid references matches(id) on delete cascade,
  title text not null,
  description text,
  deadline timestamptz,
  created_at timestamptz default now()
);

create index if not exists idx_callups_match on callups(match_id);

alter table callups enable row level security;
create policy "Public read callups" on callups for select using (true);
create policy "Admin all callups" on callups for all using (auth.role() = 'authenticated');

-- =============================================
-- CALLUP PLAYERS
-- =============================================
create table if not exists callup_players (
  id uuid primary key default uuid_generate_v4(),
  callup_id uuid references callups(id) on delete cascade,
  player_id uuid references players(id) on delete cascade,
  status text default 'called' check (status in ('called','confirmed','absent')),
  unique(callup_id, player_id)
);

alter table callup_players enable row level security;
create policy "Public read callup_players" on callup_players for select using (true);
create policy "Admin all callup_players" on callup_players for all using (auth.role() = 'authenticated');

-- =============================================
-- RENTALS (Arriendos)
-- =============================================
create table if not exists rentals (
  id uuid primary key default uuid_generate_v4(),
  client_name text not null,
  client_phone text not null,
  client_email text,
  event_type text not null,
  event_date date not null,
  start_time time not null,
  end_time time not null,
  total_price numeric(10,2),
  status text default 'pending' check (status in ('pending','confirmed','completed','cancelled')),
  notes text,
  whatsapp_confirmation_sent boolean default false,
  whatsapp_reminder_sent boolean default false,
  created_at timestamptz default now()
);

create index if not exists idx_rentals_date on rentals(event_date);
create index if not exists idx_rentals_status on rentals(status);

alter table rentals enable row level security;
create policy "Public insert rentals" on rentals for insert with check (true);
create policy "Admin all rentals" on rentals for all using (auth.role() = 'authenticated');
-- Allow public to read their own rental (by phone)
create policy "Public read own rentals" on rentals for select using (true);
