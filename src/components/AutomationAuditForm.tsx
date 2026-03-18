"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import { buildThankYouHref } from "@/content/builders";

export function AutomationAuditForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    if ((formData.get("_gotcha") as string) !== "") {
      setPending(false);
      router.push(buildThankYouHref("cs"));
      return;
    }

    const payload = {
      email: formData.get("email"),
      phone: formData.get("phone"),
      company_size: formData.get("company_size"),
      pain_point: formData.get("pain_point"),
      locale: "cs",
      source: "automation-audit",
    };

    const response = await fetch("https://formspree.io/f/maqdndyk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    setPending(false);

    if (!response.ok) {
      setError("Odeslání se nepovedlo. Zkuste to prosím znovu.");
      return;
    }

    router.push(buildThankYouHref("cs"));
  }

  return (
    <form className="automation-audit-form" onSubmit={onSubmit}>
      <input type="text" name="_gotcha" className="automation-honeypot" tabIndex={-1} autoComplete="off" />

      <div>
        <label className="automation-field-label" htmlFor="automation-email">
          E-mail
        </label>
        <input id="automation-email" type="email" name="email" required className="automation-field" />
      </div>

      <div>
        <label className="automation-field-label" htmlFor="automation-phone">
          Telefon
        </label>
        <input id="automation-phone" type="tel" name="phone" className="automation-field" />
      </div>

      <div>
        <label className="automation-field-label" htmlFor="automation-company-size">
          Kolik lidí ve firmě pracuje?
        </label>
        <select id="automation-company-size" name="company_size" required className="automation-field automation-select" defaultValue="">
          <option value="" disabled>
            Vyberte…
          </option>
          <option>1–4</option>
          <option>5–10</option>
          <option>11–30</option>
          <option>31–100</option>
          <option>100+</option>
        </select>
      </div>

      <div>
        <label className="automation-field-label" htmlFor="automation-pain-point">
          Kde dnes ve firmě trávíte nejvíc času ručně?
        </label>
        <textarea id="automation-pain-point" name="pain_point" rows={5} required className="automation-field automation-textarea" />
      </div>

      {error ? <p className="automation-form-error">{error}</p> : null}

      <button type="submit" className="automation-submit" disabled={pending}>
        {pending ? "Odesílám…" : "Odeslat a získat doporučení"}
      </button>

      <p className="automation-form-note">Ozvu se osobně do 1 pracovního dne.</p>
    </form>
  );
}
