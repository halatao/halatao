import type { CmsBlock } from "../../cms/types";
import { spacingClassMap, themeClassMap } from "../../cms/style-maps";

type BlockProps = {
  block: CmsBlock;
};

function getText(value: unknown): string {
  return typeof value === "string" ? value : "";
}

export function CtaBlock({ block }: BlockProps) {
  const theme = block.theme ?? "accent";
  const spacing = block.spacing ?? "md";
  return (
    <section className={`${themeClassMap[theme]} ${spacingClassMap[spacing]}`}>
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-semibold">{getText(block.props.heading)}</h2>
        <p className="mt-4">{getText(block.props.body)}</p>
      </div>
    </section>
  );
}
