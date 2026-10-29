import type { Metadata } from "next"

import { GuidesAndInsightsListing } from "@/components/guides-and-insights/GuidesAndInsightsListing"
import { Container } from "@/components/layout/container"
import { guidesAndInsightsPosts } from "@/data/guides-and-insights"

export const metadata: Metadata = {
  title: "Guides & Insights | Himalaya Real Etate"
}

export default function GuidesAndInsightsPage () {
  return (
    <main id="main-content" className="flex-1">
      <section className="bg-background py-14 sm:py-16" aria-labelledby="guides-and-insights-title">
        <Container>
          <GuidesAndInsightsListing posts={guidesAndInsightsPosts} />
        </Container>
      </section>
    </main>
  )
}
