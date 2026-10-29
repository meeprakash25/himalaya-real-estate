import { Check } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { SectionEyebrow } from "@/components/shared/SectionEyebrow"
import type { SellHeroContent } from "@/data/sell"

export function SellHero ({ content }: { content: SellHeroContent }) {
  return (
    <section className="bg-footer-background py-16 sm:py-20" aria-labelledby="sell-title">
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,400px)] lg:items-center lg:gap-16">
        <div className="flex flex-col items-start">
          <SectionEyebrow inverse>{content.eyebrow}</SectionEyebrow>
          <h1
            id="sell-title"
            className="mt-5 max-w-2xl font-heading text-4xl leading-tight font-semibold text-footer-foreground sm:text-5xl xl:text-display">
            {content.title}
          </h1>
          <p className="mt-5 max-w-2xl text-intro text-footer-muted">{content.description}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#list-property"
              className="inline-flex min-h-[50px] items-center justify-center gap-3 rounded-control bg-destructive px-6 text-sm font-semibold text-surface transition-colors hover:bg-destructive/90 focus-visible:outline-footer-foreground">
              {content.primaryLabel}
              <span className="rounded-full bg-surface px-2 py-0.5 text-micro font-bold tracking-[0.08em] text-destructive">
                {content.primaryBadge}
              </span>
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex min-h-[50px] items-center justify-center rounded-control border border-footer-muted/40 px-6 text-sm font-semibold text-footer-foreground transition-colors hover:border-footer-foreground focus-visible:outline-footer-foreground">
              {content.secondaryLabel}
            </Link>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {content.highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-footer-muted">
                <Check aria-hidden="true" className="size-4 text-footer-foreground" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-panel border border-footer-muted/25 bg-white/5 p-6 sm:p-8">
          <p className="text-micro leading-3 font-semibold tracking-[0.08em] text-footer-muted">
            {content.listableTitle}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {content.listableItems.map((item) => (
              <li
                key={item}
                className="rounded-full border border-footer-muted/40 px-3.5 py-1.5 text-sm text-footer-foreground">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-6 text-footer-muted">{content.listableDescription}</p>
        </div>
      </Container>
    </section>
  )
}
