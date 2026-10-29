import { House, MapPin, ShieldCheck, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import type { ExperienceSectionContent } from "@/data/about"

const icons: Record<ExperienceSectionContent["cards"][number]["icon"], LucideIcon> = {
  shield: ShieldCheck,
  "map-pin": MapPin,
  home: House
}

export function HumanExperienceSection ({ content }: { content: ExperienceSectionContent }) {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="experience-title">
      <Container>
        <div className="max-w-3xl">
          <h2 id="experience-title" className="font-heading text-3xl leading-tight font-semibold text-foreground sm:text-title">
            {content.title}
          </h2>
          <p className="mt-4 text-intro text-muted-foreground">{content.description}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.cards.map((card) => {
            const Icon = icons[card.icon]

            return (
              <Card key={card.title} className="gap-5 rounded-card border border-border p-6 ring-0 sm:p-8">
                <span className="flex size-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="font-heading text-xl leading-snug font-semibold text-foreground">{card.title}</h3>
                <p className="text-body text-muted-foreground">{card.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
