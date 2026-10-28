"use client"

import { Bath, BedDouble, Grid2X2, MapPin, Ruler, Search, SlidersHorizontal, List } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"

import { Container } from "@/components/layout/container"
import { SavePropertyButton } from "@/components/ui/save-property-button"
import { neighborhoods, propertyCategories } from "@/data/discover-places"
import { propertyLocations } from "@/data/hero"
import { properties, type Property } from "@/data/properties"
import {
  bedroomHomeLinks,
  homeownerBenefits,
  listingBudgetOptions,
  listingPopularSearches,
  listingSortOptions,
  normalizeBudgetFilter,
  type PropertySearchFilters
} from "@/data/property-search"

function priceValue (property: Property) {
  return Number(property.price.replace(/[^\d.]/g, ""))
}

function PropertyCardSkeleton ({ grid }: { grid: boolean }) {
  return (
    <div aria-hidden="true" className={`animate-pulse rounded-card border border-border bg-card p-3 ${grid ? "" : "flex gap-3"}`}>
      <div className={`shrink-0 rounded-control bg-muted ${grid ? "aspect-[1.7] w-full" : "h-24 w-32"}`} />
      <div className="mt-3 flex-1 space-y-2">
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-3 w-1/2 rounded bg-muted" />
        <div className="h-3 w-1/3 rounded bg-muted" />
      </div>
    </div>
  )
}

