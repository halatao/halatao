export type CmsTheme = "light" | "muted" | "dark" | "accent";
export type CmsSpacing = "sm" | "md" | "lg";

export type CmsBlock = {
  id: string;
  type: string;
  variant?: string;
  theme?: CmsTheme;
  spacing?: CmsSpacing;
  props: Record<string, unknown>;
};

export type CmsPage = {
  id: string;
  locale: string;
  slug: string;
  title: string;
  seo: {
    title: string;
    description: string;
    image?: string;
    indexable: boolean;
  };
  blocks?: CmsBlock[];
  sections: CmsBlock[];
};
