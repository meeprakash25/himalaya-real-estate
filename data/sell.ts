export interface SellHeroContent {
  eyebrow: string
  title: string
  description: string
  primaryLabel: string
  primaryBadge: string
  secondaryLabel: string
  highlights: readonly string[]
  listableTitle: string
  listableItems: readonly string[]
  listableDescription: string
}

export interface SellStepContent {
  title: string
  description: string
}

export interface SellBenefitContent {
  icon: "tag" | "users" | "trending" | "camera"
  title: string
  description: string
}

export interface SellFormContent {
  eyebrow: string
  title: string
  description: string
  fields: {
    fullName: { label: string; placeholder: string }
    phone: { label: string; placeholder: string }
    email: { label: string; placeholder: string }
    propertyType: { label: string; placeholder: string }
    details: { label: string; placeholder: string }
  }
  propertyTypes: readonly string[]
  submitLabel: string
  note: string
  successMessage: string
}

export const sellHero: SellHeroContent = {
  eyebrow: "SELL OR RENT YOUR PROPERTY",
  title: "List with us at no cost. We connect you with serious buyers.",
  description:
    "Share a few details about your home, plot, or commercial space. A local consultant reviews your listing, calls you back, and publishes it in front of people searching across Nepal.",
  primaryLabel: "Start your listing",
  primaryBadge: "FREE",
  secondaryLabel: "See the process",
  highlights: ["No listing fee", "Screened enquiries", "Nepal-based team"],
  listableTitle: "WHAT YOU CAN LIST",
  listableItems: ["House", "Land", "Apartment", "Flat", "Office space", "Shop", "Commercial", "Hostel", "Rental space", "Project"],
  listableDescription:
    "Residential homes, plots, and commercial spaces can all be listed for sale or for rent."
}

export const sellProcess = {
  eyebrow: "HOW LISTING WORKS",
  title: "From first message to published listing.",
  description: "Three steps keep the process short and clear, so you know what happens next.",
  steps: [
    {
      title: "Share the basics",
      description:
        "Complete the short form with your contact details and the type of property you want to sell or rent."
    },
    {
      title: "We call you back",
      description:
        "A local consultant reaches out within one business day to confirm details, discuss pricing, and plan photos."
    },
    {
      title: "Your listing goes live",
      description:
        "We publish your property with photos and key details, then pass qualified enquiries directly to you."
    }
  ] satisfies readonly SellStepContent[]
}

export const sellBenefits = {
  eyebrow: "WHY LIST WITH US",
  title: "Less time chasing, more time choosing.",
  description: "Here is what owners get when they work with our team.",
  items: [
    {
      icon: "tag",
      title: "No upfront listing cost",
      description:
        "Your property goes live without a fee, so you can test interest in the market before making any commitment."
    },
    {
      icon: "users",
      title: "Screened enquiries",
      description:
        "We filter callers first, so your time goes to people who are genuinely ready to buy or rent."
    },
    {
      icon: "trending",
      title: "Local pricing insight",
      description:
        "Consultants who know your area help you set a realistic asking price for your property type."
    },
    {
      icon: "camera",
      title: "Presentation that stands out",
      description:
        "Photos, key details, and placement are handled for you, so the listing looks polished from day one."
    }
  ] satisfies readonly SellBenefitContent[]
}

export const sellForm: SellFormContent = {
  eyebrow: "START YOUR LISTING",
  title: "Tell us about your property.",
  description: "Share your details and a consultant will call you back within one business day.",
  fields: {
    fullName: { label: "Full name", placeholder: "Your full name" },
    phone: { label: "Phone number", placeholder: "+977 98XXXXXXXX" },
    email: { label: "Email address", placeholder: "you@example.com" },
    propertyType: { label: "Property type", placeholder: "Select a property type" },
    details: {
      label: "About your property",
      placeholder: "Location, size, and asking price if you have one. Anything that helps us prepare for the call."
    }
  },
  propertyTypes: [
    "House",
    "Land",
    "Apartment",
    "Flat",
    "Office space",
    "Shop",
    "Commercial",
    "Hostel",
    "Rental space",
    "Project"
  ],
  submitLabel: "Request a callback",
  note: "Submitting is free, and there is no obligation to list.",
  successMessage: "Thanks. A Himalaya Real Etate consultant will call you within one business day."
}
