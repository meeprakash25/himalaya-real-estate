import type { Metadata } from "next"

import { BlogListing } from "@/components/blog/BlogListing"
import { Container } from "@/components/layout/container"
import { blogPosts } from "@/data/blog-posts"

export const metadata: Metadata = {
  title: "Blog & Insights | Himalaya Real Etate"
}

export default function BlogPage () {
  return (
    <main id="main-content" className="flex-1">
      <section className="bg-background py-14 sm:py-16" aria-labelledby="blog-title">
        <Container>
          <BlogListing posts={blogPosts} />
        </Container>
      </section>
    </main>
  )
}
