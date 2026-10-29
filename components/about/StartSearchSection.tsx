import { Search } from "lucide-react"

import { BuildSearchCard } from "@/components/about/BuildSearchCard"
import { Container } from "@/components/layout/container"
import { SectionEyebrow } from "@/components/shared/SectionEyebrow"
import type { StartSearchContent } from "@/data/about"

export function StartSearchSection ({ content }: { content: StartSearchContent }) {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="start-search-title">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:items-start lg:gap-16">
        <div className="flex flex-col items-start">
          <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
          <h2 id="start-search-title" className="mt-5 font-heading text-3xl leading-tight font-semibold text-foreground sm:text-title">
            {content.title}
          </h2>
          <p className="mt-4 max-w-xl text-intro text-muted-foreground">{content.description}</p>
          <div className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
            <Search aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
            <p>{content.hint}</p>
          </div>
        </div>

        <BuildSearchCard content={content.form} />
      </Container>
    </section>
  )
}