function PropertyCard ({ property, grid }: { property: Property, grid: boolean }) {
  const overview = property.detail?.overview

  return (
    <article className={`group overflow-hidden rounded-card border border-border bg-card ${grid ? "flex h-full flex-col" : "grid sm:grid-cols-[minmax(190px,0.72fr)_minmax(0,1.55fr)_minmax(145px,0.7fr)]"}`}>
      <div className={`relative overflow-hidden ${grid ? "aspect-[1.55]" : "aspect-[1.55] sm:aspect-auto sm:min-h-40"}`}>
        <Link href={`/properties/${property.id}`} aria-label={`View ${property.title}`} className="absolute inset-0">
          <Image src={property.image} alt={property.imageAlt} fill sizes={grid ? "(min-width: 1280px) 25vw, (min-width: 640px) 40vw, 100vw" : "(min-width: 1024px) 24vw, (min-width: 640px) 30vw, 100vw"} className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        </Link>
        <span className="absolute top-3 left-3 rounded-sm bg-surface px-2 py-1 text-micro font-semibold tracking-wide text-primary">FOR SALE</span>
        <SavePropertyButton title={property.title} />
      </div>

      <div className={`min-w-0 p-4 ${grid ? "flex flex-1 flex-col" : "sm:p-4"}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="mb-1 flex items-center gap-2">
              <span className="rounded-full bg-primary-soft px-2 py-0.5 text-micro font-semibold text-primary">For sale</span>
              <span className="text-micro text-muted-foreground">New</span>
            </div>
            <Link href={`/properties/${property.id}`} className="font-heading text-sm leading-5 font-semibold text-foreground hover:text-primary sm:text-base">
              {property.title}
            </Link>
          </div>
          <p className="shrink-0 text-sm font-semibold whitespace-nowrap text-foreground sm:hidden">{property.price}</p>
        </div>
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin aria-hidden="true" className="size-3.5 shrink-0" />
          <span className="truncate">{property.address}</span>
        </p>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Ruler aria-hidden="true" className="size-3.5" />{overview?.size ?? property.details.split(" · ").at(-1)}</span>
          {overview && <span className="inline-flex items-center gap-1.5"><BedDouble aria-hidden="true" className="size-3.5" />{overview.bedrooms} beds</span>}
          {overview && <span className="inline-flex items-center gap-1.5"><Bath aria-hidden="true" className="size-3.5" />{overview.bathrooms} baths</span>}
        </div>
      </div>

      <div className={`flex flex-col justify-center gap-3 border-border p-4 ${grid ? "mt-auto border-t pt-3" : "border-t sm:border-t-0 sm:border-l"}`}>
        <div className="hidden sm:block">
          <p className="font-heading text-lg font-semibold text-foreground">{property.price}</p>
          <p className="mt-1 text-xs text-muted-foreground">{property.detail?.emiEstimate ?? "For sale"}</p>
        </div>
        <Link href={`/properties/${property.id}`} className="inline-flex min-h-9 items-center justify-center rounded-control bg-primary px-3 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
          Contact
        </Link>
        <Link href={`/properties/${property.id}`} className="text-center text-xs font-medium text-foreground underline-offset-4 hover:text-primary hover:underline">View details</Link>
      </div>
    </article>
  )
}

function ListingSelect ({ label, value, onChange, options, className = "" }: { label: string, value: string, onChange: (value: string) => void, options: { value: string, label: string }[], className?: string }) {
  return (
    <label className={`flex min-w-0 flex-col gap-1 text-[10px] font-semibold tracking-wide text-muted-foreground dark:text-footer-muted ${className}`}>
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="h-9 w-full min-w-0 rounded-control border border-border bg-transparent px-2 text-xs font-medium tracking-normal text-foreground dark:border-footer-divider/50 dark:text-footer-foreground outline-none!">
        {options.map((option) => <option key={option.value} value={option.value} className="bg-card text-foreground">{option.label}</option>)}
      </select>
    </label>
  )
}

export function PropertyListing ({ initialFilters }: { initialFilters: PropertySearchFilters }) {
  const [query, setQuery] = useState(initialFilters.query ?? "")
  const [location, setLocation] = useState(initialFilters.location ?? "all")
  const [type, setType] = useState(initialFilters.type ?? "all")
  const [budget, setBudget] = useState(normalizeBudgetFilter(initialFilters.budget ?? "any"))
  const [bedrooms, setBedrooms] = useState("")
  const [transaction, setTransaction] = useState<"buy" | "rent">(initialFilters.transaction === "rent" ? "rent" : "buy")
  const [sort, setSort] = useState("newest")
  const [view, setView] = useState<"list" | "grid">("list")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 800)
    return () => window.clearTimeout(timer)
  }, [])

  const locationOptions = useMemo(() => [...new Set([...propertyLocations, ...neighborhoods.map((item) => item.name)])].sort(), [])
  const typeOptions = useMemo(() => [...new Set([...properties.map((property) => property.type), ...propertyCategories.map((item) => item.title)])].sort(), [])

  const visibleProperties = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const filtered = properties.filter((property) => {
      const text = `${property.title} ${property.address} ${property.detail?.location ?? ""} ${property.type}`.toLowerCase()
      const listingLocation = `${property.address} ${property.detail?.location ?? ""}`.toLowerCase()
      const count = property.detail?.overview.bedrooms ?? 0
      const price = priceValue(property)
      const matchesBudget = budget === "any" || (budget === "under-1" && price < 1) || (budget === "1-3" && price >= 1 && price < 3) || (budget === "3-5" && price >= 3 && price <= 5) || (budget === "above-5" && price > 5)

      const matchesBedrooms = !bedrooms || (bedrooms === "5+" ? count >= 5 : count === Number(bedrooms))

      return transaction === "buy" && (!normalizedQuery || text.includes(normalizedQuery)) && (location === "all" || listingLocation.includes(location.toLowerCase())) && (type === "all" || property.type === type) && matchesBudget && matchesBedrooms
    })

    if (sort === "price-low") return filtered.sort((left, right) => priceValue(left) - priceValue(right))
    if (sort === "price-high") return filtered.sort((left, right) => priceValue(right) - priceValue(left))
    return filtered
  }, [bedrooms, budget, location, query, sort, transaction, type])

  const areaSnapshots = useMemo(() => {
    const areas = new Map<string, Property[]>()
    for (const property of properties) {
      const area = property.address.split(",")[0].trim()
      areas.set(area, [...(areas.get(area) ?? []), property])
    }
    return [...areas.entries()].slice(0, 6)
  }, [])

  function clearFilters () {
    setQuery("")
    setLocation("all")
    setType("all")
    setBudget("any")
    setBedrooms("")
    setTransaction("buy")
  }

  function applySearch (search: string) {
    setQuery(search)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const featuredProperties = properties.slice(0, 3)
  const hasFilters = query || location !== "all" || type !== "all" || budget !== "any" || bedrooms || transaction !== "buy"

  return (
    <main id="main-content" className="flex-1 bg-background">
      <section aria-label="Property search filters" className="border-b border-border bg-primary/10 text-foreground dark:border-transparent dark:bg-footer-background dark:text-footer-foreground">
        <Container className="py-3">
          <div className="grid gap-2 sm:grid-cols-[auto_minmax(150px,1fr)_repeat(3,minmax(120px,0.6fr))_auto] sm:items-end">
            <div className="flex items-center gap-1 rounded-control bg-muted p-1 text-xs font-semibold dark:bg-surface/10">
              <button type="button" aria-pressed={transaction === "buy"} onClick={() => setTransaction("buy")} className={`rounded-sm px-3 py-2 ${transaction === "buy" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted dark:text-footer-foreground dark:hover:bg-surface/10"}`}>Buy</button>
              <button type="button" aria-pressed={transaction === "rent"} onClick={() => setTransaction("rent")} className={`rounded-sm px-3 py-2 ${transaction === "rent" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted dark:text-footer-foreground dark:hover:bg-surface/10"}`}>Rent</button>
            </div>
            <label className="relative flex h-10 min-w-0 items-center gap-2 rounded-control bg-surface px-3 text-foreground">
              <Search aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
              <span className="sr-only">Search city, area, or keyword</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search city, area, or keyword" className="min-w-0 flex-1 bg-transparent text-xs outline-none! placeholder:text-muted-foreground" />
              {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="text-muted-foreground hover:text-foreground">×</button>}
            </label>
            <ListingSelect label="LOCATION" value={location} onChange={setLocation} options={[{ value: "all", label: "All locations" }, ...locationOptions.map((item) => ({ value: item, label: item }))]} />
            <ListingSelect label="BUDGET" value={budget} onChange={setBudget} options={listingBudgetOptions} />
            <ListingSelect label="PROPERTY TYPE" value={type} onChange={setType} options={[{ value: "all", label: "All types" }, ...typeOptions.map((item) => ({ value: item, label: item }))]} />
            <button type="button" onClick={() => { setQuery(""); setLocation("all"); setType("all"); setBudget("any"); setBedrooms(""); }} className="inline-flex h-10 items-center justify-center gap-2 rounded-control bg-primary px-4 text-xs font-semibold text-primary-foreground hover:bg-primary/90"><SlidersHorizontal aria-hidden="true" className="size-4" /> Reset Filters</button>
          </div>
        </Container>
      </section>

      <Container className="py-5 sm:py-7">
        <nav aria-label="Breadcrumb" className="mb-3 text-xs text-muted-foreground"><Link href="/" className="hover:text-primary">Home</Link><span aria-hidden="true" className="mx-2">›</span><span className="text-foreground">Properties for {transaction === "buy" ? "Sale" : "Rent"}</span></nav>
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-7">
          <div className="min-w-0">
            <section id="property-results" aria-labelledby="results-title">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 id="results-title" className="font-heading text-xl font-semibold text-foreground sm:text-2xl">Properties for {transaction === "buy" ? "Sale" : "Rent"}</h1>
                  <p className="mt-1 text-xs text-muted-foreground">{visibleProperties.length ? `Showing ${visibleProperties.length} available ${visibleProperties.length === 1 ? "listing" : "listings"}` : "No listings match these filters"}</p>
                </div>
                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  {hasFilters && <button type="button" onClick={clearFilters} className="text-xs font-medium text-primary hover:underline">Clear filters</button>}
                  <label className="flex items-center gap-2 text-xs text-muted-foreground">Sort by
                    <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-9 rounded-control border border-border bg-card px-2 text-xs font-medium text-foreground outline-none!">
                      {listingSortOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                    </select>
                  </label>
                  <div className="hidden items-center rounded-control border border-border p-0.5 sm:flex" role="group" aria-label="Results layout">
                    <button type="button" aria-label="List view" aria-pressed={view === "list"} onClick={() => setView("list")} className={`rounded-sm p-1.5 ${view === "list" ? "bg-secondary text-primary" : "text-muted-foreground hover:text-foreground"}`}><List aria-hidden="true" className="size-4" /></button>
                    <button type="button" aria-label="Grid view" aria-pressed={view === "grid"} onClick={() => setView("grid")} className={`rounded-sm p-1.5 ${view === "grid" ? "bg-secondary text-primary" : "text-muted-foreground hover:text-foreground"}`}><Grid2X2 aria-hidden="true" className="size-4" /></button>
                  </div>
                </div>
              </div>

              <div aria-busy={isLoading} className={view === "grid" ? "grid gap-4 sm:grid-cols-2" : "space-y-3"}>
                {isLoading
                  ? Array.from({ length: 3 }, (_, index) => <PropertyCardSkeleton key={index} grid={view === "grid"} />)
                  : visibleProperties.map((property) => <PropertyCard key={property.id} property={property} grid={view === "grid"} />)}
              </div>
              {visibleProperties.length === 0 && <div className="mt-4 rounded-card border border-dashed border-border bg-card px-5 py-10 text-center"><p className="font-medium text-foreground">No properties found</p><p className="mt-1 text-sm text-muted-foreground">Try adjusting your location, budget, or keyword.</p><button type="button" onClick={clearFilters} className="mt-4 text-sm font-semibold text-primary hover:underline">Reset filters</button></div>}
            </section>

            <section className="mt-9" aria-labelledby="area-snapshots-title">
              <h2 id="area-snapshots-title" className="font-heading text-lg font-semibold text-foreground">Property snapshots in popular areas</h2>
              <p className="mt-1 text-xs text-muted-foreground">A quick look at the listings in this collection.</p>
              <div className="mt-4 overflow-x-auto rounded-card border border-border bg-card">
                <table className="w-full min-w-[480px] text-left text-xs">
                  <thead className="border-b border-border text-[10px] font-semibold tracking-wide text-muted-foreground"><tr><th className="px-4 py-3">AREA</th><th className="px-4 py-3">LISTINGS</th><th className="px-4 py-3 text-right">STARTING PRICE</th></tr></thead>
                  <tbody className="divide-y divide-border">
                    {areaSnapshots.map(([area, listings]) => <tr key={area}><td className="px-4 py-3 text-foreground"><MapPin aria-hidden="true" className="mr-1.5 inline size-3.5 text-muted-foreground" />{area}</td><td className="px-4 py-3 text-muted-foreground">{listings.length} {listings.length === 1 ? "listing" : "listings"}</td><td className="px-4 py-3 text-right text-foreground">from {listings.slice().sort((left, right) => priceValue(left) - priceValue(right))[0].price}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mt-9" aria-labelledby="explore-title">
              <h2 id="explore-title" className="font-heading text-lg font-semibold text-foreground">Keep exploring</h2>
              <p className="mt-1 text-xs text-muted-foreground">Find your next home with a little more inspiration.</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { title: "Properties in popular areas", links: locationOptions },
                  { title: "Browse by type", links: typeOptions },
                  { title: "Browse by budget", links: listingBudgetOptions.slice(1).map((option) => option.label) },
                  { title: "Land your next home", links: bedroomHomeLinks }
                ].map((group, index) => <div key={group.title} className="rounded-card border border-border bg-card p-4"><h3 className="text-xs font-semibold text-foreground">{group.title}</h3><ul className="mt-3 space-y-2">{group.links.map((item) => <li key={item}><button type="button" onClick={() => index === 0 ? setLocation(item) : index === 1 ? setType(item) : index === 2 ? setBudget(listingBudgetOptions.find((option) => option.label === item)?.value ?? "any") : setBedrooms(item.split(" ")[0])} className="text-left text-xs text-muted-foreground hover:text-primary">{item}</button></li>)}</ul></div>)}
              </div>
            </section>
          </div>

          <aside className="space-y-4 xl:sticky xl:top-5">
            <section aria-labelledby="featured-homes-title" className="rounded-card border border-border bg-card p-3.5">
              <div className="mb-3 flex items-center justify-between"><h2 id="featured-homes-title" className="text-sm font-semibold text-foreground">Featured homes</h2><Link href="#property-results" className="text-[10px] text-muted-foreground hover:text-primary">View all</Link></div>
              {featuredProperties.slice(0, 1).map((property) => <Link key={property.id} href={`/properties/${property.id}`} className="group block"><div className="relative aspect-[1.7] overflow-hidden rounded-control"><Image src={property.image} alt={property.imageAlt} fill sizes="(min-width: 1280px) 260px, 100vw" className="object-cover transition-transform group-hover:scale-[1.03]" /><span className="absolute bottom-2 left-2 rounded-full bg-surface px-2 py-1 text-[10px] font-semibold text-foreground">{property.price}</span></div><h3 className="mt-2 line-clamp-1 text-xs font-semibold text-foreground group-hover:text-primary">{property.title}</h3><p className="mt-1 line-clamp-1 text-[10px] text-muted-foreground">{property.address}</p></Link>)}
              <div className="mt-3 space-y-3 border-t border-border pt-3">{featuredProperties.slice(1).map((property) => <Link key={property.id} href={`/properties/${property.id}`} className="flex items-center gap-2.5"><div className="relative size-14 shrink-0 overflow-hidden rounded-control"><Image src={property.image} alt={property.imageAlt} fill sizes="56px" className="object-cover" /></div><div className="min-w-0"><p className="truncate text-xs font-semibold text-foreground">{property.price} · {property.type}</p><p className="mt-1 line-clamp-2 text-[10px] leading-4 text-muted-foreground">{property.title}</p></div></Link>)}</div>
            </section>

            <section className="rounded-card bg-footer-background p-4 text-footer-foreground" aria-labelledby="list-property-title">
              <h2 id="list-property-title" className="font-heading text-sm font-semibold">Sell or rent your property with us, free</h2>
              <p className="mt-1 text-xs leading-5 text-footer-muted">Find genuine buyers and renters easily.</p>
              <Link href="/signup" className="mt-3 inline-flex min-h-9 w-full items-center justify-center rounded-control bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary/90">List your property</Link>
              <p className="mt-3 text-[10px] font-semibold tracking-wide text-footer-muted">WHY HOMEOWNERS CHOOSE US</p>
              <ul className="mt-2 space-y-1 text-[10px] text-footer-muted">{homeownerBenefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </section>

            <section className="rounded-card border border-border bg-card p-4" aria-labelledby="popular-searches-title">
              <h2 id="popular-searches-title" className="text-sm font-semibold text-foreground">Popular searches</h2>
              <div className="mt-3 flex flex-wrap gap-2">{listingPopularSearches.map((search) => <button key={search} type="button" onClick={() => applySearch(search.replace(/ for (sale|rent)$/i, ""))} className="rounded-full border border-border px-2.5 py-1.5 text-[10px] text-muted-foreground hover:border-primary hover:text-primary">{search}</button>)}</div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  )
}
