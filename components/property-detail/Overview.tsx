import { Bath, BedDouble, Compass, Hash, House, MapPin, Ruler, Route } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Property } from "@/data/properties"

export function Overview ({ property }: { property: Property }) {
  const overview = property.detail?.overview
  const facts = overview
    ? [
        { label: "Size", value: overview.size, icon: Ruler },
        { label: "Bedrooms", value: String(overview.bedrooms), icon: BedDouble },
        { label: "Bathrooms", value: String(overview.bathrooms), icon: Bath },
        { label: "Road access", value: overview.roadAccess, icon: Route },
        { label: "Facing", value: overview.facing, icon: Compass },
        { label: "Property type", value: overview.propertyType, icon: House },
        { label: "Listing code", value: overview.listingCode, icon: Hash }
      ]
    : [
        { label: "Property type", value: property.type, icon: House },
        { label: "Location", value: property.address, icon: MapPin },
        { label: "Details", value: property.details, icon: Hash }
      ]

  return (
    <section id="overview" aria-labelledby="overview-title">
      <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
        <CardHeader className="px-5 pt-5 pb-3 sm:px-6 sm:pt-6">
          <h2 id="overview-title" className="font-heading text-lg font-semibold text-foreground">Overview</h2>
        </CardHeader>
        <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
          <dl className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
            {facts.map(({ label, value, icon: Icon }) => (
              <div key={label} className="min-w-0">
                <dt className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon aria-hidden="true" className="size-4 shrink-0 text-primary" />
                  <span>{label}</span>
                </dt>
                <dd className="mt-1 pl-6 text-sm font-medium text-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </section>
  )
}
