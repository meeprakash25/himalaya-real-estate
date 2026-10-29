"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { PlanSectionContent } from "@/data/about"

export function PlanYourMoveSection ({ content }: { content: PlanSectionContent }) {
  return (
    <section className="bg-background py-16 sm:py-20" aria-labelledby="plan-title">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-16">
        <div className="flex flex-col items-start">
          <h2 id="plan-title" className="font-heading text-3xl leading-tight font-semibold text-foreground sm:text-title">
            {content.title}
          </h2>
          <Link
            href={content.link.href}
            className="mt-5 inline-flex items-center gap-2 rounded-control text-sm font-semibold text-primary hover:underline">
            {content.link.label}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        </div>

        <Accordion defaultValue={[content.defaultOpenStep]} className="border-t border-border">
          {content.steps.map((step) => (
            <AccordionItem key={step.number} value={step.number} className="border-border">
              <AccordionTrigger className="items-center py-5 text-base font-semibold text-foreground hover:no-underline">
                <span className="flex items-center gap-4">
                  <span aria-hidden="true" className="text-sm font-bold text-primary">{step.number}</span>
                  <span className="font-heading">{step.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col items-start gap-3 pt-1 pb-5 pl-9">
                  <p className="text-body text-muted-foreground">{step.description}</p>
                  {step.link && (
                    <Link href={step.link.href} className="text-sm font-semibold text-primary hover:underline">
                      {step.link.label}
                    </Link>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
