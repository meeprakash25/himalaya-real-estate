import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { SavePropertyButton } from "@/components/ui/save-property-button"
import type { Property } from "@/data/properties"

export function SimilarProperties ({ properties }: { properties: Property[] }) {
  return (
    <section id="similar-properties" aria-labelledby="similar-properties-title">
      <div className="mb-4">
        <h2 id="similar-properties-title" className="font-heading text-lg font-semibold text-foreground">Similar Properties</h2>
        <p className="mt-1 text-sm text-muted-foreground">More options like this one.</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <article key={property.id} className="group min-w-0">
            <Card className="gap-0 overflow-hidden rounded-card border-border bg-card p-0 ring-0">
              <div className="relative aspect-[1.55] overflow-hidden">
                <Link href={`/properties/${property.id}`} aria-label={`View ${property.title}`} className="absolute inset-0">
                  <Image
                    src={property.image}
                    alt={property.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </Link>
                <Badge className="absolute top-3 left-3 border-0 bg-primary text-primary-foreground">For Sale</Badge>
                <SavePropertyButton
                  title={property.title}
                  className="top-3 right-3 size-8 border border-border bg-card hover:bg-muted"
                />
              </div>

              <Link href={`/properties/${property.id}`} className="block min-w-0 p-4 focus-visible:outline-offset-[-3px]">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-heading text-lg font-semibold text-primary">{property.price}</p>
                  <span className="shrink-0 text-xs text-muted-foreground">{property.type}</span>
                </div>
                <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-semibold text-foreground">{property.title}</h3>
                <p className="mt-2 flex items-start gap-1.5 text-xs leading-5 text-muted-foreground">
                  <MapPin aria-hidden="true" className="mt-0.5 size-3.5 shrink-0" />
                  <span>{property.address}</span>
                </p>
                <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">{property.details}</p>
              </Link>
            </Card>
          </article>
        ))}
      </div>
    </section>
  )
}
