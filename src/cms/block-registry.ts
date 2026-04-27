import { CtaBlock } from "../components/cms/CtaBlock";
import { FaqBlock } from "../components/cms/FaqBlock";
import { FeaturesBlock } from "../components/cms/FeaturesBlock";
import { HeroBlock } from "../components/cms/HeroBlock";
import { TextBlock } from "../components/cms/TextBlock";
import { TextImageBlock } from "../components/cms/TextImageBlock";

export const blockRegistry = {
  hero: HeroBlock,
  text: TextBlock,
  textImage: TextImageBlock,
  features: FeaturesBlock,
  faq: FaqBlock,
  cta: CtaBlock,
} as const;
