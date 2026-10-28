import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { planningTools } from "@/data/planning-tools"

type PlanningIconName = (typeof planningTools)[number]["icon"];

function ToolIcon ({ name }: { name: PlanningIconName }) {
  const shared = {
    "aria-hidden": true as const,
    viewBox: "0 0 22 22",
    className: "size-[22px] text-primary",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  }

  if (name === "calculator") {
    return <svg {...shared}><rect x="4" y="2.5" width="14" height="17" rx="2" /><path d="M7.5 6.5h7M7.5 10.5h1m2.5 0h1m2.5 0h.1m-7.1 3.5h1m2.5 0h1m2.5 0h.1m-7.1 3h1m2.5 0h1m2.5 0h.1" /></svg>
  }

  if (name === "hard-hat") {
    return <svg {...shared}><path d="M3 14.5a8 8 0 0 1 16 0v1H3v-1ZM2 18h18M8 6.8V5a3 3 0 0 1 6 0v1.8M11 7v7" /></svg>
  }

  if (name === "ruler") {
    return <svg {...shared}><path d="M3 15.5 15.5 3l3.5 3.5L6.5 19 3 15.5Z" /><path d="m12.5 6 3.5 3.5m-6-1 1.5 1.5m-4 1 3.5 3.5m-6-1 1.5 1.5" /></svg>
  }

  return <svg {...shared}><path d="M5 2.5h8l4 4v13H5v-17Z" /><path d="M13 2.5v4h4M8 12l2 2 4-4" /></svg>
}

function ArrowRightIcon () {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 8h10m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PropertyPlanningTools () {
  return (
    <section className="bg-accent py-14 sm:py-16" aria-labelledby="planning-tools-title" data-node-id="2:9711">
      <Container>
        <header data-node-id="2:9712">
          <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary" data-node-id="2:9714">
            PLAN WITH A CLEARER PICTURE
          </p>
          <h2 id="planning-tools-title" className="mt-2.5 font-heading text-title font-semibold text-foreground" data-node-id="2:9715">
            Big decisions. Useful little tools.
          </h2>
          <p className="mt-2.5 text-body text-muted-foreground" data-node-id="2:9716">
            Work out the numbers before you take the next step.
          </p>
        </header>

        <div className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4" data-node-id="2:9717">
          {planningTools.map((tool) => (
            <Card key={tool.id} className="min-h-[239px] gap-0 rounded-card bg-surface p-6 py-6 ring-0" data-node-id={tool.nodeId}>
              <div className={`flex size-[42px] items-center justify-center rounded-brand ${tool.tone === "sand" ? "bg-accent" : "bg-secondary"}`}>
                <ToolIcon name={tool.icon} />
              </div>

              <div className="mt-4.5">
                <h3 className="min-h-11 font-heading text-tool-title font-semibold text-foreground">{tool.title}</h3>
                <p className="mt-2 min-h-[46px] text-body-sm text-muted-foreground">{tool.description}</p>
              </div>

              <div className={`mt-auto flex items-center gap-1.5 pt-4.5 text-tool-action font-semibold ${tool.tone === "sand" ? "text-muted-foreground" : "text-primary"}`}>
                <span>{tool.action}</span>
                {tool.tone !== "sand" && <ArrowRightIcon />}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
