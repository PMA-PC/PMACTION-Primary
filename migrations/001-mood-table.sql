create table if not exists mood_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade,
  mood integer not null,
  note text,
  created_at timestamptz default now()
);
