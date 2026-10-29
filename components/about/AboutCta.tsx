import Link from "next/link"

import { Container } from "@/components/layout/container"
import { SectionEyebrow } from "@/components/shared/SectionEyebrow"
import type { AboutCtaContent } from "@/data/about"

export function AboutCta ({ content }: { content: AboutCtaContent }) {
  return (
    <section className="bg-background pb-16 sm:pb-20" aria-labelledby="about-cta-title">
      <Container>
        <div className="grid gap-8 rounded-panel border border-border bg-footer-background p-6 sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12 lg:p-12">
          <div className="flex flex-col items-start">
            <SectionEyebrow inverse>{content.eyebrow}</SectionEyebrow>
            <h2
              id="about-cta-title"
              className="mt-5 max-w-2xl font-heading text-3xl leading-tight font-semibold text-footer-foreground sm:text-promo-title">
              {content.title}
            </h2>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={content.primaryHref}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-surface px-6 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft focus-visible:outline-footer-foreground">
              {content.primaryLabel}
            </Link>
            <Link
              href={content.secondaryHref}
              className="inline-flex min-h-[50px] items-center justify-center rounded-full bg-destructive px-6 text-sm font-semibold text-surface transition-colors hover:bg-destructive/90 focus-visible:outline-footer-foreground">
              {content.secondaryLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
