import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Returns the visitor's ISO country code as detected by Vercel's edge
 * network (x-vercel-ip-country). Used by LocaleSwitchModal to decide
 * whether to invite an overseas visitor to switch to intl.sienovo.cn.
 *
 * In production, a missing header (which would happen if Vercel's
 * edge geo lookup fails) returns country=null so the modal stays
 * hidden — better to skip a prompt than accidentally show it to CN
 * users.
 *
 * In local dev (vercel dev), the edge header is never set, which used
 * to make the modal untestable. We now fall back to country="US" in
 * development so the prompt shows up locally for visual verification.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  const headerCountry = (
    req.headers["x-vercel-ip-country"] as string | undefined
  )?.toUpperCase();
  const isDev = process.env.NODE_ENV !== "production";

  const country = headerCountry || (isDev ? "US" : null);

  // Edge caches by IP-derived header; per-visitor static. 1h is fine.
  // Dev: no cache so toggling NODE_ENV / refreshing reflects immediately.
  res.setHeader(
    "Cache-Control",
    isDev ? "no-store" : "private, max-age=3600"
  );
  res.status(200).json({
    country,
    isChina: country === "CN",
  });
}
