import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Suspense } from "react"

import { PropertyDetailSkeleton } from "@/components/property/PropertyDetailSkeleton"
import { properties } from "@/data/properties"

interface PropertyPageProps {
  params: Promise<{ id: string }>
}

export function generateStaticParams () {
  return properties.map((property) => ({ id: property.id }))
}

function getProperty (id: string) {
  return properties.find((property) => property.id === id)
}

export async function generateMetadata ({ params }: PropertyPageProps): Promise<Metadata> {
  const { id } = await params
  const property = getProperty(id)

  if (!property) {
    return { title: "Property not found | Himalaya Real Estate" }
  }

  return {
    title: `${property.title} | Himalaya Real Estate`,
    description: property.detail?.seoDescription ?? `${property.type} for ${property.transaction === "rent" ? "rent" : "sale"} at ${property.address}. ${property.details}.`
  }
}

export default function PropertyPage ({ params }: PropertyPageProps) {
  return (
    <Suspense fallback={<main id="main-content" className="min-h-96 flex-1 bg-background" aria-busy="true" />}>
      <PropertyPageContent params={params} />
    </Suspense>
  )
}

async function PropertyPageContent ({ params }: PropertyPageProps) {
  const { id } = await params
  const property = getProperty(id)

  if (!property) notFound()

  const similarProperties = properties.filter((item) => item.id !== property.id).slice(0, 3)

  return <PropertyDetailSkeleton property={property} similarProperties={similarProperties} />
}
