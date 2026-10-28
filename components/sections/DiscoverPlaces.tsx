import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { neighborhoods, propertyCategories } from "@/data/discover-places"
import { propertiesHref } from "@/data/property-search"

type PropertyIconName = (typeof propertyCategories)[number]["icon"];

function ArrowUpRightIcon () {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5 shrink-0 text-primary" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 15 15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PropertyIcon ({ name }: { name: PropertyIconName }) {
  const shared = {
    "aria-hidden": true as const,
    viewBox: "0 0 28 28",
    className: "size-7 text-primary",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  }

  if (name === "house") {
    return <svg {...shared}><path d="m3 12 11-9 11 9v12H5V12" /><path d="M11 24v-7h6v7" /></svg>
  }

  if (name === "land") {
    return <svg {...shared}><path d="m4 7 13-3 7 4-2 15H6L4 7Z" /><path d="m4 7 7 5 13-4M11 12l-1 11" /></svg>
  }

  if (name === "apartment") {
    return <svg {...shared}><path d="M5 24V4h14v20M19 10h5v14M9 8h2m4 0h1M9 13h2m4 0h1M9 18h2m4 0h1m6-3h1m-1 5h1M3 24h23" /></svg>
  }

  return <svg {...shared}><path d="M3 11h22l-2-7H5l-2 7ZM5 11v13h18V11M3 24h22M10 24v-7h8v7" /><path d="M3 11a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 4 0" /></svg>
}

export function DiscoverPlaces () {
  return (
    <section className="bg-secondary py-14 sm:py-16" aria-labelledby="neighborhoods-title">
      <Container>
        <div>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary">FIND YOUR KIND OF NEIGHBOURHOOD</p>
              <h2 id="neighborhoods-title" className="mt-3 font-heading text-title font-semibold text-foreground">
                Good places. Great possibilities.
              </h2>
              <p className="mt-2 text-body text-muted-foreground">
                From lively city streets to peaceful foothills, find where you belong.
              </p>
            </div>
            <Link
              href={propertiesHref()}
              className={buttonVariants({ variant: "outline", size: "lg", className: "min-h-[50px] shrink-0 self-start gap-3 rounded-control border-border! bg-surface/50 px-5 text-sm font-semibold text-primary hover:border-primary! hover:bg-surface/80 hover:text-primary sm:self-auto" })}
            >
              Explore all locations
              <ArrowUpRightIcon />
            </Link>
          </div>

          <div id="neighborhoods" className="mt-7 grid gap-x-6 gap-y-7 sm:grid-cols-2 xl:grid-cols-3">
            {neighborhoods.map((neighborhood) => (
              <article key={neighborhood.id} className="min-w-0">
                <Link href={propertiesHref({ location: neighborhood.name })} className="group block rounded-card focus-visible:outline-offset-4">
                  <div className="relative aspect-20/9 overflow-hidden rounded-control">
                    <Image
                      src={neighborhood.image}
                      alt={neighborhood.imageAlt}
                      fill
                      sizes="(min-width: 1280px) 411px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="font-heading text-neighborhood font-semibold text-foreground">{neighborhood.name}</h3>
                      <p className="mt-1 text-detail text-muted-foreground">{neighborhood.description}</p>
                    </div>
                    <ArrowUpRightIcon />
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <Separator orientation="horizontal" className="mt-14 bg-divider-soft" />

          <section className="mt-14" aria-labelledby="property-types-title">
            <div>
              <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary">A SPACE FOR EVERY PLAN</p>
              <h2 id="property-types-title" className="mt-2.5 font-heading text-title font-semibold text-foreground">
                What are you looking for?
              </h2>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {propertyCategories.map((category) => (
                <Link
                  key={category.id}
                  href={propertiesHref({ type: category.title })}
                  className="group block rounded-card focus-visible:outline-offset-4"
                >
                  <Card className="min-h-35 gap-0 rounded-card border-0 bg-surface p-6 py-6 ring-0 transition-colors group-hover:bg-background">
                    <PropertyIcon name={category.icon} />
                    <div className="mt-4.5 flex items-center justify-between gap-3">
                      <h3 className="font-heading text-neighborhood font-semibold text-foreground">{category.title}</h3>
                      <ArrowUpRightIcon />
                    </div>
                    <p className="mt-1.5 text-detail text-muted-foreground">{category.description}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </section>
  )
}
