import { Container } from "@/components/layout/container"
import { SectionEyebrow } from "@/components/shared/SectionEyebrow"
import type { AboutHeroContent } from "@/data/about"

export function AboutHero ({ content }: { content: AboutHeroContent }) {
  return (
    <section className="bg-background pt-16 pb-14 sm:pt-20 sm:pb-16" aria-labelledby="about-title">
      <Container>
        <SectionEyebrow>{content.eyebrow}</SectionEyebrow>
        <h1
          id="about-title"
          className="mt-6 max-w-3xl font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl xl:text-display">
          {content.title}
        </h1>
        <p className="mt-5 max-w-3xl text-intro text-muted-foreground">{content.description}</p>
      </Container>
    </section>
  )
}
