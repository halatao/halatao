export const CONSENT_UPDATED_EVENT = "halatao:consent-updated";
export const SHOW_CONSENT_PREFERENCES_EVENT = "halatao:show-consent-preferences";

export type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

declare global {
  interface Window {
    HalataoConsent?: ConsentState;
  }
}

export function getConsentState(): ConsentState {
  if (typeof window === "undefined") {
    return { analytics: false, marketing: false };
  }

  return window.HalataoConsent ?? { analytics: false, marketing: false };
}

export function hasAnalyticsConsent() {
  return getConsentState().analytics;
}

export function hasMarketingConsent() {
  return getConsentState().marketing;
}

export function updateConsentState(state: ConsentState) {
  if (typeof window === "undefined") return;

  window.HalataoConsent = state;
  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: state }));
}
