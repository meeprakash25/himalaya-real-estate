import { guides } from "@/data/guides-footer";

export const blogPosts = [
  ...guides.map((guide) => ({ ...guide, href: `/${guide.href}` })),
  {
    id: "ownership-documents",
    image: "/images/guide-land-ownership.jpg",
    imageAlt: "Land ownership records and property documents in Nepal",
    category: "LAND & OWNERSHIP",
    readingTime: "7 min read",
    title: "Property papers in Nepal: what to verify before you buy",
    excerpt: "A practical checklist for reviewing land records, ownership details and access before making an offer.",
    href: "/#property-search",
  },
  {
    id: "kathmandu-house-hunt",
    image: "/properties/property-mulpani.jpg",
    imageAlt: "A family home with a garden in a Kathmandu neighborhood",
    category: "HOME BUYING",
    readingTime: "5 min read",
    title: "House-hunting in Kathmandu: five details worth checking",
    excerpt: "Compare everyday essentials like road access, water, sunlight and commute before choosing a home.",
    href: "/#property-search",
  },
];
