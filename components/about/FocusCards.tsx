import { Container } from "@/components/layout/container"
import { SectionEyebrow } from "@/components/shared/SectionEyebrow"
import { Card } from "@/components/ui/card"
import type { FocusCardContent } from "@/data/about"

export function FocusCards ({ cards }: { cards: readonly FocusCardContent[] }) {
  return (
    <section className="bg-muted py-16 sm:py-20" aria-label="Our focus">
      <Container>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card key={card.eyebrow} className="gap-4 rounded-card border border-border p-6 ring-0 sm:p-8">
              <SectionEyebrow>{card.eyebrow}</SectionEyebrow>
              <h2 className="font-heading text-xl leading-snug font-semibold text-foreground">{card.title}</h2>
              <p className="text-body text-muted-foreground">{card.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
