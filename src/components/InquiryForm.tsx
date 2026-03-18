"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

import type { Locale } from "@/content/types";
import { buildThankYouHref } from "@/content/builders";

const copy = {
  cs: {
    heading: "Popsat projekt",
    email: "E-mail",
    company: "Firma",
    role: "Role / tým",
    message: "Co dnes řešíte",
    submit: "Odeslat projektový kontext",
    pending: "Odesílám…",
    note: "Stačí stručně popsat situaci, očekávaný výsledek a případná omezení.",
    error: "Odeslání se nepovedlo. Zkuste to prosím znovu nebo napište přímo na e-mail.",
  },
  en: {
    heading: "Project context",
    email: "Email",
    company: "Company",
    role: "Role / team",
    message: "What are you dealing with today",
    submit: "Send project context",
    pending: "Sending…",
    note: "A concise summary of the situation, desired outcome, and constraints is enough.",
    error: "The message could not be sent. Please try again or reach out directly by email.",
  },
} as const;

export function InquiryForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const labels = copy[locale];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    if ((formData.get("website") as string) !== "") {
      setPending(false);
      router.push(buildThankYouHref(locale));
      return;
    }

    const payload = {
      email: formData.get("email"),
      company: formData.get("company"),
      role: formData.get("role"),
      message: formData.get("message"),
      locale,
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
      setError(labels.error);
      return;
    }

    router.push(buildThankYouHref(locale));
  }

  return (
    <section className="content-card form-card" id="project-inquiry-form">
      <div className="form-copy">
        <h2>{labels.heading}</h2>
        <p>{labels.note}</p>
      </div>
      <form className="inquiry-form" onSubmit={onSubmit}>
        <input aria-hidden="true" autoComplete="off" className="honeypot" name="website" tabIndex={-1} />
        <label>
          <span>{labels.email}</span>
          <input name="email" required type="email" />
        </label>
        <label>
          <span>{labels.company}</span>
          <input name="company" required type="text" />
        </label>
        <label>
          <span>{labels.role}</span>
          <input name="role" type="text" />
        </label>
        <label>
          <span>{labels.message}</span>
          <textarea name="message" required rows={6} />
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="button button-primary" disabled={pending} type="submit">
          {pending ? labels.pending : labels.submit}
        </button>
      </form>
    </section>
  );
}

