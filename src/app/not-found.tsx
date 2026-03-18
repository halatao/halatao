import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell not-found">
      <section className="content-card">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>
          The page may have moved during the migration from the original static site. Continue through the main entry points
          below.
        </p>
        <p>
          Stránka se mohla změnit při migraci z původního statického webu. Pokračujte přes hlavní vstupy nebo přes přehled
          služeb.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/cs">
            Čeština
          </Link>
          <Link className="button button-secondary" href="/en">
            English
          </Link>
          <Link className="button button-secondary" href="/cs/sluzby">
            Služby
          </Link>
          <Link className="button button-secondary" href="/en/services">
            Services
          </Link>
        </div>
      </section>
    </main>
  );
}
