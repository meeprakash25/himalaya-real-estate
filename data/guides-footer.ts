export const guides = [
  {
    id: "buying-home",
    image: "/images/home-buying-guide.jpg",
    imageAlt: "Bright, welcoming home interior with natural light",
    category: "BUYING A HOME",
    readingTime: "6 min read",
    title: "Your checklist for buying a home in Nepal",
    excerpt: "From your first viewing to ownership documents: know what to look for.",
    href: "/guides-and-insights"
  },
  {
    id: "buying-land",
    image: "/images/neighborhood-godawari.jpg",
    imageAlt: "Green hills and open land in Nepal",
    category: "LAND & OWNERSHIP",
    readingTime: "5 min read",
    title: "Buying land? Start with the right questions.",
    excerpt: "A practical look at land records, road access and planning for your plot.",
    href: "/guides-and-insights"
  },
  {
    id: "renting-well",
    image: "/images/guide-renting.jpg",
    imageAlt: "Contemporary apartment living room with natural light",
    category: "RENTING WELL",
    readingTime: "4 min read",
    title: "Find a rental that feels like your own.",
    excerpt: "The details to consider before you sign for your next apartment.",
    href: "/guides-and-insights"
  }
] as const

export const footerDescription =
  "Bringing people and places together. Discover homes, land and commercial spaces across Nepal."

export const footerLinkGroups = [
  {
    title: "Discover",
    links: [
      { label: "Buy a property", href: "/properties?transaction=buy" },
      { label: "Rent a property", href: "/properties?transaction=rent" },
      { label: "Sell with Himalaya Real Etate", href: "/contact-us" },
      { label: "List your property", href: "/sell" },
    ],
  },
  {
    title: "Popular locations",
    links: [
      { label: "Kathmandu", href: "/properties?location=Kathmandu" },
      { label: "Lalitpur", href: "/properties?location=Lalitpur" },
      { label: "Budhanilakantha", href: "/properties?location=Budhanilakantha" },
      { label: "Mahalaxmi", href: "/properties?location=Mahalaxmi" },
      { label: "Chandragiri", href: "/properties?location=Chandragiri" },
      { label: "Godawari", href: "/properties?location=Godawari" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Home-buying guide", href: "/guides-and-insights" },
      { label: "EMI Calculator", href: "/calculator" },
      { label: "Construction Calculator", href: "/calculator" },
      { label: "Area Converter", href: "/calculator" },
      { label: "Guides & insights", href: "/guides-and-insights" },
    ],
  },
  {
    title: "Himalaya Real Etate",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Help centre", href: "/contact-us" },
      { label: "Contact us", href: "/contact-us" },
      { label: "Join Himalaya Real Etate", href: "/signup" },
    ],
  },
] as const
