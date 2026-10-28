import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { SavePropertyButton } from "@/components/ui/save-property-button"
import { Separator } from "@/components/ui/separator"
import { properties } from "@/data/properties"
import { propertiesHref } from "@/data/property-search"

function MapPinIcon () {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 shrink-0 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M13 6.67c0 3.67-5 7.33-5 7.33S3 10.34 3 6.67a5 5 0 1 1 10 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="6.67" r="1.67" />
    </svg>
  )
}

export function FeaturedProperties () {
  return (
    <section
      id="buy"
      className="bg-background pt-14 pb-7 sm:pt-16 sm:pb-8"
      aria-labelledby="featured-properties-title">
      <Container>
        <Carousel aria-label="Featured properties" opts={{ align: "start" }}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary">HANDPICKED FOR YOU</p>
              <h2
                id="featured-properties-title"
                className="mt-3 font-heading text-title font-semibold text-foreground">
                A place for your next chapter.
              </h2>
              <p className="mt-2 text-body text-muted-foreground">
                Explore standout homes and spaces across the valley.
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto">
              <Link
                href={propertiesHref()}
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className:
                    "min-h-[50px] gap-3 rounded-control border-border! bg-transparent px-5 text-sm font-semibold text-primary hover:border-primary! hover:bg-surface/80 hover:text-primary",
                })}>
                View all properties
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
              <CarouselPrevious
                aria-label="Previous featured properties"
                className="static my-0 size-10 translate-0 rounded-control border-border bg-surface text-primary hover:bg-secondary"
              />
              <CarouselNext
                aria-label="Next featured properties"
                className="static my-0 size-10 translate-0 rounded-control border-border bg-surface text-primary hover:bg-secondary"
              />
            </div>
          </div>

          <CarouselContent className="mt-8 -ml-5 xl:mt-7 xl:-ml-6">
            {properties.map((property, index) => (
              <CarouselItem
                key={property.id}
                aria-label={`${index + 1} of ${properties.length}`}
                className="pl-5 sm:basis-1/2 xl:basis-1/4 xl:pl-6">
                <article className="group">
                  <Card className="gap-0 overflow-hidden rounded-card border border-border bg-surface p-0 py-0 ring-0">
                    <div className="relative aspect-151/104 overflow-hidden">
                      <Link href={`/properties/${property.id}`} aria-label={`View ${property.title} photos`} className="absolute inset-0">
                        <Image
                          src={property.image}
                          alt={property.imageAlt}
                          fill
                          sizes="(min-width: 1280px) 402px, (min-width: 640px) 45vw, 100vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      </Link>
                      <Badge
                        variant="outline"
                        className="absolute top-3.5 left-3.5 h-auto rounded-md border-0 bg-surface px-2 py-1.5 text-micro leading-3 font-normal tracking-wide text-primary">
                        FOR SALE
                      </Badge>
                      <SavePropertyButton title={property.title} />
                    </div>

                    <Link href={`/properties/${property.id}`} className="block rounded-b-card p-4 focus-visible:outline-offset-[-3px] sm:p-4.5">
                      <div className="flex min-h-7 items-center justify-between gap-2">
                        <p className="font-heading text-price leading-[27px] text-primary">{property.price}</p>
                        <span className="text-micro leading-3 text-muted-foreground">{property.type}</span>
                      </div>
                      <h3 className="mt-3 min-h-[70px] text-card-title font-semibold text-foreground">
                        {property.title}
                      </h3>
                      <div className="flex items-start gap-1.5 text-micro leading-[18px] text-muted-foreground">
                        <MapPinIcon />
                        <p>{property.address}</p>
                      </div>
                      <div className="mt-3 pt-3 text-micro leading-[15px] text-muted-foreground">
                        <Separator className="mb-3" />
                        {property.details}
                      </div>
                    </Link>
                  </Card>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  )
}
