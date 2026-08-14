import { NextResponse } from "next/server";
import { parseLocaleParam, validateQuote } from "@/lib/validate-quote";
import type { QuotePayload } from "@/lib/types";

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ ok: false, message: "Invalid body" }, { status: 400 });
  }

  const record = body as Record<string, unknown>;
  const payload: QuotePayload = {
    name: typeof record.name === "string" ? record.name : "",
    phone: typeof record.phone === "string" ? record.phone : "",
    email: typeof record.email === "string" ? record.email : "",
    service: typeof record.service === "string" ? record.service : "",
    message: typeof record.message === "string" ? record.message : "",
  };

  const locale = parseLocaleParam(record.locale);
  const result = validateQuote(payload, locale);

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result);
}
