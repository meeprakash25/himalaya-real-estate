import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog & Insights | Himalaya Real Etate",
};

export default function BlogPage() {
  return (
    <main id="main-content" className="flex-1">
      <section className="bg-background py-14 sm:py-16" aria-labelledby="blog-title">
        <Container>
          <header>
            <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary">
              A LITTLE LOCAL KNOWLEDGE
            </p>
            <h1 id="blog-title" className="mt-2.5 font-heading text-title font-semibold text-foreground">
              Guides &amp; insights
            </h1>
            <p className="mt-2.5 text-body text-muted">
              Practical advice for buying, renting and owning property in Nepal.
            </p>
          </header>

          <div className="mt-7 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="group min-w-0">
                <div className="relative aspect-[41/22] overflow-hidden rounded-card">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 411px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-4.5">
                  <div className="flex items-center gap-3">
                    <span className="text-article-meta font-bold tracking-[0.06em] text-primary">{post.category}</span>
                    <span aria-hidden="true" className="size-[3px] rounded-full bg-muted" />
                    <span className="text-micro leading-3 text-muted">{post.readingTime}</span>
                  </div>
                  <h2 className="mt-3 font-heading text-article-title font-semibold text-foreground">
                    <Link href={post.href} className="rounded-sm hover:text-primary">{post.title}</Link>
                  </h2>
                  <p className="mt-3 text-body-sm text-muted">{post.excerpt}</p>
                  <Link href={post.href} className="mt-3 inline-flex items-center gap-2 text-tool-action font-semibold text-primary hover:text-primary-dark">
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
    </main>
  );
}
