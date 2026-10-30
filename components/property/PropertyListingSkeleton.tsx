import { Container } from "@/components/layout/container"

function PropertyCardSkeletonRow () {
  return (
    <div className="flex gap-3 rounded-card border border-border bg-card p-3">
      <div className="h-24 w-32 shrink-0 rounded-control bg-muted" />
      <div className="flex-1 space-y-2 pt-1">
        <div className="h-4 w-3/4 rounded bg-muted" />
        <div className="h-3 w-1/2 rounded bg-muted" />
        <div className="h-3 w-1/3 rounded bg-muted" />
      </div>
    </div>
  )
}

export function PropertyListingSkeleton () {
  return (
    <main id="main-content" className="flex-1 animate-pulse bg-background" aria-busy="true" aria-label="Loading properties">
      <section className="border-b border-border bg-primary/10 dark:border-transparent dark:bg-footer-background">
        <Container className="py-3">
          <div className="grid gap-2 sm:grid-cols-[auto_minmax(150px,1fr)_repeat(3,minmax(120px,0.6fr))_auto] sm:items-end">
            <div className="h-10 w-40 rounded-control bg-muted" />
            <div className="h-10 rounded-control bg-surface" />
            <div className="h-10 rounded-control bg-surface" />
            <div className="h-10 rounded-control bg-surface" />
            <div className="h-10 rounded-control bg-surface" />
            <div className="h-10 w-32 rounded-control bg-muted" />
          </div>
        </Container>
      </section>

      <Container className="py-5 sm:py-7">
        <div className="mb-3 h-3 w-48 rounded bg-muted" />
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-7">
          <div className="min-w-0">
            <div className="mb-4 space-y-2">
              <div className="h-6 w-56 rounded bg-muted" />
              <div className="h-3 w-40 rounded bg-muted" />
            </div>
            <div className="space-y-3">
              <PropertyCardSkeletonRow />
              <PropertyCardSkeletonRow />
              <PropertyCardSkeletonRow />
            </div>
          </div>
          <aside className="hidden space-y-4 xl:block">
            <div className="h-72 rounded-card border border-border bg-card" />
            <div className="h-48 rounded-card bg-footer-background" />
          </aside>
        </div>
      </Container>
    </main>
  )
}
