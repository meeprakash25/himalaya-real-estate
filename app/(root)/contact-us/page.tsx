import { Container } from "@/components/layout/container"

export default function HelpPage () {
  return (
    <main id="main-content" className="flex-1">
      <section className="py-20 sm:py-28" aria-labelledby="page-title">
        <Container>
          <h1 id="page-title" className="font-heading text-title font-semibold text-foreground">Help</h1>
          <p className="mt-3 text-body text-muted">Coming soon...</p>
        </Container>
      </section>
    </main>
  )
}
