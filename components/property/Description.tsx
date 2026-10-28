"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { Property } from "@/data/properties"

export function Description ({ property }: { property: Property }) {
  const [expanded, setExpanded] = useState(false)
  const description = property.detail?.description ?? `${property.title} at ${property.address}. ${property.details}.`

  return (
    <section id="description" aria-labelledby="description-title">
      <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
        <CardHeader className="px-5 pt-5 pb-3 sm:px-6 sm:pt-6">
          <h2 id="description-title" className="font-heading text-lg font-semibold text-foreground">More about this property</h2>
        </CardHeader>
        <CardContent className="px-5 pb-4 sm:px-6 sm:pb-5">
          <p id="property-description-copy" className={`text-sm leading-6 text-muted-foreground ${expanded ? "" : "line-clamp-4"}`}>
            {description}
          </p>
          <Button
            type="button"
            variant="link"
            size="sm"
            aria-expanded={expanded}
            aria-controls="property-description-copy"
            onClick={() => setExpanded((value) => !value)}
            className="mt-2 h-auto p-0 font-medium text-foreground"
          >
            {expanded ? "Read less" : "Read more"}
          </Button>
        </CardContent>
      </Card>
    </section>
  )
}
