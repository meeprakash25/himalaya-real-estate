import type { Metadata } from "next"

import { ContactDetails } from "@/components/contact/ContactDetails"
import { ContactForm } from "@/components/contact/ContactForm"
import { Container } from "@/components/layout/container"
import { contactHeader } from "@/data/contact"

export const metadata: Metadata = {
  title: "Contact us | Himalaya Real Etate",
  description: "Get in touch with Himalaya Real Etate about listings, buying, renting, or selling property across Nepal."
}

export default function ContactUsPage () {
  return (
    <main id="main-content" className="flex-1 bg-background py-16 sm:py-20">
      <Container className="flex flex-col gap-12">
        <header className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl leading-tight font-semibold text-foreground sm:text-5xl">
            {contactHeader.title}
          </h1>
          <p className="mt-4 text-intro text-muted-foreground">{contactHeader.description}</p>
        </header>

        <div className="mx-auto w-full max-w-3xl">
          <ContactForm />
        </div>

        <div className="mx-auto w-full max-w-4xl">
          <ContactDetails />
        </div>
      </Container>
    </main>
  )
}
