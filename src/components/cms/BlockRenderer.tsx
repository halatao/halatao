import type { CmsBlock } from "../../cms/types";
import { blockRegistry } from "../../cms/block-registry";

export function BlockRenderer({ blocks }: { blocks: CmsBlock[] }) {
  return (
    <>
      {blocks.map((block) => {
        const Component = blockRegistry[block.type as keyof typeof blockRegistry];
        if (!Component) return null;
        return <Component key={block.id} block={block} />;
      })}
    </>
  );
}
