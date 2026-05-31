import { useEffect, useState } from "react";
import { Globe, X } from "lucide-react";

/**
 * Slim top-of-page banner that prompts visitors outside China to switch
 * to intl.sienovo.cn (the English site). Geo is fetched from /api/geo
 * which reads Vercel's x-vercel-ip-country header; we never nag visitors
 * inside China.
 *
 * Dismissal is persisted in localStorage so the banner doesn't reappear.
 */

const STORAGE_KEY = "sienovo-locale-banner-v1";
const INTL_URL = "https://intl.sienovo.cn";

export default function LocaleBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/geo");
        if (!res.ok) return;
        const data = (await res.json()) as {
          country: string | null;
          isChina: boolean;
        };
        if (cancelled) return;
        // Only nag if we have a definitive non-China reading. country=null
        // (local dev / blocked header) keeps the banner hidden.
        if (data.country && !data.isChina) setShow(true);
      } catch {
        // Network failure: stay quiet rather than risk false-positive in CN.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  }

  function goIntl() {
    // Remember the choice so the banner doesn't reappear if they come back.
    localStorage.setItem(STORAGE_KEY, "1");
    window.location.href = INTL_URL;
  }

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Language preference"
      className="sticky top-0 z-50 bg-gradient-to-r from-red-600 to-red-700 text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3 text-sm">
        <div className="flex items-center gap-2 min-w-0">
          <Globe className="w-4 h-4 shrink-0" aria-hidden="true" />
          <p className="truncate">
            <span className="font-medium">Visiting from outside China?</span>{" "}
            <span className="hidden sm:inline opacity-90">
              Switch to our English site for international product info,
              pricing in USD, and global support.
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={goIntl}
            className="bg-white text-red-700 px-3 py-1 rounded font-semibold text-xs hover:bg-red-50 transition-colors whitespace-nowrap"
          >
            Visit intl.sienovo.cn →
          </button>
          <button
            type="button"
            onClick={dismiss}
            aria-label="Stay on Chinese site"
            className="text-white/80 hover:text-white p-1 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
