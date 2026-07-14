"use client";

import { useRouter } from "next/navigation";
import { FocusEvent, FormEvent, useRef, useState } from "react";

import type { Locale } from "@/content/types";
import { buildThankYouHref } from "@/content/builders";
import { trackAnalyticsEvent } from "@/lib/analytics";

const copy = {
  cs: {
    heading: "Popis situace",
    description: "Stačí pár vět. Nemusíte mít hotové zadání ani technický rozsah.",
    name: "Jméno",
    email: "E-mail",
    company: "Firma / web",
    message: "Co potřebujete vyřešit?",
    placeholder: "Například: máme web, který se špatně spravuje; potřebujeme interní evidenci; chceme propojit systémy; potřebujeme převzít existující aplikaci…",
    submit: "Odeslat popis situace",
    pending: "Odesílám…",
    success: "Děkuji, zprávu mám. Ozvu se s návrhem dalšího rozumného kroku.",
    error: "Odeslání se nepovedlo. Zkuste to prosím znovu nebo napište přímo na e-mail.",
  },
  en: {
    heading: "Situation description",
    description: "A few sentences are enough. You do not need a complete specification or technical scope.",
    name: "Name",
    email: "E-mail",
    company: "Company / website",
    message: "What do you need to solve?",
    placeholder: "For example: we have a website that is hard to manage; we need an internal system; we want to connect tools; we need to take over an existing application…",
    submit: "Send situation description",
    pending: "Sending…",
    success: "Thank you, I have received your message. I will get back to you with a reasonable next step.",
    error: "The message could not be sent. Please try again or reach out directly by email.",
  },
} as const;

export function InquiryForm({ locale }: { locale: Locale }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formStarted = useRef(false);
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
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
      locale,
    };

    try {
      const response = await fetch("https://formspree.io/f/maqdndyk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        trackAnalyticsEvent("form_submit_error", { error_type: "http", form_id: "project_inquiry" });
        setError(labels.error);
        return;
      }

      trackAnalyticsEvent("generate_lead", { form_id: "project_inquiry", lead_type: "project_inquiry" });
      router.push(buildThankYouHref(locale));
    } catch {
      trackAnalyticsEvent("form_submit_error", { error_type: "network", form_id: "project_inquiry" });
      setError(labels.error);
    } finally {
      setPending(false);
    }
  }

  function onFocusCapture(event: FocusEvent<HTMLFormElement>) {
    if (formStarted.current || (event.target instanceof HTMLInputElement && event.target.name === "website")) return;
    formStarted.current = true;
    trackAnalyticsEvent("form_start", { form_id: "project_inquiry" });
  }

  return (
    <section className="content-card form-card" id="project-inquiry-form">
      <div className="form-copy">
        <h2>{labels.heading}</h2>
        <p>{labels.description}</p>
      </div>
      <form className="inquiry-form" onFocusCapture={onFocusCapture} onSubmit={onSubmit}>
        <input aria-hidden="true" autoComplete="off" className="honeypot" name="website" tabIndex={-1} />
        <label>
          <span>{labels.name}</span>
          <input name="name" required type="text" />
        </label>
        <label>
          <span>{labels.email}</span>
          <input name="email" required type="email" />
        </label>
        <label>
          <span>{labels.company}</span>
          <input name="company" type="text" />
        </label>
        <label className="form-field-wide">
          <span>{labels.message}</span>
          <textarea name="message" placeholder={labels.placeholder} required rows={6} />
        </label>
        {error ? <p className="form-error">{error}</p> : null}
        <button className="button button-primary" disabled={pending} type="submit">
          {pending ? labels.pending : labels.submit}
        </button>
      </form>
    </section>
  );
}

