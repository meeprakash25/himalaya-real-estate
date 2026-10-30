import { Container } from "@/components/layout/container"
import { Amenities } from "@/components/property/Amenities"
import { CommonQuestions } from "@/components/property/CommonQuestions"
import { ContactTourCard } from "@/components/property/ContactTourCard"
import { Description } from "@/components/property/Description"
import { Gallery } from "@/components/property/Gallery"
import { Header } from "@/components/property/Header"
import { Overview } from "@/components/property/Overview"
import { QuickLinks } from "@/components/property/QuickLinks"
import { SimilarProperties } from "@/components/property/SimilarProperties"
import { propertySectionLinks, type Property } from "@/data/properties"

export function PropertyDetail({ property, similarProperties }: { property: Property; similarProperties: Property[] }) {
  return (
    <main id="main-content" className="flex-1 bg-background">
      <Container className="py-6 sm:py-8">
        <div className="space-y-5">
          <Header property={property} />
          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] xl:gap-8">
            <div className="min-w-0 space-y-5">
              <Gallery
                images={property.detail?.gallery ?? [{ src: property.image, alt: property.imageAlt }]}
                title={property.title}
              />

              <nav aria-label="Property sections" className="overflow-x-auto rounded-card border border-border bg-card">
                <ul className="flex min-w-max items-center gap-5 px-4 py-3 text-sm text-muted-foreground sm:gap-7 sm:px-5">
                  {propertySectionLinks.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="whitespace-nowrap hover:text-foreground">
                        {section.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Overview property={property} />
              <Description property={property} />
              <Amenities amenities={property.detail?.amenities ?? []} />
              <CommonQuestions questions={property.detail?.questions ?? []} />
              <SimilarProperties properties={similarProperties} />
              <QuickLinks links={property.detail?.quickLinks ?? []} />
            </div>

            <aside aria-label="Contact and tour card" className="min-w-0 lg:sticky lg:top-6 lg:self-start">
              <ContactTourCard property={property} />
            </aside>
          </div>
        </div>
      </Container>
    </main>
  )
}
