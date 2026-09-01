"use client";

import type { Locale } from "@/content/types";

export function CookieSettingsButton({ locale }: { locale: Locale }) {
  function openSettings() {
    const openCookiebot = () => {
      window.Cookiebot?.renew?.();
      window.Cookiebot?.show?.();
    };

    if (window.Cookiebot) {
      openCookiebot();
      return;
    }

    window.addEventListener("CookiebotOnConsentReady", openCookiebot, { once: true });
  }

  return (
    <button className="footer-cookie-button" onClick={openSettings} type="button">
      {locale === "cs" ? "Nastavení cookies" : "Cookie settings"}
    </button>
  );
}
