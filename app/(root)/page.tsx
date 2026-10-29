import { DiscoverPlaces } from "@/components/home/DiscoverPlaces"
import { FeaturedProperties } from "@/components/home/FeaturedProperties"
import { GuidesAndInsights } from "@/components/home/GuidesAndInsights"
import { Hero } from "@/components/home/Hero"
import { HomeBuyingGuide } from "@/components/home/HomeBuyingGuide"
import { PropertyPlanningTools } from "@/components/home/PropertyPlanningTools"
import { SellerInvitation } from "@/components/home/SellerInvitation"

export default function Home () {
  return (
    <main id="main-content" className="flex-1">
      <Hero />
      <FeaturedProperties />
      <SellerInvitation />
      <DiscoverPlaces />
      <HomeBuyingGuide />
      <PropertyPlanningTools />
      <GuidesAndInsights />
    </main>
  )
}
