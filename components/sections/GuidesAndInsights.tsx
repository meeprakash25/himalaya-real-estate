import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { guides } from "@/data/guides-footer";

export function GuidesAndInsights() {
  return (
    <section id="guides" className="bg-background py-14 sm:py-16" aria-labelledby="guides-title" data-node-id="2:9754">
      <Container>
        <header className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-node-id="2:9755">
          <div>
            <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary" data-node-id="2:9757">
              A LITTLE LOCAL KNOWLEDGE
            </p>
            <h2 id="guides-title" className="mt-2.5 font-heading text-title font-semibold text-foreground" data-node-id="2:9758">
              Make your next move an informed one.
            </h2>
          </div>
          <Link
            href="#guides"
            className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 self-start rounded-control border border-border px-5 text-sm font-semibold text-primary transition-colors hover:border-primary sm:self-auto"
            data-node-id="2:9759"
          >
            All guides &amp; insights
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 15 15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </header>

        <div className="mt-7 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6" data-node-id="2:9762">
          {guides.map((guide) => (
            <article key={guide.id} className="group min-w-0" data-node-id={guide.nodeId}>
              <div className="relative aspect-[41/22] overflow-hidden rounded-card" data-node-id={guide.imageNodeId}>
                <Image
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 411px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4.5">
                <div className="flex items-center gap-3">
                  <span className="text-article-meta font-bold tracking-[0.06em] text-primary">{guide.category}</span>
                  <span aria-hidden="true" className="size-[3px] rounded-full bg-muted" />
                  <span className="text-micro leading-3 text-muted">{guide.readingTime}</span>
                </div>
                <h3 className="mt-3 font-heading text-article-title font-semibold text-foreground">
                  <Link href={guide.href} className="rounded-sm hover:text-primary">{guide.title}</Link>
                </h3>
                <p className="mt-3 text-body-sm text-muted">{guide.excerpt}</p>
                <Link href={guide.href} className="mt-3 inline-flex items-center gap-2 text-tool-action font-semibold text-primary hover:text-primary-dark">
                  Read guide
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 8h10m-4-4 4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
