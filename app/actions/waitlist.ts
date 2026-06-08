"use server";

import { supabase } from "@/lib/supabase";

export async function joinWaitlist(
  name: string,
  email: string
): Promise<{ error?: string }> {
  const { error } = await supabase
    .from("vaino_waitlist")
    .insert({ name: name.trim(), email: email.trim().toLowerCase() });

  if (error) {
    if (error.code === "23505") {
      return { error: "This email is already on the waitlist." };
    }
    return { error: `DB error ${error.code}: ${error.message}` };
  }

  return {};
}
