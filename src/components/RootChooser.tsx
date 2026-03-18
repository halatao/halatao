"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { siteConfig } from "@/lib/site";

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
    const targetLocale = detectPreferredLocale();
    router.replace(targetLocale === "cs" ? "/cs" : "/en");
  }, [router]);

  return (
    <main className="shell chooser-shell">
      <section className="hero-panel hero-home chooser-panel">
        <p className="eyebrow">{siteConfig.displayName}</p>
        <h1>Custom web applications, takeover, internal tools, and contract delivery support</h1>
        <p className="hero-copy">
          Independent software delivery for companies that need a practical partner for a real project, inherited application,
          internal system, automation, or integration.
        </p>
        <div className="content-card chooser-copy">
          <h2>Choose the language that fits your buying context</h2>
          <p>
            Czech visitors are redirected to the Czech version by default. Everyone else is sent to English. If that guess is
            wrong, choose manually below.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/cs">
              Čeština
            </Link>
            <Link className="button button-secondary" href="/en">
              English
            </Link>
          </div>
        </div>
        <div className="chooser-grid">
          <Link className="chooser-card" href="/cs">
            <strong>Čeština</strong>
            <span>Webové aplikace na míru, převzetí aplikací, interní systémy, automatizace a kontraktní spolupráce.</span>
          </Link>
          <Link className="chooser-card" href="/en">
            <strong>English</strong>
            <span>Custom web applications, existing app takeover, internal tools, automations, and contract support.</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
