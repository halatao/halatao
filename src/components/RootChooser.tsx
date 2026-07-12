import Link from "next/link";

export function RootChooser() {
  return (
    <main className="shell chooser-shell">
      <section className="hero-panel chooser-panel">
        <p className="eyebrow">halatao.cz</p>
        <h1>Pokračujte na hlavní českou verzi</h1>
        <p className="hero-copy">
          Výchozí verze webu je v češtině. Anglická verze zůstává dostupná jako samostatná volba.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/cs/">
            Pokračovat česky
          </Link>
          <Link className="button button-secondary" href="/en/" hrefLang="en" lang="en">
            Continue in English
          </Link>
        </div>
      </section>
    </main>
  );
}
