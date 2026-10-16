import type { LeadInput } from "@/types";

async function parseResponse<T>(response: Response): Promise<T> {
  const body = (await response.json().catch(() => ({}))) as T & { message?: string };

  if (!response.ok) {
    throw new Error(body.message || "Unable to complete request.");
  }

  return body;
}

export async function submitLead(input: LeadInput) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  return parseResponse<{ success: boolean; message: string }>(response);
}
