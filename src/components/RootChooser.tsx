"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function detectPreferredLocale() {
  if (typeof navigator === "undefined") {
    return "cs";
  }

  const candidates = [
    navigator.language,
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
  ]
    .filter(Boolean)
    .map((value) => value.toLowerCase());

  if (candidates.some((value) => value.startsWith("cs") || value.startsWith("sk"))) {
    return "cs";
  }

  return "en";
}

export function RootChooser() {
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/cs");
    router.prefetch("/en");

    const targetLocale = detectPreferredLocale();
    router.replace(targetLocale === "cs" ? "/cs" : "/en");
  }, [router]);

  return (
    <>
      <main aria-busy="true" aria-live="polite" className="shell chooser-shell">
        <section className="hero-panel chooser-panel chooser-skeleton-panel">
          <span className="sr-only">Redirecting to the preferred language version.</span>
          <div aria-hidden="true" className="chooser-skeleton chooser-skeleton-badge" />
          <div aria-hidden="true" className="chooser-skeleton chooser-skeleton-title chooser-skeleton-title-wide" />
          <div aria-hidden="true" className="chooser-skeleton chooser-skeleton-title chooser-skeleton-title-mid" />
          <div aria-hidden="true" className="chooser-skeleton chooser-skeleton-copy chooser-skeleton-copy-wide" />
          <div aria-hidden="true" className="chooser-skeleton chooser-skeleton-copy chooser-skeleton-copy-mid" />
          <div aria-hidden="true" className="chooser-skeleton chooser-skeleton-copy chooser-skeleton-copy-short" />
          <div className="chooser-skeleton-actions" aria-hidden="true">
            <div className="chooser-skeleton chooser-skeleton-button" />
            <div className="chooser-skeleton chooser-skeleton-button chooser-skeleton-button-soft" />
          </div>
        </section>
      </main>
      <noscript>
        <main className="shell chooser-shell">
          <section className="hero-panel chooser-panel">
            <h1>Choose your language</h1>
            <p className="hero-copy">
              JavaScript is required for automatic redirect. You can continue manually below.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/cs">
                Čeština
              </Link>
              <Link className="button button-secondary" href="/en">
                English
              </Link>
            </div>
          </section>
        </main>
      </noscript>
    </>
  );
}
