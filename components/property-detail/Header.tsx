import Link from "next/link"

import { SharePropertyButton } from "@/components/property-detail/SharePropertyButton"
import { buttonVariants } from "@/components/ui/button"
import { SavePropertyButton } from "@/components/ui/save-property-button"
import type { Property } from "@/data/properties"

export function Header ({ property }: { property: Property }) {
  const listingCode = property.detail?.overview.listingCode

  return (
    <header className="grid gap-4 border-b border-border pb-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
      <div className="min-w-0">
        <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link href="/" className="rounded-control hover:text-foreground">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li>For Sale</li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="line-clamp-1">{property.title}</li>
          </ol>
        </nav>
        <p className="mb-2 text-sm text-muted-foreground">{property.detail?.location ?? property.address}</p>
        <h1 className="font-heading text-2xl font-semibold text-foreground sm:text-3xl">{property.title}</h1>
      </div>

      <div className="flex min-w-0 flex-wrap items-end justify-between gap-3 sm:justify-end">
        <div className="sm:text-right">
          {listingCode && <p className="text-xs text-muted-foreground">{listingCode}</p>}
          <p className="mt-1 font-heading text-2xl font-semibold whitespace-nowrap text-primary">{property.price}</p>
          {property.detail?.emiEstimate && (
            <p className="mt-1 text-xs text-muted-foreground">
              {property.detail.emiEstimate}{" "}
              <Link href="/calculator" className={buttonVariants({ variant: "link", size: "sm", className: "h-auto p-0 text-xs" })}>Calculate</Link>
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 pb-1">
          <SharePropertyButton title={property.title} />
          <SavePropertyButton
            title={property.title}
            className="static size-9 rounded-full border border-border bg-card p-0 text-foreground hover:bg-muted hover:text-primary"
          />
        </div>
      </div>
    </header>
  )
}
