import Script from "next/script";

import { siteConfig } from "@/lib/site";

export function AnalyticsScripts() {
  return (
    <>
      <Script async data-cbid={siteConfig.cookiebotId} id="Cookiebot" src="https://consent.cookiebot.com/uc.js" type="text/javascript" />
      <Script id="gtm-loader" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${siteConfig.gtmId}');`}
      </Script>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`} strategy="afterInteractive" />
      <Script id="gtag-config" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${siteConfig.gaMeasurementId}');`}
      </Script>
    </>
  );
}

export function AnalyticsNoScript() {
  return (
    <noscript>
      <iframe
        height="0"
        src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
        style={{ display: "none", visibility: "hidden" }}
        width="0"
      />
    </noscript>
  );
}

