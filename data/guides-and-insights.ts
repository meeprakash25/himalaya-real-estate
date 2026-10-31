export interface GuidePost {
  id: string
  slug: string
  image: string
  imageAlt: string
  category: string
  readingTime: string
  title: string
  excerpt: string
  content: string
}

export const guidesAndInsightsPosts: GuidePost[] = [
  {
    id: "buying-home",
    slug: "buying-home-in-nepal",
    image: "/images/home-buying-guide.jpg",
    imageAlt: "Bright, welcoming home interior with natural light",
    category: "BUYING A HOME",
    readingTime: "6 min read",
    title: "Your checklist for buying a home in Nepal",
    excerpt: "From your first viewing to ownership documents: know what to look for.",
    content: `
      <h2>Start with your needs and budget</h2>
      <p>Before scheduling viewings, list the things your household needs every day: the number of bedrooms, access to work or school, public transport, and nearby shops or health services. Set a budget that includes more than the asking price. Allow for applicable taxes and registration costs, legal advice, loan charges, repairs, and moving expenses, and confirm current fees with the relevant offices or professionals.</p>

      <h2>Visit the property with a checklist</h2>
      <p>Look beyond the photos and finishes. Check the structure for visible cracks, dampness, leaks, and signs of poor maintenance. Ask about the building's age, construction materials, any renovations, and earthquake-resistant design, and consider getting an independent technical inspection. Test water supply, drainage, electricity, mobile coverage, and internet options where possible.</p>

      <h2>Check the location at different times</h2>
      <p>Visit more than once if you can. Check road access and travel times during busy hours, and ask nearby residents about water availability, waste collection, power interruptions, and monsoon drainage. Notice sunlight, ventilation, noise, and any nearby construction or planned development that could affect daily life.</p>

      <h2>Verify ownership and the property's details</h2>
      <p>Before paying a deposit or signing an agreement, have the ownership certificate, seller's identity, plot details, and property boundaries checked against official records. Confirm that the person selling has the authority to do so, and ask a qualified property lawyer to check for mortgages, disputes, restrictions, or other issues. Make sure the house and land being shown match the documents.</p>

      <h2>Understand the agreement and payment steps</h2>
      <p>Read the written agreement carefully, including the total price, deposit, payment schedule, handover date, included fixtures, and what happens if either side cannot complete the sale. Keep receipts and copies of all documents, and avoid relying on verbal promises. Have a lawyer review the terms before you sign or transfer a substantial amount.</p>

      <p><strong>Before you commit:</strong> Compare the property against your needs, verify its records independently, and take time to understand the full costs. A careful inspection and professional review can help you make a more confident decision.</p>
    `,
  },
  {
    id: "buying-land",
    slug: "buying-land-in-nepal",
    image: "/images/neighborhood-godawari.jpg",
    imageAlt: "Green hills and open land in Nepal",
    category: "LAND & OWNERSHIP",
    readingTime: "5 min read",
    title: "Buying land? Start with the right questions.",
    excerpt: "A practical look at land records, road access and planning for your plot.",
    content: `
      <h2>Confirm the plot and its ownership</h2>
      <p>Start by matching the seller's identity and ownership certificate (Lalpurja) with the plot's Kitta number, recorded area, and boundaries. Check the details against records at the relevant Land Revenue Office, and ask a qualified property lawyer to review ownership history, the seller's authority, and any mortgages, disputes, or restrictions before you make a commitment.</p>

      <h2>Visit the land and check its boundaries</h2>
      <p>Walk the entire plot with the seller and compare what you see with the cadastral map. If markers or boundary lines are unclear, arrange for a qualified surveyor to verify them. Do not rely only on a fence, a neighbor's description, or the area stated in an advertisement; resolve any mismatch with official records before proceeding.</p>

      <h2>Look closely at access and the site itself</h2>
      <p>Confirm that the plot has practical, lawful access to a public road. Ask the municipality or relevant office to clarify any claimed right of way, and check the road's actual width and condition. Consider slope, soil, drainage, flood or landslide exposure, retaining-wall needs, and how the land behaves during the monsoon. These factors can affect both construction costs and everyday access.</p>

      <h2>Check land use, services, and local plans</h2>
      <p>Ask the local municipality about the plot's land-use classification, applicable building rules, setbacks, and whether your intended construction is permitted. Confirm the availability and cost of water, electricity, sewage or septic options, and other services rather than assuming they reach the site. Ask about planned roads or other nearby development that could affect the land.</p>

      <h2>Calculate the full cost before negotiating</h2>
      <p>Include applicable taxes and registration costs, legal and survey fees, road or site preparation, drainage, retaining structures, and the cost of bringing utilities to the plot. Request current fee information from the relevant offices and get estimates from qualified professionals. A low purchase price may not reflect the total cost of making the land usable.</p>

      <h2>Keep the transaction documented</h2>
      <p>Put the agreed price, deposit, payment schedule, plot details, and conditions in writing. Have a lawyer review the documents before signing, keep receipts for every payment, and complete the transfer through the appropriate official process. Avoid rushing because of verbal assurances or handing over a large sum before the ownership and plot details have been independently verified.</p>

      <p><strong>Bottom line:</strong> Verify the records, boundaries, access, and permitted use before you buy. For questions about title or local requirements, consult the relevant government offices and a qualified property professional.</p>
    `,
  },
  {
    id: "renting-well",
    slug: "renting-an-appartment-in-nepal",
    image: "/images/guide-renting.jpg",
    imageAlt: "Contemporary apartment living room with natural light",
    category: "RENTING WELL",
    readingTime: "4 min read",
    title: "Find a rental that feels like your own.",
    excerpt: "The details to consider before you sign for your next apartment.",
    content: "",
  },
  {
    id: "ownership-documents",
    slug: "property-papers-nepal-what-to-verify-before-you-buy",
    image: "/images/guide-land-ownership.jpg",
    imageAlt: "Land ownership records and property documents in Nepal",
    category: "LAND & OWNERSHIP",
    readingTime: "7 min read",
    title: "Property papers in Nepal: what to verify before you buy",
    excerpt: "A practical checklist for reviewing land records, ownership details and access before making an offer.",
    content: `
      <h2>Understanding land ownership in Nepal</h2>
      <p>Before committing to any property purchase in Nepal, verifying the ownership documents is not just recommended—it's essential. The land registration system here has unique characteristics that every buyer should understand.</p>

      <h2>Key documents to verify</h2>
      <h3>1. Lalpurja (Land Ownership Certificate)</h3>
      <p>The Lalpurja is the primary document proving ownership. It contains the owner's name, plot number, area, and boundaries. Always verify that the name on the Lalpurja matches the seller's citizenship certificate.</p>

      <h3>2. Kitta Number and Plot Details</h3>
      <p>Each land parcel has a unique Kitta number. Cross-reference this with the official records at the Land Revenue Office (Malpot Karyalaya) to ensure there are no discrepancies in area or boundaries.</p>

      <h3>3. Trace the Ownership Chain</h3>
      <p>Request the complete chain of ownership (Saral Namjari) for at least the past 15-20 years. This helps identify any disputes, mortgages, or irregular transfers in the property's history.</p>

      <h3>4. Check for Encumbrances</h3>
      <p>Obtain a "Namjari" or encumbrance certificate from the Land Revenue Office. This reveals any mortgages, liens, court cases, or government acquisitions affecting the property.</p>

      <h3>5. Verify Land Classification</h3>
      <p>Confirm the land classification (commercial, residential, agricultural) matches your intended use. Conversion from agricultural to residential requires specific approvals.</p>

      <h2>Road access and boundaries</h2>
      <p>Physical verification of road access is crucial. The stated road width on paper may differ from reality. Visit the site and measure the actual access. Check boundary markers (Thito) and confirm they align with the map.</p>

      <h2>Professional verification</h2>
      <p>Engage a qualified lawyer who specializes in property law. They can conduct a thorough title search at the Land Revenue Office and identify red flags that may not be apparent to buyers.</p>

      <h2>Final checklist before signing</h2>
      <ul>
        <li>Original Lalpurja verified against Land Revenue Office records</li>
        <li>Seller's citizenship and identity confirmed</li>
        <li>Complete ownership chain traced (15+ years)</li>
        <li>Encumbrance certificate obtained and clear</li>
        <li>Land classification matches intended use</li>
        <li>Physical site visit confirms boundaries and access</li>
        <li>All property taxes paid up to date</li>
        <li>No pending litigation or government acquisition notices</li>
      </ul>

      <p><strong>Remember:</strong> A small investment in proper verification can save you from costly disputes later. When in doubt, always consult a legal professional familiar with Nepali property law.</p>
    `,
  },
  {
    id: "kathmandu-house-hunt",
    slug: "house-hunting-kathmandu-five-details-worth-checking",
    image: "/properties/property-mulpani.jpg",
    imageAlt: "A family home with a garden in a Kathmandu neighborhood",
    category: "HOME BUYING",
    readingTime: "5 min read",
    title: "House-hunting in Kathmandu: five details worth checking",
    excerpt: "Compare everyday essentials like road access, water, sunlight and commute before choosing a home.",
    content: `
      <h2>Beyond the listing photos</h2>
      <p>Kathmandu's property market moves fast, but rushing into a decision without checking the fundamentals can lead to daily frustrations. Here are five practical details that make a real difference to everyday life.</p>

      <h2>1. Road access—width and condition</h2>
      <p>A listing might say "20 ft road access," but the reality matters more. Is it paved? Does it flood during monsoon? Can two vehicles pass? Narrow or unpaved roads affect everything from furniture delivery to emergency vehicle access.</p>

      <h2>2. Water supply reliability</h2>
      <p>Ask specifically: Is there a municipal connection? How many hours per day? Is there a reserve tank? What about water quality—do residents use filters or buy jar water? In many Kathmandu neighborhoods, water supply defines daily routines.</p>

      <h2>3. Sunlight and ventilation</h2>
      <p>Visit at different times of day. A home that looks bright at noon might be shadowed by neighboring buildings in winter. Check which rooms get morning sun (crucial for drying laundry and natural warmth) and whether cross-ventilation works.</p>

      <h2>4. Actual commute time</h2>
      <p>Don't trust map estimates. Test the commute during peak hours—morning and evening. A "15-minute drive" can become 45 minutes in traffic. Consider alternatives: public transport options, walkability to essentials, and school runs if applicable.</p>

      <h2>5. Neighborhood infrastructure</h2>
      <p>Walk the area. Are there grocery stores, pharmacies, and clinics within walking distance? How reliable is electricity? Is there fiber internet? What about waste management and drainage? These daily conveniences outweigh premium finishes.</p>

      <h2>Bonus: Future development plans</h2>
      <p>Check the local municipality's development plans. A proposed road widening, commercial zone, or high-rise project nearby can dramatically change the character—and value—of a neighborhood.</p>

      <p><strong>Bottom line:</strong> A beautiful interior can be renovated. Road access, water, sunlight, commute, and neighborhood infrastructure are much harder to change. Prioritize the unchangeable.</p>
    `,
  },
] as const

export function getGuideBySlug(slug: string): GuidePost | undefined {
  return guidesAndInsightsPosts.find((post) => post.slug === slug)
}

export function getGuideById(id: string): GuidePost | undefined {
  return guidesAndInsightsPosts.find((post) => post.id === id)
}

export function getAllGuideSlugs(): string[] {
  return guidesAndInsightsPosts.map((post) => post.slug)
}