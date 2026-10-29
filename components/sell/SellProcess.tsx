import { Camera, Tag, TrendingUp, Users, type LucideIcon } from "lucide-react"

import { Container } from "@/components/layout/container"
import { SectionEyebrow } from "@/components/shared/SectionEyebrow"
import { Card } from "@/components/ui/card"
import { sellBenefits, sellProcess } from "@/data/sell"

const benefitIcons: Record<(typeof sellBenefits.items)[number]["icon"], LucideIcon> = {
  tag: Tag,
  users: Users,
  trending: TrendingUp,
  camera: Camera
}

export function SellProcess () {
  return (
    <>
      <section id="how-it-works" className="bg-background py-16 sm:py-20" aria-labelledby="sell-process-title">
        <Container className="flex flex-col gap-12">
          <header className="flex flex-col items-start">
            <SectionEyebrow>{sellProcess.eyebrow}</SectionEyebrow>
            <h2 id="sell-process-title" className="mt-5 font-heading text-3xl leading-tight font-semibold text-foreground sm:text-title">
              {sellProcess.title}
            </h2>
            <p className="mt-4 max-w-2xl text-intro text-muted-foreground">{sellProcess.description}</p>
          </header>

          <div className="grid gap-6 md:grid-cols-3">
            {sellProcess.steps.map((step, index) => (
              <Card key={step.title} className="gap-4 rounded-card border border-border p-6 ring-0 sm:p-8">
                <span className="flex size-10 items-center justify-center rounded-full bg-muted font-heading text-base font-semibold text-primary">
                  {index + 1}
                </span>
                <h3 className="font-heading text-xl leading-snug font-semibold text-foreground">{step.title}</h3>
                <p className="text-body text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-muted py-16 sm:py-20" aria-labelledby="sell-benefits-title">
        <Container className="flex flex-col gap-12">
          <header className="flex flex-col items-start">
            <SectionEyebrow>{sellBenefits.eyebrow}</SectionEyebrow>
            <h2 id="sell-benefits-title" className="mt-5 font-heading text-3xl leading-tight font-semibold text-foreground sm:text-title">
              {sellBenefits.title}
            </h2>
            <p className="mt-4 max-w-2xl text-intro text-muted-foreground">{sellBenefits.description}</p>
          </header>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sellBenefits.items.map((item) => {
              const Icon = benefitIcons[item.icon]
              return (
                <Card key={item.title} className="gap-4 rounded-card border border-border bg-surface p-6 ring-0">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="font-heading text-lg leading-snug font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm leading-6 text-muted-foreground">{item.description}</p>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>
    </>
  )
}
