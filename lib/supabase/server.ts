import { createClient, type SupabaseClient } from "@supabase/supabase-js";

import { env, hasSupabaseConfig } from "@/lib/utils/env";

let cachedClient: SupabaseClient | null | undefined;

export function getSupabaseServerClient() {
  if (cachedClient !== undefined) {
    return cachedClient;
  }

  if (!hasSupabaseConfig) {
    cachedClient = null;
    return cachedClient;
  }

  cachedClient = createClient(
    env.supabaseUrl,
    env.supabaseServiceRoleKey || env.supabaseAnonKey,
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    },
  );

  return cachedClient;
}
