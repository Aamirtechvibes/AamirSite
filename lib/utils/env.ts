const readEnv = (name: string) => process.env[name]?.trim() ?? "";

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  siteUrl: readEnv("NEXT_PUBLIC_SITE_URL") || "http://localhost:4002",
  gaId: readEnv("NEXT_PUBLIC_GA_ID"),
  clarityId: readEnv("NEXT_PUBLIC_CLARITY_ID"),
  supabaseUrl: readEnv("NEXT_PUBLIC_SUPABASE_URL"),
  supabaseAnonKey: readEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY"),
  supabaseServiceRoleKey: readEnv("SUPABASE_SERVICE_ROLE_KEY"),
};

export const hasSupabaseConfig = Boolean(env.supabaseUrl && env.supabaseAnonKey);
export const hasSupabaseWriteConfig = Boolean(
  env.supabaseUrl && (env.supabaseServiceRoleKey || env.supabaseAnonKey),
);

export function absoluteUrl(path = "/") {
  return new URL(path, env.siteUrl).toString();
}
