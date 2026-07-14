import type { WorkflowContent } from "@/content/types";

export function WorkflowDiagram({ workflow }: { workflow: WorkflowContent }) {
  return (
    <section className="band-section band-section-soft" aria-labelledby="workflow-diagram-title">
      <div className="band-shell">
        <div className="content-card workflow-diagram">
          <h2 id="workflow-diagram-title">{workflow.title}</h2>
          <p>{workflow.description}</p>
          <ol className="workflow-steps">
            {workflow.steps.map((step, index) => (
              <li key={step.title}>
                <span className="workflow-step-number" aria-hidden="true">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <p className="workflow-step-owner"><strong>Vlastník kroku:</strong> {step.owner}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="workflow-exception-note"><strong>Jak řešit výjimky:</strong> {workflow.exceptionNote}</p>
        </div>
      </div>
    </section>
  );
}
