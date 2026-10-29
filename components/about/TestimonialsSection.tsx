import { Quote } from "lucide-react"

import { Container } from "@/components/layout/container"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { TestimonialsSectionContent } from "@/data/about"

export function TestimonialsSection ({ content }: { content: TestimonialsSectionContent }) {
  return (
    <section className="bg-muted py-16 sm:py-20" aria-labelledby="testimonials-title">
      <Container>
        <h2 id="testimonials-title" className="font-heading text-3xl leading-tight font-semibold text-foreground sm:text-title">
          {content.title}
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.items.map((item) => (
            <Card key={item.name} className="gap-6 rounded-card border border-border p-6 ring-0 sm:p-8">
              <Quote aria-hidden="true" className="size-8 text-primary" />
              <figure className="flex flex-1 flex-col gap-6">
                <blockquote className="text-body text-foreground">{item.quote}</blockquote>
                <Separator />
                <figcaption className="flex flex-col gap-1">
                  <span className="text-sm font-semibold text-foreground">{item.name}</span>
                  <span className="text-sm text-muted-foreground">{item.role}</span>
                </figcaption>
              </figure>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  )
}
