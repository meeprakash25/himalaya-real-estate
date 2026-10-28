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
