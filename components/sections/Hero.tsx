import Image from "next/image";
import { Container } from "@/components/layout/container";
import {
  budgetRanges,
  popularSearches,
  propertyLocations,
  propertyTypes,
} from "@/data/hero";

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="size-[17px] shrink-0 fill-none stroke-primary" strokeWidth="1.5">
      <circle cx="9" cy="9" r="7.5" />
      <path d="m5.5 9 2.25 2.25L12.5 6.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M13 6.67c0 3.67-5 7.33-5 7.33S3 10.34 3 6.67a5 5 0 1 1 10 0Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="8" cy="6.67" r="1.67" />
    </svg>
  );
}

function SearchField({
  id,
  label,
  placeholder,
  options,
  icon,
}: {
  id: string;
  label: string;
  placeholder: string;
  options: readonly string[];
  icon: "location" | "home" | "budget";
}) {
  return (
    <label htmlFor={id} className="flex min-h-[58px] min-w-0 items-center gap-3 rounded-control border border-border px-3.5 focus-within:ring-2 focus-within:ring-primary">
      <span aria-hidden="true" className="shrink-0 text-primary">
        {icon === "location" ? (
          <PinIcon className="size-5" />
        ) : icon === "home" ? (
          <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="m2.5 9 7.5-6 7.5 6v8.5h-5v-5h-5v5h-5V9Z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 20 20" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="2.5" y="4.5" width="15" height="11" rx="2" />
            <path d="M2.5 8h15M6 12h3" strokeLinecap="round" />
          </svg>
        )}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-1">
        <span className="text-[10px] leading-3 font-semibold tracking-wide text-muted">{label}</span>
        <select
          id={id}
          defaultValue=""
          className="w-full appearance-none truncate bg-transparent text-[13px] leading-4 text-foreground focus-visible:outline-none"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </span>
      <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4 shrink-0 text-muted" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="m4 6 4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </label>
  );
}

export function Hero() {
  return (
    <section className="bg-accent py-8 md:py-10" aria-labelledby="hero-title" data-node-id="2:9438">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,580px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,600px)_minmax(0,620px)] xl:gap-5" data-node-id="2:9439">
          <div className="flex flex-col items-start" data-node-id="2:9440">
            <p className="flex items-center gap-2 text-label leading-[13px] font-bold tracking-[0.08em] text-primary">
              <span aria-hidden="true" className="h-0.5 w-5 bg-primary" />
              YOUR PLACE. YOUR POSSIBILITIES.
            </p>
            <h1 id="hero-title" className="mt-6 max-w-xl font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl xl:mt-7 xl:text-display" data-node-id="2:9444">
              Find your next<br className="hidden sm:block" /> home in Nepal.
            </h1>
            <p className="mt-5 max-w-xl text-intro text-muted" data-node-id="2:9445">
              Verified home, land, and commercial spaces to buy or rent, all in one place.
            </p>
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-primary" aria-label="Listing benefits" data-node-id="2:9446">
              <li className="inline-flex items-center gap-2"><CheckIcon />Verified listings</li>
              <li className="inline-flex items-center gap-2"><CheckIcon />Local expertise</li>
            </ul>
          </div>

          <figure className="relative aspect-[31/21] overflow-hidden rounded-panel lg:h-105 lg:aspect-auto" data-node-id="2:9453">
            <Image
              src="/hero-home.jpg"
              alt="A modern home surrounded by greenery in Nepal"
              fill
              priority
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              data-node-id="2:9454"
            />
            <figcaption className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-control bg-surface px-3 py-2 text-[10px] leading-3 font-medium text-foreground">
              <PinIcon className="size-3.5 shrink-0" />
              A little closer to home.
            </figcaption>
          </figure>
        </div>

        <div id="property-search" className="mt-7 rounded-card bg-surface p-4 sm:p-6" data-node-id="2:9458">
          <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
            <fieldset className="flex items-center gap-6" data-node-id="2:9459">
              <legend className="sr-only">Search for a property to buy or rent</legend>
              <label className="relative cursor-pointer rounded-sm pb-2 text-sm font-bold text-muted has-[:checked]:text-primary focus-within:ring-2 focus-within:ring-primary">
                <input className="peer sr-only" type="radio" name="transaction" value="buy" defaultChecked />
                Buy
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-transparent peer-checked:bg-primary" />
              </label>
              <label className="relative cursor-pointer rounded-sm pb-2 text-sm font-medium text-muted has-[:checked]:text-primary focus-within:ring-2 focus-within:ring-primary">
                <input className="peer sr-only" type="radio" name="transaction" value="rent" />
                Rent
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[3px] rounded-full bg-transparent peer-checked:bg-primary" />
              </label>
            </fieldset>
            <p className="text-xs text-muted">A new beginning starts with a search.</p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_196px]" data-node-id="2:9467">
            <SearchField id="location" label="LOCATION" placeholder="City or neighbourhood" options={propertyLocations} icon="location" />
            <SearchField id="home-type" label="HOME TYPE" placeholder="All property types" options={propertyTypes} icon="home" />
            <SearchField id="budget" label="BUDGET" placeholder="Any budget" options={budgetRanges} icon="budget" />
            <button type="button" className="inline-flex min-h-[50px] items-center justify-center gap-3 self-center rounded-control bg-primary px-5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-dark focus-visible:outline-offset-2">
              Search properties
              <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7">
                <circle cx="8.75" cy="8.75" r="5.75" />
                <path d="m13 13 4 4" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2.5" role="group" aria-label="Popular searches">
          <span className="mr-1 text-xs font-semibold text-muted">Popular searches</span>
          {popularSearches.map((search) => (
            <a
              key={search}
              href="#property-search"
              className="inline-flex min-h-[29px] items-center gap-2 rounded-full border border-border-soft px-3 text-[11px] leading-[13px] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {search}
              <Image src="/arrow-up-right.svg" alt="" width={12} height={12} aria-hidden="true" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
