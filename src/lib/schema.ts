// Schema/SEO utility: JSON-LD generators for site and content pages.

import type { ContentPage } from "@/content/types";
import { absoluteUrl, buildPagePath, getBreadcrumbItems } from "@/lib/routing";
import { siteConfig } from "@/lib/site";

const countrySchema = {
  "@type": "Country",
  name: siteConfig.serviceAreaCountry,
};

function serviceAreaSchemas() {
  const regionSchemas = siteConfig.serviceAreaRegions.map((region) => ({
    "@type": "AdministrativeArea",
    name: region,
    containedInPlace: countrySchema,
  }));

  const citySchemas = siteConfig.serviceAreaCities.map((city) => ({
    "@type": "City",
    name: city,
    containedInPlace: countrySchema,
  }));

  return [countrySchema, ...regionSchemas, ...citySchemas];
}

function providerSchema() {
  return {
    name: siteConfig.name,
    founder: {
      "@type": "Person",
      name: siteConfig.legalName,
    },
    email: siteConfig.email,
    telephone: siteConfig.phone,
    url: siteConfig.siteUrl,
    sameAs: siteConfig.sameAs,
    availableLanguage: siteConfig.availableLanguages,
    areaServed: serviceAreaSchemas(),
  };
}

function breadcrumbSchema(page: ContentPage) {
  const breadcrumbItems = getBreadcrumbItems(page);
  const itemListElement = breadcrumbItems.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    item: absoluteUrl(item.href),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

function faqSchema(page: ContentPage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

function serviceSchema(page: ContentPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.h1,
    name: page.h1,
    description: page.description,
    provider: providerSchema(),
    availableLanguage: siteConfig.availableLanguages,
    areaServed: serviceAreaSchemas(),
    url: absoluteUrl(buildPagePath(page)),
  };
}

export function getGlobalSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      inLanguage: ["cs-CZ", "en-US"],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      ...providerSchema(),
    },
  ];
}

export function getPageSchemas(page: ContentPage) {
  const schemas: object[] = [breadcrumbSchema(page)];

  if (page.pageType === "home") {
    schemas.push(...getGlobalSchemas());
  }

  if (page.schema.includeService || page.pageType === "service") {
    schemas.push(serviceSchema(page));
  }

  if (page.faq.length > 0 && page.schema.includeFaq) {
    schemas.push(faqSchema(page));
  }

  if (page.pageType === "home") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.legalName,
      url: siteConfig.siteUrl,
      email: `mailto:${siteConfig.email}`,
      telephone: siteConfig.phone,
      knowsLanguage: siteConfig.availableLanguages,
      sameAs: siteConfig.sameAs,
    });
  }

  return schemas;
}

