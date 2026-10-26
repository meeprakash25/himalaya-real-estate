export const guides = [
  {
    id: "buying-home",
    nodeId: "2:9763",
    imageNodeId: "2:9764",
    image: "/home-buying-guide.jpg",
    imageAlt: "Bright, welcoming home interior with natural light",
    category: "BUYING A HOME",
    readingTime: "6 min read",
    title: "Your checklist for buying a home in Nepal",
    excerpt: "From your first viewing to ownership documents: know what to look for.",
    href: "#home-buying-guide-title",
  },
  {
    id: "buying-land",
    nodeId: "2:9775",
    imageNodeId: "2:9776",
    image: "/neighborhood-godawari.jpg",
    imageAlt: "Green hills and open land in Nepal",
    category: "LAND & OWNERSHIP",
    readingTime: "5 min read",
    title: "Buying land? Start with the right questions.",
    excerpt: "A practical look at land records, road access and planning for your plot.",
    href: "#property-search",
  },
  {
    id: "renting-well",
    nodeId: "2:9787",
    imageNodeId: "2:9788",
    image: "/guide-renting.jpg",
    imageAlt: "Contemporary apartment living room with natural light",
    category: "RENTING WELL",
    readingTime: "4 min read",
    title: "Find a rental that feels like your own.",
    excerpt: "The details to consider before you sign for your next apartment.",
    href: "#property-search",
  },
] as const;

export const footerDescription =
  "Bringing people and places together. Discover homes, land and commercial spaces across Nepal.";

export const footerLinkGroups = [
  {
    title: "Discover",
    links: [
      { label: "Buy a property", href: "#buy" },
      { label: "Rent a property", href: "#rent" },
      { label: "Sell with Himalaya Real Etate", href: "#sell" },
      { label: "List your property", href: "#sell" },
    ],
  },
  {
    title: "Popular locations",
    links: [
      { label: "Kathmandu", href: "#neighborhoods" },
      { label: "Lalitpur", href: "#neighborhoods" },
      { label: "Budhanilakantha", href: "#neighborhoods" },
      { label: "Mahalaxmi", href: "#neighborhoods" },
      { label: "Chandragiri", href: "#neighborhoods" },
      { label: "Godawari", href: "#neighborhoods" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Home-buying guide", href: "#home-buying-guide-title" },
      { label: "EMI Calculator", href: "#planning-tools-title" },
      { label: "Construction Calculator", href: "#planning-tools-title" },
      { label: "Area Converter", href: "#planning-tools-title" },
      { label: "Blog & insights", href: "#guides" },
    ],
  },
  {
    title: "Himalaya Real Etate",
    links: [
      { label: "About us", href: "#footer" },
      { label: "Help centre", href: "#footer" },
      { label: "Contact us", href: "#footer" },
      { label: "Join Himalaya Real Etate", href: "#footer" },
    ],
  },
] as const;
