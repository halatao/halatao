import type { CmsBlock } from "../../cms/types";
import { spacingClassMap, themeClassMap } from "../../cms/style-maps";

type BlockProps = {
  block: CmsBlock;
};

function getText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function HeroBlock({ block }: BlockProps) {
  const theme = block.theme ?? "light";
  const spacing = block.spacing ?? "lg";
  return (
    <section className={`${themeClassMap[theme]} ${spacingClassMap[spacing]}`}>
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-sm font-medium uppercase tracking-wide">{getText(block.props.eyebrow)}</p>
        <h1 className="mt-3 text-4xl font-semibold">{getText(block.props.heading)}</h1>
        <p className="mt-5 max-w-2xl text-lg">{getText(block.props.body)}</p>
      </div>
    </section>
  );
}
