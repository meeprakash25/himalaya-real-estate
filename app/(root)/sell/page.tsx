import type { Metadata } from "next"

import { SellHero } from "@/components/sell/SellHero"
import { SellListingForm } from "@/components/sell/SellListingForm"
import { SellProcess } from "@/components/sell/SellProcess"
import { sellHero } from "@/data/sell"

export const metadata: Metadata = {
  title: "Sell or rent your property | Himalaya Real Etate",
  description:
    "List your property with Himalaya Real Etate for free and reach buyers and renters across Nepal through a local team."
}

export default function SellPage () {
  return (
    <main id="main-content" className="flex-1">
      <SellHero content={sellHero} />
      <SellProcess />
      <SellListingForm />
    </main>
  )
}
