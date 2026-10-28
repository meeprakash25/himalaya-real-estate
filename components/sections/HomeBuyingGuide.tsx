import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { homeBuyingGuide } from "@/data/home-buying-guide"

export function HomeBuyingGuide () {
  return (
    <section className="bg-background py-14 sm:py-16" aria-labelledby="home-buying-guide-title">
      <Container>
        <div className="grid items-center gap-8 xl:grid-cols-[minmax(0,544px)_minmax(0,1fr)] xl:gap-18">
          <div className="relative aspect-544/490 overflow-hidden rounded-panel">
            <Image
              src="/images/home-buying-guide.jpg"
              alt={homeBuyingGuide.imageAlt}
              fill
              sizes="(min-width: 1280px) 544px, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <div>
              <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary">
                {homeBuyingGuide.eyebrow}
              </p>
              <h2
                id="home-buying-guide-title"
                className="mt-3 font-heading text-title font-semibold text-foreground">
                {homeBuyingGuide.title}
              </h2>
            </div>

            <ol className="mt-6 flex flex-col gap-5.5" aria-label="Steps to buying a home">
              {homeBuyingGuide.steps.map((step) => (
                <li
                  key={step.number}
                  className="flex items-start gap-4">
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-secondary text-micro font-semibold text-primary">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-[15px] leading-[18px] font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-1.5 text-body-sm text-muted-foreground">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Link
              href="/blog"
              className={buttonVariants({
                variant: "outline",
                size: "lg",
                className:
                  "mt-6 min-h-[50px] gap-3 rounded-control border-border! bg-transparent px-5 text-sm font-semibold text-primary hover:border-primary! hover:bg-surface/80 hover:text-primary"
              })}>
              {homeBuyingGuide.action}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5">
                <path d="M5 15 15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
