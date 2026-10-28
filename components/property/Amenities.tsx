"use client"

import { Check } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { PropertyAmenityGroup } from "@/data/properties"

export function Amenities ({ amenities }: { amenities: PropertyAmenityGroup[] }) {
  const [expanded, setExpanded] = useState(true)
  const visibleGroups = expanded ? amenities : amenities.slice(0, 4)

  return (
    <section id="amenities" aria-labelledby="amenities-title">
      <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
        <CardHeader className="px-5 pt-5 pb-3 sm:px-6 sm:pt-6">
          <h2 id="amenities-title" className="font-heading text-lg font-semibold text-foreground">Amenities</h2>
        </CardHeader>
        <CardContent className="space-y-4 px-5 pb-4 sm:px-6 sm:pb-5">
          {visibleGroups.map((group) => (
            <div key={group.category}>
              <h3 className="mb-2 text-label font-semibold tracking-wide text-muted-foreground uppercase">{group.category}</h3>
              <ul className="flex flex-wrap gap-2" aria-label={group.category}>
                {group.items.map((item) => (
                  <li key={item}>
                    <Badge variant="outline" className="h-7 gap-1.5 rounded-full border-border bg-surface px-2.5 text-xs font-normal text-foreground">
                      <Check aria-hidden="true" className="size-3 text-primary" />
                      {item}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {amenities.length > 4 && (
            <Button
              type="button"
              variant="link"
              size="sm"
              aria-expanded={expanded}
              onClick={() => setExpanded((value) => !value)}
              className="h-auto p-0 font-medium text-primary"
            >
              {expanded ? "Show less" : "Show more"}
            </Button>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
