"use client";

import type { Locale } from "@/content/types";
import { SHOW_CONSENT_PREFERENCES_EVENT } from "@/lib/consent";

export function CookieSettingsButton({ locale }: { locale: Locale }) {
  function openSettings() {
    window.dispatchEvent(new Event(SHOW_CONSENT_PREFERENCES_EVENT));
  }

  return (
    <button className="footer-cookie-button" onClick={openSettings} type="button">
      {locale === "cs" ? "Nastavení cookies" : "Cookie settings"}
    </button>
  );
}
