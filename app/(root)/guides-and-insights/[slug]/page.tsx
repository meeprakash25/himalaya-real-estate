import { cn } from "cn"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"

import { Container } from "@/components/layout/container"
import { guidesAndInsightsPosts, getGuideBySlug } from "@/data/guides-and-insights"

interface GuideDetailPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return guidesAndInsightsPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: GuideDetailPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getGuideBySlug(slug)

  if (!post) {
    return { title: "Guide not found | Himalaya Real Estate" }
  }

  return {
    title: `${post.title} | Himalaya Real Estate`,
    description: post.excerpt,
  }
}

async function GuideDetailPageContent({ params }: GuideDetailPageProps) {
  const { slug } = await params
  const post = guidesAndInsightsPosts.find((p) => p.slug === slug)

  if (!post) notFound()

  const latestPosts = guidesAndInsightsPosts.filter((p) => p.id !== post.id)

  return (
    <main id="main-content" className="flex-1 bg-background">
      <section className="bg-background py-14 sm:py-16" aria-labelledby="guide-detail-title">
        <Container>
          <article className="space-y-8">
            <h1 id="guide-detail-title" className="mt-3 font-heading text-title font-semibold text-foreground">
              {post.title}
            </h1>
            <div className="relative mb-8 aspect-41/22 overflow-hidden rounded-card">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>

            <div className="mb-3 flex items-center gap-3">
              <span className="text-article-meta font-bold tracking-[0.06em] text-primary">{post.category}</span>
              <span aria-hidden="true" className="size-[3px] rounded-full bg-border" />
              <span className="text-micro leading-3 text-muted-foreground">{post.readingTime}</span>
            </div>

            <div className="flex flex-wrap gap-5">
              <section className="w-full flex-1">
                <div
                  className="prose prose-lg mt-8 text-muted-foreground dark:prose-invert 
                                prose-a:text-primary prose-a:underline-offset-2 
                                prose-a:hover:text-primary"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </section>

              <section className="shrink sm:hidden lg:block " id="latest-posts" aria-labelledby="latest-posts-title">
                <h2 id="latest-posts-title" className="font-heading text-lg font-semibold text-foreground">
                  Latest posts
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {latestPosts.slice(0, 3).map((latest) => (
                    <article key={ latest.id } className="flex flex-col gap-2">
                      <Link
                        href={`/guides-and-insights/${latest.slug}`}
                        className={cn("text-foreground transition-colors hover:text-primary")}>
                        {latest.title}
                      </Link>
                      <div className="flex items-center gap-3">
                        <span className="text-article-meta font-bold tracking-[0.06em] text-primary">
                          {latest.category}
                        </span>
                        <span className="text-micro leading-3 text-muted-foreground">{latest.readingTime}</span>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </Container>
      </section>
    </main>
  )
}

export default function GuideDetailPage({ params }: GuideDetailPageProps) {
  return (
    <Suspense fallback={<div className="flex-1 bg-background" />}>
      <GuideDetailPageContent params={params} />
    </Suspense>
  )
}
