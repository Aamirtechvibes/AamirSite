import { NextRequest, NextResponse } from "next/server";

import { createLead } from "@/lib/services/lead-service";
import { rateLimit } from "@/lib/utils/rate-limit";
import { contactSchema } from "@/lib/validators/contact";

function getRequestIp(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "127.0.0.1";
}

export async function POST(request: NextRequest) {
  const limit = rateLimit(`contact:${getRequestIp(request)}`, 5, 5 * 60_000);
  const headers = {
    "X-RateLimit-Limit": String(limit.limit),
    "X-RateLimit-Remaining": String(limit.remaining),
    "X-RateLimit-Reset": String(limit.resetAt),
  };

  if (!limit.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Too many contact attempts. Please try again in a few minutes.",
      },
      {
        status: 429,
        headers,
      },
    );
  }

  const payload = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        message: parsed.error.issues[0]?.message || "Invalid request.",
      },
      {
        status: 400,
        headers,
      },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json(
      {
        success: true,
        message: "Thanks. Your message is in the queue.",
      },
      {
        headers,
      },
    );
  }

  try {
    await createLead(parsed.data);

    return NextResponse.json(
      {
        success: true,
        message: "Thanks. I will get back to you within 48 hours.",
      },
      {
        headers,
      },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Lead capture is unavailable right now.";

    return NextResponse.json(
      {
        success: false,
        message,
      },
      {
        status: message.includes("Supabase") ? 503 : 500,
        headers,
      },
    );
  }
}
