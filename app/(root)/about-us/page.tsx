import type { Metadata } from "next"

import { AboutCta } from "@/components/about/AboutCta"
import { AboutHero } from "@/components/about/AboutHero"
import { FocusCards } from "@/components/about/FocusCards"
import { HumanExperienceSection } from "@/components/about/HumanExperienceSection"
import { PlanYourMoveSection } from "@/components/about/PlanYourMoveSection"
import { StartSearchSection } from "@/components/about/StartSearchSection"
import { TestimonialsSection } from "@/components/about/TestimonialsSection"
import {
  aboutCta,
  aboutHero,
  experienceSection,
  focusCards,
  planSection,
  startSearch,
  testimonialsSection
} from "@/data/about"

export const metadata: Metadata = {
  title: "About us | Himalaya Real Etate",
  description:
    "Learn how Himalaya Real Etate helps buyers, renters, and sellers search for property across Nepal with more clarity and confidence."
}

export default function AboutUsPage () {
  return (
    <main id="main-content" className="flex-1">
      <AboutHero content={aboutHero} />
      <FocusCards cards={focusCards} />
      <StartSearchSection content={startSearch} />
      <PlanYourMoveSection content={planSection} />
      <HumanExperienceSection content={experienceSection} />
      <TestimonialsSection content={testimonialsSection} />
      <AboutCta content={aboutCta} />
    </main>
  )
}
