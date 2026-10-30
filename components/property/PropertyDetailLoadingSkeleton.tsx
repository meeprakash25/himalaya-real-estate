import { Container } from "@/components/layout/container"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const bar = "rounded bg-muted"

function SectionCardHeader ({ titleWidth = "w-40", headerClassName = "px-5 pt-5 pb-3 sm:px-6 sm:pt-6" }: { titleWidth?: string, headerClassName?: string }) {
  return (
    <CardHeader className={headerClassName}>
      <div className={`h-7 ${titleWidth} ${bar}`} />
    </CardHeader>
  )
}

export function PropertyDetailLoadingSkeleton () {
  return (
    <main id="main-content" className="flex-1 animate-pulse bg-background" aria-busy="true" aria-label="Loading property">
      <Container className="py-6 sm:py-8">
        <div className="space-y-5">
          <header className="grid gap-4 border-b border-border pb-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-8">
            <div className="min-w-0">
              <div className={`mb-3 h-5 w-72 max-w-full ${bar}`} />
              <div className={`mb-2 h-5 w-48 ${bar}`} />
              <div className={`h-7 w-3/4 sm:h-9 ${bar}`} />
            </div>
            <div className="flex min-w-0 flex-wrap items-end justify-between gap-3 sm:justify-end">
              <div className="sm:text-right">
                <div className={`ml-auto h-4 w-24 ${bar}`} />
                <div className={`mt-1 ml-auto h-7 w-36 ${bar}`} />
                <div className={`mt-1 ml-auto h-4 w-40 ${bar}`} />
              </div>
              <div className="flex items-center gap-2 pb-1">
                <div className="size-9 rounded-full border border-border bg-card" />
                <div className="size-9 rounded-full border border-border bg-card" />
              </div>
            </div>
          </header>

          <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] xl:gap-8">
            <div className="min-w-0 space-y-5">
              <section className="space-y-2">
                <div className="grid grid-cols-2 gap-2 sm:aspect-[1.72] sm:grid-cols-[1.65fr_1fr] sm:grid-rows-2 sm:gap-3">
                  <div className="col-span-2 aspect-[1.5] overflow-hidden rounded-card bg-muted sm:col-span-1 sm:row-span-2 sm:aspect-auto" />
                  <div className="aspect-[1.5] overflow-hidden rounded-card bg-muted sm:aspect-auto" />
                  <div className="aspect-[1.5] overflow-hidden rounded-card bg-muted sm:aspect-auto" />
                </div>
              </section>

              <nav aria-hidden="true" className="overflow-x-auto rounded-card border border-border bg-card">
                <div className="flex items-center gap-5 px-4 py-3 sm:gap-7 sm:px-5">
                  {["w-16", "w-20", "w-24", "w-16", "w-20"].map((width, index) => (
                    <div key={index} className={`h-5 ${width} ${bar}`} />
                  ))}
                </div>
              </nav>

              <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
                <SectionCardHeader titleWidth="w-28" headerClassName="px-5 pt-5 pb-3 sm:px-6 sm:pt-6" />
                <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-4">
                    {Array.from({ length: 7 }, (_, index) => (
                      <div key={index} className="min-w-0">
                        <div className="flex items-center gap-2">
                          <div className="size-4 shrink-0 rounded bg-primary/30" />
                          <div className={`h-4 w-16 ${bar}`} />
                        </div>
                        <div className={`mt-1 ml-6 h-5 w-20 ${bar}`} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
                <SectionCardHeader titleWidth="w-48" />
                <CardContent className="px-5 pb-4 sm:px-6 sm:pb-5">
                  <div className="space-y-0">
                    {["w-full", "w-11/12", "w-full", "w-2/3"].map((width, index) => (
                      <div key={index} className="flex h-6 items-center">
                        <div className={`h-3 ${width} ${bar}`} />
                      </div>
                    ))}
                  </div>
                  <div className={`mt-2 h-5 w-20 ${bar}`} />
                </CardContent>
              </Card>

              <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
                <SectionCardHeader titleWidth="w-24" />
                <CardContent className="space-y-4 px-5 pb-4 sm:px-6 sm:pb-5">
                  {Array.from({ length: 4 }, (_, groupIndex) => (
                    <div key={groupIndex}>
                      <div className={`mb-2 h-4 w-28 ${bar}`} />
                      <div className="flex flex-wrap gap-2">
                        {["w-20", "w-24", "w-16"].map((width, index) => (
                          <div key={index} className={`h-7 rounded-full border border-border bg-surface ${width}`} />
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className={`h-5 w-20 ${bar}`} />
                </CardContent>
              </Card>

              <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
                <CardHeader className="px-5 pt-5 pb-2 sm:px-6 sm:pt-6">
                  <div className={`h-7 w-40 ${bar}`} />
                </CardHeader>
                <CardContent className="px-5 pb-4 sm:px-6 sm:pb-5">
                  {Array.from({ length: 4 }, (_, index) => (
                    <div key={index} className="flex min-h-11 items-center justify-between border-b border-border px-1 py-3 last:border-b-0">
                      <div className={`h-4 w-3/5 ${bar}`} />
                      <div className="size-4 rounded bg-muted" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <section>
                <div className="mb-4">
                  <div className={`h-7 w-44 ${bar}`} />
                  <div className={`mt-1 h-5 w-56 max-w-full ${bar}`} />
                </div>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {Array.from({ length: 3 }, (_, index) => (
                    <Card key={index} className="gap-0 overflow-hidden rounded-card border-border bg-card p-0 ring-0">
                      <div className="aspect-[1.55] bg-muted" />
                      <div className="p-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className={`h-7 w-28 ${bar}`} />
                          <div className={`h-4 w-16 ${bar}`} />
                        </div>
                        <div className="mt-2 min-h-10 space-y-1.5">
                          <div className={`h-4 w-full ${bar}`} />
                          <div className={`h-4 w-2/3 ${bar}`} />
                        </div>
                        <div className={`mt-2 h-5 w-3/4 ${bar}`} />
                        <div className="mt-3 border-t border-border pt-3">
                          <div className={`h-4 w-5/6 ${bar}`} />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <Card className="gap-0 rounded-card border-border bg-card py-0 ring-0">
                <CardHeader className="px-5 pt-5 pb-2 sm:px-6 sm:pt-6">
                  <div className={`h-7 w-28 ${bar}`} />
                </CardHeader>
                <CardContent className="flex flex-wrap gap-x-5 gap-y-3 px-5 pb-5 sm:px-6">
                  {["w-24", "w-20", "w-28", "w-16", "w-24"].map((width, index) => (
                    <div key={index} className={`h-5 ${width} ${bar}`} />
                  ))}
                </CardContent>
              </Card>
            </div>

            <aside aria-hidden="true" className="min-w-0 lg:sticky lg:top-6 lg:self-start">
              <Card className="gap-5 rounded-card border-border bg-card p-5 ring-0 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 shrink-0 rounded-full bg-muted" />
                  <div className="min-w-0 space-y-1.5">
                    <div className={`h-4 w-32 ${bar}`} />
                    <div className={`h-3 w-24 ${bar}`} />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-9 w-full rounded-control bg-primary/30" />
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-9 rounded-control border border-border bg-background" />
                    <div className="h-9 rounded-control border border-border bg-background" />
                  </div>
                </div>
                <div className="border-t border-border pt-4">
                  <div className="mb-3 flex items-start justify-between gap-2">
                    <div className="space-y-2">
                      <div className={`h-6 w-36 ${bar}`} />
                      <div className={`h-3 w-40 ${bar}`} />
                    </div>
                    <div className={`h-3 w-20 ${bar}`} />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {Array.from({ length: 3 }, (_, index) => (
                      <div key={index} className="flex min-h-14 flex-col items-center justify-center gap-1.5 rounded-control border border-border bg-background px-2 py-1.5">
                        <div className={`h-3 w-12 ${bar}`} />
                        <div className={`h-3 w-10 ${bar}`} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 h-9 w-full rounded-control bg-primary/30" />
                  <div className="mt-3 space-y-1">
                    <div className={`h-3 w-full ${bar}`} />
                    <div className={`h-3 w-3/4 ${bar}`} />
                  </div>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </Container>
    </main>
  )
}
