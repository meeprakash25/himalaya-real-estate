import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { SavePropertyButton } from "@/components/ui/save-property-button";
import { featuredProperties } from "@/data/featured-properties";

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M13 6.67c0 3.67-5 7.33-5 7.33S3 10.34 3 6.67a5 5 0 1 1 10 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="6.67" r="1.67" />
    </svg>
  );
}

export function FeaturedProperties() {
  return (
    <section id="buy" className="bg-background py-14 sm:py-16" aria-labelledby="featured-properties-title" data-node-id="2:9503">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-node-id="2:9504">
          <div>
            <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary">HANDPICKED FOR YOU</p>
            <h2 id="featured-properties-title" className="mt-3 font-heading text-title font-semibold text-foreground" data-node-id="2:9507">
              A place for your next chapter.
            </h2>
            <p className="mt-2 text-body text-muted" data-node-id="2:9508">
              Explore standout homes and spaces across the valley.
            </p>
          </div>
          <Link
            href="#property-search"
            className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 self-start rounded-control border border-border px-5 text-sm font-semibold text-primary transition-colors hover:border-primary sm:self-auto"
            data-node-id="2:9509"
          >
            View all properties
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 15 15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:mt-7 xl:grid-cols-4 xl:gap-6" data-node-id="2:9512">
          {featuredProperties.map((property) => (
            <article key={property.id} className="group overflow-hidden rounded-card border border-border bg-surface" data-node-id={property.nodeId}>
              <div className="relative aspect-[151/104] overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 302px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute top-3.5 left-3.5 rounded-md bg-surface px-2 py-1.5 text-micro font-semibold leading-3 tracking-wide text-primary">
                  FOR SALE
                </span>
                <SavePropertyButton title={property.title} />
              </div>

              <div className="p-4 sm:p-4.5">
                <div className="flex min-h-7 items-center justify-between gap-2">
                  <p className="font-heading text-price leading-[27px] text-primary">{property.price}</p>
                  <span className="text-micro leading-3 text-muted">{property.type}</span>
                </div>
                <h3 className="mt-3 min-h-[70px] text-card-title font-semibold text-foreground">
                  {property.title}
                </h3>
                <div className="mt-3 flex min-h-9 items-start gap-1.5 text-micro leading-[18px] text-muted">
                  <MapPinIcon />
                  <p>{property.address}</p>
                </div>
                <div className="mt-3 border-t border-border pt-3 text-micro leading-[15px] text-muted">
                  {property.details}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
