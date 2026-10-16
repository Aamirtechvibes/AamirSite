import type { LeadInput } from "@/types";

import { getSupabaseServerClient } from "@/lib/supabase/server";

export async function createLead(input: LeadInput) {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    throw new Error("Supabase is not configured for lead capture.");
  }

  const { error } = await supabase.from("leads").insert({
    name: input.name,
    email: input.email,
    message: input.message,
  });

  if (error) {
    throw new Error(error.message);
  }

  return { ok: true };
}
