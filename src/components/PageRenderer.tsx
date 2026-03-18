import type { ContentPage } from "@/content/types";
import {
  CaseStudyTemplate,
  ComparisonTemplate,
  GuideTemplate,
  HomeTemplate,
  HubTemplate,
  InquiryTemplate,
  LocationTemplate,
  ProblemTemplate,
  ProcessTemplate,
  ServiceTemplate,
  TechnologyTemplate,
  ToolTemplate,
  UseCaseTemplate,
} from "@/components/templates";

export function PageRenderer({ page }: { page: ContentPage }) {
  switch (page.pageType) {
    case "home":
      return <HomeTemplate page={page} />;
    case "hub":
      return <HubTemplate page={page} />;
    case "service":
      return <ServiceTemplate page={page} />;
    case "problem":
      return <ProblemTemplate page={page} />;
    case "comparison":
      return <ComparisonTemplate page={page} />;
    case "use_case":
      return <UseCaseTemplate page={page} />;
    case "case_study":
      return <CaseStudyTemplate page={page} />;
    case "guide":
      return <GuideTemplate page={page} />;
    case "technology":
      return <TechnologyTemplate page={page} />;
    case "tool":
      return <ToolTemplate page={page} />;
    case "location":
      return <LocationTemplate page={page} />;
    case "process":
      return <ProcessTemplate page={page} />;
    case "inquiry":
      return <InquiryTemplate page={page} />;
    default:
      return <HomeTemplate page={page} />;
  }
}

