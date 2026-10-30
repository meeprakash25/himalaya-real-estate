import { Container } from "@/components/layout/container"

function ListingCardSkeleton () {
  return (
    <article className="grid overflow-hidden rounded-card border border-border bg-card sm:grid-cols-[minmax(190px,0.72fr)_minmax(0,1.55fr)_minmax(145px,0.7fr)]">
      <div className="relative aspect-[1.55] overflow-hidden sm:aspect-auto sm:min-h-40">
        <div className="absolute inset-0 bg-muted" />
      </div>
      <div className="min-w-0 p-4">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-4 w-16 rounded-full bg-muted" />
          <div className="h-3 w-10 rounded bg-muted" />
        </div>
        <div className="h-5 w-3/4 rounded bg-muted" />
        <div className="mt-2 h-3 w-1/2 rounded bg-muted" />
        <div className="mt-4 flex gap-4 border-t border-border pt-3">
          <div className="h-3 w-16 rounded bg-muted" />
          <div className="h-3 w-14 rounded bg-muted" />
          <div className="h-3 w-14 rounded bg-muted" />
        </div>
      </div>
      <div className="flex flex-col justify-center gap-3 border-t border-border p-4 sm:border-t-0 sm:border-l">
        <div className="hidden sm:block">
          <div className="h-5 w-24 rounded bg-muted" />
          <div className="mt-1 h-3 w-20 rounded bg-muted" />
        </div>
        <div className="h-9 rounded-control bg-primary/30" />
        <div className="mx-auto h-3 w-20 rounded bg-muted" />
      </div>
    </article>
  )
}

export function PropertyListingSkeleton () {
  return (
    <main id="main-content" className="flex-1 animate-pulse bg-background" aria-busy="true" aria-label="Loading properties">
      <section className="border-b border-border bg-primary/10 dark:border-transparent dark:bg-footer-background">
        <Container className="py-3">
          <div className="grid gap-2 sm:grid-cols-[auto_minmax(150px,1fr)_repeat(3,minmax(120px,0.6fr))_auto] sm:items-end">
            <div className="flex items-center gap-1 rounded-control bg-muted p-1 text-xs font-semibold">
              <span className="invisible rounded-sm bg-primary px-3 py-2">Buy</span>
              <span className="invisible rounded-sm px-3 py-2">Rent</span>
            </div>
            <div className="flex h-10 min-w-0 items-center gap-2 rounded-control bg-surface px-3">
              <div className="h-3 w-40 rounded bg-muted" />
            </div>
            {["LOCATION", "BUDGET", "PROPERTY TYPE"].map((label) => (
              <div key={label} className="flex min-w-0 flex-col gap-1 text-[10px] font-semibold tracking-wide">
                <span className="invisible">{label}</span>
                <div className="h-9 w-full rounded-control border border-border bg-surface" />
              </div>
            ))}
            <div className="h-10 w-full rounded-control bg-primary/30 sm:w-32" />
          </div>
        </Container>
      </section>

      <Container className="py-5 sm:py-7">
        <div className="mb-3 h-4 w-56 rounded bg-muted" />
        <div className="grid items-start gap-6 xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-7">
          <div className="min-w-0">
            <section>
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="h-7 w-56 rounded bg-muted sm:h-8" />
                  <div className="mt-1 h-4 w-44 rounded bg-muted" />
                </div>
                <div className="flex items-center justify-between gap-3 sm:justify-end">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground">Sort by</span>
                    <div className="h-9 w-36 rounded-control border border-border bg-card" />
                  </div>
                  <div className="hidden items-center rounded-control border border-border p-0.5 sm:flex">
                    <div className="rounded-sm bg-secondary p-1.5"><div className="size-4 rounded bg-muted" /></div>
                    <div className="rounded-sm p-1.5"><div className="size-4 rounded bg-muted" /></div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <ListingCardSkeleton />
                <ListingCardSkeleton />
                <ListingCardSkeleton />
              </div>
            </section>

            <section className="mt-9">
              <div className="h-6 w-72 max-w-full rounded bg-muted" />
              <div className="mt-1 h-4 w-64 max-w-full rounded bg-muted" />
              <div className="mt-4 overflow-x-auto rounded-card border border-border bg-card">
                <div className="min-w-[480px]">
                  <div className="h-9 border-b border-border" />
                  {Array.from({ length: 6 }, (_, index) => (
                    <div key={index} className="flex h-10 items-center justify-between border-b border-border px-4 last:border-b-0">
                      <div className="h-3 w-28 rounded bg-muted" />
                      <div className="h-3 w-20 rounded bg-muted" />
                      <div className="h-3 w-24 rounded bg-muted" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="mt-9">
              <div className="h-6 w-40 rounded bg-muted" />
              <div className="mt-1 h-4 w-72 max-w-full rounded bg-muted" />
              <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="rounded-card border border-border bg-card p-4">
                    <div className="h-4 w-2/3 rounded bg-muted" />
                    <div className="mt-3 space-y-2">
                      {Array.from({ length: 5 }, (_, line) => (
                        <div key={line} className="h-4 w-4/5 rounded bg-muted" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <section className="rounded-card border border-border bg-card p-3.5">
              <div className="mb-3 flex items-center justify-between">
                <div className="h-4 w-28 rounded bg-muted" />
                <div className="h-3 w-12 rounded bg-muted" />
              </div>
              <div className="aspect-[1.7] rounded-control bg-muted" />
              <div className="mt-2 h-4 w-3/4 rounded bg-muted" />
              <div className="mt-1 h-3 w-1/2 rounded bg-muted" />
              <div className="mt-3 space-y-3 border-t border-border pt-3">
                {Array.from({ length: 2 }, (_, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="size-14 shrink-0 rounded-control bg-muted" />
                    <div className="min-w-0 flex-1 space-y-2">
                      <div className="h-3 w-2/3 rounded bg-muted" />
                      <div className="h-3 w-full rounded bg-muted" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-card bg-footer-background p-4">
              <div className="h-4 w-3/4 rounded bg-footer-muted/30" />
              <div className="mt-2 h-3 w-full rounded bg-footer-muted/30" />
              <div className="mt-3 h-9 rounded-control bg-primary/40" />
              <div className="mt-3 h-3 w-40 rounded bg-footer-muted/30" />
              <div className="mt-2 space-y-1.5">
                {Array.from({ length: 3 }, (_, index) => (
                  <div key={index} className="h-3 w-5/6 rounded bg-footer-muted/30" />
                ))}
              </div>
            </section>

            <section className="rounded-card border border-border bg-card p-4">
              <div className="h-4 w-32 rounded bg-muted" />
              <div className="mt-3 flex flex-wrap gap-2">
                {[72, 88, 64, 96, 80, 70].map((width, index) => (
                  <div key={index} className="h-6 rounded-full bg-muted" style={{ width }} />
                ))}
              </div>
            </section>
          </aside>
        </div>
      </Container>
    </main>
  )
}
