export interface PropertySearchFilters {
  transaction?: string
  location?: string
  type?: string
  budget?: string
  query?: string
}

const budgetFilterValues: Record<string, string> = {
  "Any budget": "any",
  "Under Rs 1 Cr": "under-1",
  "Rs 1–3 Cr": "1-3",
  "Rs 3–5 Cr": "3-5",
  "Above Rs 5 Cr": "above-5"
}

export function normalizeBudgetFilter (value: string) {
  return budgetFilterValues[value] ?? value
}

export function propertiesHref (filters: PropertySearchFilters = {}) {
  const params = new URLSearchParams()

  for (const [key, value] of Object.entries(filters)) {
    if (value && value !== "all" && value !== "any") params.set(key, value)
  }

  const query = params.toString()
  return query ? `/properties?${query}` : "/properties"
}

export const listingBudgetOptions = [
  { value: "any", label: "Any budget" },
  { value: "under-1", label: "Under Rs 1 Cr" },
  { value: "1-3", label: "Rs 1–3 Cr" },
  { value: "3-5", label: "Rs 3–5 Cr" },
  { value: "above-5", label: "Above Rs 5 Cr" }
]

export const listingSortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: low to high" },
  { value: "price-high", label: "Price: high to low" }
]

export const listingPopularSearches = ["House for sale", "Land and plots", "Apartments for sale", "Flats for rent"]

export const bedroomHomeLinks = ["2 bedroom homes", "3 bedroom homes", "4 bedroom homes", "5+ bedroom homes"]

export const homeownerBenefits = ["✓ Free listing", "✓ Direct buyer and renter enquiries", "✓ Local guidance at every step"]
