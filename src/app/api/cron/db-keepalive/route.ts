import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

const KEEPALIVE_KEY = "keepalive:last-ping";

// Upstash Redis is this app's data store. Free-tier databases can be
// archived after a long stretch with no traffic, so Vercel Cron (see
// vercel.json — once a day, the most frequent schedule the Hobby plan
// allows) hits this route and writes a timestamp, guaranteeing regular
// activity even when nobody visits the site.
export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const pingedAt = new Date().toISOString();
    await redis.set(KEEPALIVE_KEY, pingedAt);
    return NextResponse.json({ ok: true, pingedAt });
  } catch (error) {
    console.error("Redis keepalive failed", error);
    return NextResponse.json({ ok: false, error: "Redis keepalive failed" }, { status: 503 });
  }
}
