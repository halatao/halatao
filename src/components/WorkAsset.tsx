import type { WorkAsset as WorkAssetContent } from "@/content/types";

export function WorkAsset({ asset, toolId }: { asset: WorkAssetContent; toolId: string }) {
  return (
    <section className="band-section band-section-soft" aria-labelledby="work-asset-title">
      <div className="band-shell">
        <div className="content-card work-asset">
          <h2 id="work-asset-title">{asset.title}</h2>
          <p>{asset.description}</p>
          <div className="work-asset-groups">
            {asset.groups.map((group, groupIndex) => (
              <fieldset key={group.title}>
                <legend>{group.title}</legend>
                {group.items.map((item, itemIndex) => {
                  const id = `work-asset-${groupIndex}-${itemIndex}`;
                  return (
                    <label htmlFor={id} key={item}>
                      <input
                        data-analytics-event="template_use"
                        data-tool-group={group.title}
                        data-tool-id={toolId}
                        id={id}
                        type="checkbox"
                      />
                      <span>{item}</span>
                    </label>
                  );
                })}
              </fieldset>
            ))}
          </div>
          <aside className="work-asset-example" aria-label={asset.example.title}>
            <h3>{asset.example.title}</h3>
            <p>{asset.example.body}</p>
          </aside>
          <p className="work-asset-note">{asset.completionNote}</p>
        </div>
      </div>
    </section>
  );
}
