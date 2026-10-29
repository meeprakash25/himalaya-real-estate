"use client"

import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useMemo, useState } from "react"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { blogPosts } from "@/data/blog-posts"

type BlogPost = (typeof blogPosts)[number]

type SortOption = "latest" | "title" | "shortest"

const sortLabels: Record<SortOption, string> = {
  latest: "Latest",
  title: "Title (A–Z)",
  shortest: "Shortest read"
}

const minutes = (post: BlogPost) => Number.parseInt(post.readingTime, 10)

export function BlogListing ({ posts }: { posts: readonly BlogPost[] }) {
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState<SortOption>("latest")

  const visiblePosts = useMemo(() => {
    const term = query.trim().toLowerCase()
    const matches = posts.filter((post) =>
      !term ||
      [post.title, post.excerpt, post.category].some((text) => text.toLowerCase().includes(term))
    )

    if (sort === "title") return [...matches].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === "shortest") return [...matches].sort((a, b) => minutes(a) - minutes(b))
    return matches
  }, [posts, query, sort])

  return (
    <>
      <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-label leading-[13px] font-bold tracking-[0.08em] text-primary">
            A LITTLE LOCAL KNOWLEDGE
          </p>
          <h1 id="blog-title" className="mt-2.5 font-heading text-title font-semibold text-foreground">
            Guides &amp; insights
          </h1>
          <p className="mt-2.5 text-body text-muted-foreground">
            Practical advice for buying, renting and owning property in Nepal.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <div className="relative w-full sm:w-64">
            <Search aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              aria-label="Search guides"
              placeholder="Search guides"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-10 pl-9 focus:ring-0! focus-visible:outline-0!"
            />
          </div>
          <Select value={sort} onValueChange={(value) => setSort(value as SortOption)}>
            <SelectTrigger aria-label="Sort guides" className="w-full focus-visible:outline-3! data-[size=default]:h-10 sm:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {(Object.keys(sortLabels) as SortOption[]).map((option) => (
                <SelectItem key={option} value={option}>{sortLabels[option]}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </header>

      {visiblePosts.length === 0 ? (
        <p className="mt-7 text-body text-muted-foreground">No guides match your search.</p>
      ) : (
        <div className="mt-7 grid gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {visiblePosts.map((post, index) => (
            <article key={post.id} className="group min-w-0">
              <div className="relative aspect-41/22 overflow-hidden rounded-card">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 411px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading={index === 0 ? "eager" : undefined}
                />
              </div>

              <div className="mt-4.5">
                <div className="flex items-center gap-3">
                  <span className="text-article-meta font-bold tracking-[0.06em] text-primary">{post.category}</span>
                  <span aria-hidden="true" className="size-[3px] rounded-full bg-muted" />
                  <span className="text-micro leading-3 text-muted-foreground">{post.readingTime}</span>
                </div>
                <h2 className="mt-3 font-heading text-article-title font-semibold text-foreground">
                  <Link href={post.href} className="rounded-sm hover:text-primary">{post.title}</Link>
                </h2>
                <p className="mt-3 text-body-sm text-muted-foreground">{post.excerpt}</p>
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
      )}
    </>
  )
}
