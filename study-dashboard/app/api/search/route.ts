import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({ status: "deprecated - migrated to client side for static export" });
}
