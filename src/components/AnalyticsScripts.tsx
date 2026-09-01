import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { ConsentManager } from "@/components/ConsentManager";
import { OpenAiAdsPixel } from "@/components/OpenAiAdsPixel";

export function AnalyticsScripts() {
  return (
    <>
      <ConsentManager />
      <AnalyticsEvents />
      <OpenAiAdsPixel />
    </>
  );
}

export function AnalyticsNoScript() {
  return null;
}
