"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Container } from "@/components/layout/container"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  budgetRanges,
  popularSearches,
  propertyLocations,
  propertyTypes
} from "@/data/hero"
import { normalizeBudgetFilter, propertiesHref } from "@/data/property-search"

function CheckIcon () {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="size-[17px] shrink-0 fill-none stroke-primary" strokeWidth="1.5">
      <circle cx="9" cy="9" r="7.5" />
      <path d="m5.5 9 2.25 2.25L12.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PinIcon ({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 6.67c0 3.67-5 7.33-5 7.33S3 10.34 3 6.67a5 5 0 1 1 10 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="6.67" r="1.67" />
    </svg>
  )
}

function SearchField ({
  id,
  label,
  placeholder,
  options,
  icon,
  value,
  onChange
}: {
  id: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  icon: "location" | "home" | "budget";
  value: string | null;
  onChange: (value: string | null) => void;
}) {
  return (
    <div className="flex min-h-[58px] min-w-0 items-center gap-3 rounded-control border border-border px-3.5">
      <span aria-hidden="true" className="shrink-0 text-primary">
        {icon === "location"
          ? (
          <PinIcon className="size-5" />
            )
          : icon === "home"
            ? (
          <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m2.5 9 7.5-6 7.5 6v8.5h-5v-5h-5v5h-5V9Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
              )
            : (
          <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
            <path d="M2.5 8h15M6 12h3" strokeLinecap="round" />
          </svg>
              )}
      </span>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Label htmlFor={id} className="text-[10px] leading-3 font-semibold tracking-wide text-muted-foreground">{label}</Label>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger id={id} className="h-auto w-full min-w-0 justify-between gap-1 rounded-none border-0 bg-transparent p-0 text-[13px] leading-4 text-foreground shadow-none focus-visible:border-transparent focus-visible:ring-0">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent align="start" className="bg-surface text-foreground">
            {options.map((option) => (
              <SelectItem key={option} value={option}>{option}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export function Hero () {
  const [transaction, setTransaction] = useState<"buy" | "rent">("buy")
  const [location, setLocation] = useState<string | null>(null)
  const [homeType, setHomeType] = useState<string | null>(null)
  const [budget, setBudget] = useState<string | null>(null)

  useEffect(() => {
    const handleTransactionChange = (event: Event) => {
      setTransaction((event as CustomEvent<"buy" | "rent">).detail)
    }

    window.addEventListener("hero-transaction-change", handleTransactionChange)
    return () => window.removeEventListener("hero-transaction-change", handleTransactionChange)
  }, [])

  return (
    <section className="bg-accent py-8 md:py-10" aria-labelledby="hero-title">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,580px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,620px)] xl:gap-5">
          <div className="flex flex-col items-start">
            <p className="flex items-center gap-2 text-label leading-[13px] font-bold tracking-[0.08em] text-primary">
              <span aria-hidden="true" className="h-0.5 w-5 bg-primary" />
              YOUR PLACE. YOUR POSSIBILITIES.
            </p>
            <h1
              id="hero-title"
              className="mt-6 max-w-xl font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl xl:mt-7 xl:text-display">
              Find your next
              <br className="hidden sm:block" /> home in Nepal.
            </h1>
            <p className="mt-5 max-w-xl text-intro text-muted-foreground">
              Verified home, land, and commercial spaces to buy or rent, all in one place.
            </p>
            <ul
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-primary"
              aria-label="Listing benefits">
              <li className="inline-flex items-center gap-2">
                <CheckIcon />
                Verified listings
              </li>
              <li className="inline-flex items-center gap-2">
                <CheckIcon />
                Local expertise
              </li>
            </ul>
          </div>

          <figure className="relative aspect-31/21 overflow-hidden rounded-panel lg:aspect-auto lg:h-105">
            <Image
              src="/images/hero-home.jpg"
              alt="A modern home surrounded by greenery in Nepal"
              fill
              priority
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-control bg-surface px-3 py-2 text-[10px] leading-3 font-medium text-foreground">
              <PinIcon className="size-3.5 shrink-0" />A little closer to home.
            </figcaption>
          </figure>
        </div>

        <div id="property-search" className="mt-7 rounded-card bg-surface p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <fieldset className="flex items-center">
              <legend className="sr-only">Search for a property to buy or rent</legend>
              <RadioGroup
                value={transaction}
                onValueChange={(value) => {
                  if (value === "buy" || value === "rent") setTransaction(value)
                }}
                aria-label="Transaction type"
                className="flex w-auto items-center gap-6">
                <div className="relative">
                  <RadioGroupItem id="transaction-buy" value="buy" className="peer sr-only" />
                  <Label
                    htmlFor="transaction-buy"
                    className={`relative inline-flex cursor-pointer gap-0 rounded-sm pb-2 text-sm leading-normal ${transaction === "buy" ? "font-bold text-primary" : "font-medium text-muted-foreground"}`}>
                    Buy
                  </Label>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-transparent peer-focus-visible:bg-primary peer-data-checked:bg-primary"
                  />
                </div>
                <div className="relative">
                  <RadioGroupItem id="transaction-rent" value="rent" className="peer sr-only" />
                  <Label
                    htmlFor="transaction-rent"
                    className={`relative inline-flex cursor-pointer gap-0 rounded-sm pb-2 text-sm leading-normal ${transaction === "rent" ? "font-bold text-primary" : "font-medium text-muted-foreground"}`}>
                    Rent
                  </Label>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-transparent peer-focus-visible:bg-primary peer-data-checked:bg-primary"
                  />
                </div>
              </RadioGroup>
            </fieldset>
            <p className="text-xs text-muted-foreground">A new beginning starts with a search.</p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_196px]">
            <SearchField
              id="location"
              label="LOCATION"
              placeholder="City or neighbourhood"
              options={propertyLocations}
              icon="location"
              value={location}
              onChange={setLocation}
            />
            <SearchField
              id="home-type"
              label="HOME TYPE"
              placeholder="All property types"
              options={propertyTypes}
              icon="home"
              value={homeType}
              onChange={setHomeType}
            />
            <SearchField
              id="budget"
              label="BUDGET"
              placeholder="Any budget"
              options={budgetRanges}
              icon="budget"
              value={budget}
              onChange={setBudget}
            />
            <Link
              href={propertiesHref({
                transaction,
                location: location ?? undefined,
                type: homeType ?? undefined,
                budget: normalizeBudgetFilter(budget ?? "any"),
              })}
              className="inline-flex min-h-[58px] items-center justify-center gap-2 self-center rounded-control bg-primary px-5 text-sm font-semibold text-on-primary hover:bg-primary-dark focus-visible:outline-offset-2">
              Search properties
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7">
                <circle cx="8.75" cy="8.75" r="5.75" />
                <path d="m13 13 4 4" strokeLinecap="round" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2.5" role="group" aria-label="Popular searches">
          <span className="mr-1 text-xs font-semibold text-muted-foreground">Popular searches</span>
          {popularSearches.map((search) => (
            <a
              key={search}
              href={propertiesHref(
                search.toLowerCase().includes("rent") ? { transaction: "rent", location: "Bhaisepati" }
                : search.toLowerCase().includes("land") ? { type: "Land", location: "Kathmandu" }
                : search.toLowerCase().includes("apartment") ? { type: "Apartment" }
                : { type: "House", location: "Lalitpur" }
              )}
              className="inline-flex min-h-[29px] items-center gap-2 rounded-full border border-border-soft px-3 text-[11px] leading-[13px] text-foreground transition-colors hover:border-primary hover:text-primary">
              {search}
              <svg
                aria-hidden="true"
                viewBox="0 0 12 12"
                className="size-3 shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2">
                <path d="M8.5 8.5v-5H3.5m5 0-5 5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}
