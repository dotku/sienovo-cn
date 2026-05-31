import { useEffect, useRef, useState } from "react";
import { Globe, X } from "lucide-react";

/**
 * Centered modal that prompts visitors outside China to switch to
 * intl.sienovo.cn (the English site). Geo is fetched from /api/geo
 * which reads Vercel's x-vercel-ip-country header; we never nag
 * visitors inside China.
 *
 * Dismissal is persisted in localStorage so the modal doesn't reappear.
 * ESC and backdrop-click both count as "stay on the Chinese site".
 */

// v3 marks the UI overhaul from sticky banner → centered modal. Users who
// dismissed the v2 banner get one re-prompt under the new presentation.
const STORAGE_KEY = "sienovo-locale-switch-v3";
const INTL_URL = "https://intl.sienovo.cn";

export default function LocaleSwitchModal() {
  const [show, setShow] = useState(false);
  const primaryButtonRef = useRef<HTMLAnchorElement>(null);

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
        // (local dev / blocked header) keeps the modal hidden.
        if (data.country && !data.isChina) setShow(true);
      } catch {
        // Network failure: stay quiet rather than risk false-positive in CN.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // Focus the primary CTA when the modal opens & lock body scroll.
  useEffect(() => {
    if (!show) return;
    primaryButtonRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
    // dismiss is stable; we intentionally only re-run on `show`.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  }

  function goIntl() {
    localStorage.setItem(STORAGE_KEY, "1");
    window.location.href = INTL_URL;
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="locale-switch-title"
      aria-describedby="locale-switch-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        // Click on backdrop (outside the card) dismisses.
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close — stay on Chinese site"
          className="absolute top-3 right-3 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-gradient-to-br from-red-600 to-red-700 text-white px-6 py-8 text-center">
          <div className="mx-auto w-14 h-14 rounded-full bg-white/15 flex items-center justify-center mb-4">
            <Globe className="w-8 h-8" aria-hidden="true" />
          </div>
          <h2 id="locale-switch-title" className="text-2xl font-bold mb-2">
            Visiting from outside China?
          </h2>
          <p
            id="locale-switch-desc"
            className="text-red-50 text-sm leading-relaxed"
          >
            Switch to our English site for international product specs,
            pricing in USD, and global sales & support.
          </p>
        </div>

        <div className="px-6 py-5 space-y-3 bg-white">
          <a
            ref={primaryButtonRef}
            href={INTL_URL}
            onClick={(e) => {
              e.preventDefault();
              goIntl();
            }}
            className="block w-full text-center bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-3 rounded-lg transition-colors shadow-sm"
          >
            Visit intl.sienovo.cn →
          </a>
          <button
            type="button"
            onClick={dismiss}
            className="block w-full text-center text-gray-600 hover:text-gray-900 font-medium px-4 py-2.5 rounded-lg transition-colors"
          >
            Stay on Chinese site (留在中文站)
          </button>
        </div>
      </div>
    </div>
  );
}
