import { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * Returns the visitor's ISO country code as detected by Vercel's edge
 * network (x-vercel-ip-country). Used by the LocaleBanner to decide
 * whether to invite an overseas visitor to switch to intl.sienovo.cn.
 *
 * Falls back to country=null on local dev where the header is absent —
 * the banner treats null as "unknown" and stays hidden, so users in
 * China are never accidentally nagged.
 */
export default function handler(req: VercelRequest, res: VercelResponse) {
  const country =
    (req.headers["x-vercel-ip-country"] as string | undefined)?.toUpperCase() ||
    null;

  // Edge caches by IP-derived header; per-visitor static. 1h is fine.
  res.setHeader("Cache-Control", "private, max-age=3600");
  res.status(200).json({
    country,
    isChina: country === "CN",
  });
}
