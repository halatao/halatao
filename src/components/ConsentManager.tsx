"use client";

import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

import { SHOW_CONSENT_PREFERENCES_EVENT, updateConsentState } from "@/lib/consent";
import { updateGoogleMeasurementConsent } from "@/lib/google-measurement";

function synchronizeConsent() {
  const state = {
    analytics: CookieConsent.acceptedCategory("analytics"),
    marketing: CookieConsent.acceptedCategory("marketing"),
  };

  updateGoogleMeasurementConsent(state);
  updateConsentState(state);
}

export function ConsentManager() {
  useEffect(() => {
    function showPreferences() {
      CookieConsent.showPreferences();
    }

    window.addEventListener(SHOW_CONSENT_PREFERENCES_EVENT, showPreferences);

    void CookieConsent.run({
      revision: 1,
      autoClearCookies: true,
      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "bottom center",
          equalWeightButtons: true,
        },
        preferencesModal: {
          layout: "box",
          equalWeightButtons: true,
        },
      },
      cookie: {
        name: "halatao_consent",
        expiresAfterDays: 182,
        sameSite: "Lax",
        secure: true,
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }, { name: /^_gat/ }],
          },
        },
        marketing: {
          autoClear: {
            cookies: [{ name: /^_gcl_/ }, { name: /^_fbp$/ }],
          },
        },
      },
      language: {
        default: "cs",
        autoDetect: "document",
        translations: {
          cs: {
            consentModal: {
              title: "Nastavení měření",
              description:
                "Nezbytné cookies zajišťují základní fungování webu. Analytické a marketingové měření můžete povolit nebo odmítnout.",
              acceptAllBtn: "Povolit vše",
              acceptNecessaryBtn: "Pouze nezbytné",
              showPreferencesBtn: "Upravit nastavení",
              footer: '<a href="/privacy-policy">Ochrana osobních údajů</a>',
            },
            preferencesModal: {
              title: "Nastavení cookies",
              acceptAllBtn: "Povolit vše",
              acceptNecessaryBtn: "Pouze nezbytné",
              savePreferencesBtn: "Uložit nastavení",
              closeIconLabel: "Zavřít",
              sections: [
                {
                  title: "Nezbytné",
                  description: "Zajišťují základní fungování webu a uložení vaší volby.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytické",
                  description: "Pomáhají měřit návštěvnost a používání webu prostřednictvím Google Analytics.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketingové",
                  description: "Pomáhají vyhodnocovat reklamní kampaně, včetně reklam v ChatGPT.",
                  linkedCategory: "marketing",
                },
              ],
            },
          },
          en: {
            consentModal: {
              title: "Measurement settings",
              description:
                "Necessary cookies keep the site working. You can allow or reject analytics and marketing measurement.",
              acceptAllBtn: "Allow all",
              acceptNecessaryBtn: "Necessary only",
              showPreferencesBtn: "Customize",
              footer: '<a href="/privacy-policy">Privacy policy</a>',
            },
            preferencesModal: {
              title: "Cookie settings",
              acceptAllBtn: "Allow all",
              acceptNecessaryBtn: "Necessary only",
              savePreferencesBtn: "Save settings",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Necessary",
                  description: "Required for basic site operation and storing your choice.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description: "Used to measure site traffic and usage through Google Analytics.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description: "Used to evaluate advertising campaigns, including ads in ChatGPT.",
                  linkedCategory: "marketing",
                },
              ],
            },
          },
        },
      },
      onConsent: synchronizeConsent,
      onChange: synchronizeConsent,
    });

    return () => {
      window.removeEventListener(SHOW_CONSENT_PREFERENCES_EVENT, showPreferences);
    };
  }, []);

  return null;
}
