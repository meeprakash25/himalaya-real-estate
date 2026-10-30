import type { Metadata } from "next"
import { Suspense } from "react"

import { PropertyListing } from "@/components/property/PropertyListing"
import { PropertyListingSkeleton } from "@/components/property/PropertyListingSkeleton"
import type { PropertySearchFilters } from "@/data/property-search"

export const metadata: Metadata = {
  title: "Properties for Sale | Himalaya Real Estate",
  description: "Browse homes, land, and apartments for sale across Kathmandu Valley."
}

type PropertiesPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default function PropertiesPage ({ searchParams }: PropertiesPageProps) {
  return (
    <Suspense fallback={<PropertyListingSkeleton />}>
      <PropertiesPageContent searchParams={searchParams} />
    </Suspense>
  )
}

async function PropertiesPageContent ({ searchParams }: PropertiesPageProps) {
  const params = await searchParams
  const getValue = (key: keyof PropertySearchFilters) => {
    const value = params[key]
    return Array.isArray(value) ? value[0] : value
  }
  const initialFilters: PropertySearchFilters = {
    transaction: getValue("transaction"),
    location: getValue("location"),
    type: getValue("type"),
    budget: getValue("budget"),
    bedrooms: getValue("bedrooms"),
    query: getValue("query")
  }

  return <PropertyListing key={JSON.stringify(initialFilters)} initialFilters={initialFilters} />
}
