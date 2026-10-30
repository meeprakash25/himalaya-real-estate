import { Container } from "@/components/layout/container"

export function PropertyDetailLoadingSkeleton () {
  return (
    <main id="main-content" className="flex-1 animate-pulse bg-background" aria-busy="true" aria-label="Loading property">
      <Container className="py-6 sm:py-8">
        <div className="space-y-5">
          <div className="space-y-3">
            <div className="h-3 w-56 rounded bg-muted" />
            <div className="h-7 w-2/3 rounded bg-muted sm:h-8" />
            <div className="h-3 w-1/3 rounded bg-muted" />
          </div>
          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] xl:gap-8">
            <div className="min-w-0 space-y-5">
              <div className="aspect-[1.6] w-full rounded-card bg-muted" />
              <div className="h-11 rounded-card border border-border bg-card" />
              <div className="space-y-3 rounded-card border border-border bg-card p-5">
                <div className="h-4 w-1/4 rounded bg-muted" />
                <div className="h-3 w-full rounded bg-muted" />
                <div className="h-3 w-5/6 rounded bg-muted" />
                <div className="h-3 w-2/3 rounded bg-muted" />
              </div>
              <div className="space-y-3 rounded-card border border-border bg-card p-5">
                <div className="h-4 w-1/3 rounded bg-muted" />
                <div className="h-3 w-full rounded bg-muted" />
                <div className="h-3 w-3/4 rounded bg-muted" />
              </div>
            </div>
            <aside aria-hidden="true" className="min-w-0 lg:sticky lg:top-6 lg:self-start">
              <div className="space-y-4 rounded-card border border-border bg-card p-5">
                <div className="h-6 w-2/3 rounded bg-muted" />
                <div className="h-3 w-1/2 rounded bg-muted" />
                <div className="h-10 rounded-control bg-muted" />
                <div className="h-10 rounded-control bg-muted" />
                <div className="h-10 rounded-control bg-primary/20" />
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  )
}
