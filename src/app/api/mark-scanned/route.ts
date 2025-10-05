import { NextResponse } from "next/server";
import { broadcast } from "../scan-status/route";

export async function POST() {
  broadcast({ status: "scanned", timestamp: Date.now() });
  return NextResponse.json({ ok: true });
}
