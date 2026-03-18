import type { ReactNode } from "react";

import type { ContentPage, Locale } from "@/content/types";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function SiteFrame({
  children,
  locale,
  page,
}: {
  children: ReactNode;
  locale: Locale;
  page: ContentPage;
}) {
  const isStandaloneLanding =
    locale === "cs" &&
    (page.translationKey === "service-automations-and-integrations" ||
      page.translationKey === "thank-you");

  if (isStandaloneLanding) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader locale={locale} currentPage={page} />
      <main className="page-shell">{children}</main>
      <SiteFooter locale={locale} />
    </>
  );
}
