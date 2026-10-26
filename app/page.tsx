import { DiscoverPlaces } from "@/components/sections/DiscoverPlaces";
import { FeaturedProperties } from "@/components/sections/FeaturedProperties";
import { GuidesAndInsights } from "@/components/sections/GuidesAndInsights";
import { Hero } from "@/components/sections/Hero";
import { HomeBuyingGuide } from "@/components/sections/HomeBuyingGuide";
import { PropertyPlanningTools } from "@/components/sections/PropertyPlanningTools";
import { SellerInvitation } from "@/components/sections/SellerInvitation";

export default function Home() {
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
  );
}
