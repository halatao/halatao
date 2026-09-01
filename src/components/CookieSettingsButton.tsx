"use client";

import type { Locale } from "@/content/types";

export function CookieSettingsButton({ locale }: { locale: Locale }) {
  function openSettings() {
    window.Cookiebot?.renew?.();
  }

  return (
    <button className="footer-cookie-button" onClick={openSettings} type="button">
      {locale === "cs" ? "Nastavení cookies" : "Cookie settings"}
    </button>
  );
}
