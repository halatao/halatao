import Script from "next/script";

export function AutomationThankYou() {
  return (
    <>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
      <div className="automation-page">
        <section className="automation-thankyou">
          <div className="automation-thankyou-card">
            <h1>Děkuji, ozvu se.</h1>

            <p>
              Informace jsem obdržel.
              <br />
              Pokud chcete proces urychlit, můžete si rovnou domluvit termín hovoru.
            </p>

            <div className="calendly-inline-widget" data-url="https://calendly.com/ondrej-halata/30min" style={{ minWidth: "320px", height: "700px" }} />

            <p className="automation-thankyou-note">
              Pokud se kalendář nezobrazí, můžete použít{" "}
              <a href="https://calendly.com/ondrej-halata/30min" target="_blank" rel="noreferrer">
                tento odkaz
              </a>
              .
            </p>
          </div>
        </section>

        <footer className="automation-thankyou-footer">© Bc. Ondřej Halata</footer>
      </div>
    </>
  );
}
