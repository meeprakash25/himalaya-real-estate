export interface AboutHeroContent {
  eyebrow: string
  title: string
  description: string
}

export interface FocusCardContent {
  eyebrow: string
  title: string
  description: string
}

export interface SearchFormContent {
  title: string
  subtitle: string
  submitLabel: string
  wherePlaceholder: string
  budgetPlaceholder: string
  defaults: {
    transaction: string
    propertyType: string
    where: string
    budget: string
    bedrooms: string
  }
  transactionOptions: readonly string[]
  transactionFilters: Record<string, "buy" | "rent">
  propertyTypeOptions: readonly string[]
  bedroomOptions: readonly string[]
  anyOptions: readonly string[]
}

export interface StartSearchContent {
  eyebrow: string
  title: string
  description: string
  hint: string
  form: SearchFormContent
}

export interface PlanStepContent {
  number: string
  title: string
  description: string
  link?: { label: string; href: string }
}

export interface PlanSectionContent {
  title: string
  link: { label: string; href: string }
  defaultOpenStep: string
  steps: readonly PlanStepContent[]
}

export interface ExperienceCardContent {
  icon: "shield" | "map-pin" | "home"
  title: string
  description: string
}

export interface ExperienceSectionContent {
  title: string
  description: string
  cards: readonly ExperienceCardContent[]
}

export interface TestimonialContent {
  quote: string
  name: string
  role: string
}

export interface TestimonialsSectionContent {
  title: string
  items: readonly TestimonialContent[]
}

export interface AboutCtaContent {
  eyebrow: string
  title: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}

export const aboutHero: AboutHeroContent = {
  eyebrow: "ABOUT US",
  title: "A calmer way to find property in Nepal.",
  description:
    "Himalaya Real Etate is designed around the moments that matter most in a property search: comparing options, understanding the details, and deciding with confidence. We are building a space where listings are easier to read and the next step always feels clear."
}

export const focusCards: readonly FocusCardContent[] = [
  {
    eyebrow: "OUR FOCUS",
    title: "Search with clarity",
    description:
      "Filters, listing details, and saved choices should help you narrow options quickly, without the noise of a crowded listing board."
  },
  {
    eyebrow: "WHO WE SERVE",
    title: "Built around real goals",
    description:
      "Whether you are buying a first home, renting for the next chapter, or weighing a plot of land, the platform aims to keep the next step simple."
  },
  {
    eyebrow: "OUR DIRECTION",
    title: "Rooted in Nepal's local market",
    description:
      "We want listings to reflect the cities, neighbourhoods, and property types people actually care about, presented with care and clear detail."
  }
]

export const startSearch: StartSearchContent = {
  eyebrow: "START YOUR SEARCH",
  title: "Find a place that fits.",
  description: "Pick a few essentials and we will open the listings that match them.",
  hint: "Your choices carry over as filters, and you can adjust them anytime on the results page.",
  form: {
    title: "Build your search",
    subtitle: "No account needed to explore.",
    submitLabel: "Find matching properties",
    wherePlaceholder: "City or neighbourhood",
    budgetPlaceholder: "Any budget",
    defaults: {
      transaction: "Buy a property",
      propertyType: "Any type",
      where: "",
      budget: "",
      bedrooms: "Any"
    },
    transactionOptions: ["Buy a property", "Rent a property"],
    transactionFilters: { "Buy a property": "buy", "Rent a property": "rent" },
    propertyTypeOptions: ["Any type", "House", "Bungalow", "Apartment", "Flat", "Office Space", "Land", "Commercial"],
    bedroomOptions: ["Any", "1", "2", "3", "4", "5+"],
    anyOptions: ["Any type", "Any"]
  }
}

export const planSection: PlanSectionContent = {
  title: "Plan your next move.",
  link: { label: "Find an agent", href: "/contact-us" },
  defaultOpenStep: "01",
  steps: [
    {
      number: "01",
      title: "Begin with what daily life requires",
      description:
        "Decide which areas you want to be close to, how much room you need, and which features are essential rather than nice to have.",
      link: { label: "Set your search criteria", href: "#start-search-section" },
    },
    {
      number: "02",
      title: "Review the listing as a whole",
      description:
        "Consider the price, location, and property details together. Confirm what is included and raise open questions before going any further.",
      link: { label: "Set your search criteria", href: "#start-search-section" },
    },
    {
      number: "03",
      title: "Compare your shortlist, then visit",
      description:
        "Line up your favourite homes side by side, then arrange an in-person visit to each one before you make a decision.",
      link: { label: "Find an agent", href: "/contact-us" },
    },
  ],
}

export const experienceSection: ExperienceSectionContent = {
  title: "Searching for a home should feel reassuring, not overwhelming.",
  description:
    "Good property decisions depend on clear information and a little calm. We shape each step so people feel informed well before they reach out.",
  cards: [
    {
      icon: "shield",
      title: "Details you can rely on",
      description: "Price, location, and key features sit together so comparing homes never means hunting for basics."
    },
    {
      icon: "map-pin",
      title: "Neighbourhood-first browsing",
      description: "Start with the city or area you know, then narrow by type, budget, and bedrooms."
    },
    {
      icon: "home",
      title: "A steadier next step",
      description: "When a property feels right, reaching out or planning a visit takes only a few clear actions."
    }
  ]
}

export const testimonialsSection: TestimonialsSectionContent = {
  title: "What movers say",
  items: [
    {
      quote:
        "We had a clear list of must-haves, and the results helped us skip the homes that were never going to work. Our short list was ready in one evening.",
      name: "Sabina Karki",
      role: "Home buyer in Kirtipur"
    },
    {
      quote:
        "Comparing flats used to mean juggling screenshots and phone calls. Here the details sat in one place, so I could decide without second-guessing.",
      name: "Bikash Thapa",
      role: "Apartment renter in Baneshwor"
    },
    {
      quote: "Listing our family home felt less daunting once we saw how buyers would browse it. The process felt organised from start to finish.",
      name: "Anjali Rai",
      role: "Property owner in Bhaktapur"
    }
  ]
}

export const aboutCta: AboutCtaContent = {
  eyebrow: "GET STARTED",
  title: "Ready when you are. Browse current listings or share your own property.",
  primaryLabel: "Explore properties",
  primaryHref: "/properties",
  secondaryLabel: "List your property",
  secondaryHref: "/sell"
}
