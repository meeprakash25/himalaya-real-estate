import Link from "next/link"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { PropertyQuickLink } from "@/data/properties"

export function QuickLinks ({ links }: { links: PropertyQuickLink[] }) {
  return (
    <section id="quick-links" aria-labelledby="quick-links-title">
      <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
        <CardHeader className="px-5 pt-5 pb-2 sm:px-6 sm:pt-6">
          <h2 id="quick-links-title" className="font-heading text-lg font-semibold text-foreground">Quick links</h2>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-x-5 gap-y-3 px-5 pb-5 text-sm sm:px-6">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="rounded-control text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary">
              {link.label}
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  )
}
