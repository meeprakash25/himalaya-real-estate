"use client"

import Image from "next/image"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import type { PropertyImage } from "@/data/properties"

export function Gallery ({ images, title }: { images: PropertyImage[], title: string }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)
  const activeImage = images[activeIndex]

  function selectImage (index: number) {
    setActiveIndex(index)
  }

  return (
    <section aria-label="Property photo gallery" className="space-y-2">
      <div className="relative">
        <div className="grid grid-cols-2 gap-2 sm:aspect-[1.72] sm:grid-cols-[1.65fr_1fr] sm:grid-rows-2 sm:gap-3">
          <div className="relative col-span-2 aspect-[1.5] overflow-hidden rounded-card sm:col-span-1 sm:row-span-2 sm:aspect-auto">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover"
            />
            <div className="absolute top-3 left-3 flex gap-2">
              <Badge className="border-0 bg-surface text-foreground">For Sale</Badge>
              <Badge className="border-0 bg-primary text-primary-foreground">Featured</Badge>
            </div>
            <span className="absolute bottom-3 left-3 rounded-control bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground">
              {activeIndex + 1} / {images.length}
            </span>
          </div>

          {images.slice(1, 3).map((image, index) => {
            const imageIndex = index + 1

            return (
              <div key={image.src} className="relative aspect-[1.5] overflow-hidden rounded-card sm:aspect-auto">
                <button
                  type="button"
                  aria-label={`Show photo ${imageIndex + 1}: ${image.alt}`}
                  aria-pressed={activeIndex === imageIndex}
                  onClick={() => selectImage(imageIndex)}
                  className="absolute inset-0 size-full cursor-pointer focus-visible:z-10"
                >
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, 35vw"
                    className="object-cover transition-transform hover:scale-[1.03]"
                  />
                </button>
              </div>
            )
          })}
        </div>

        {images.length > 3 && (
          <button
            type="button"
            aria-expanded={showMore}
            onClick={() => setShowMore((value) => !value)}
            className="absolute right-3 bottom-3 rounded-control bg-background/90 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            {showMore ? "Show less" : `+${images.length - 3} more`}
          </button>
        )}
      </div>

      {showMore && (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
          {images.slice(3).map((image, index) => {
            const imageIndex = index + 3

            return (
              <button
                key={image.src}
                type="button"
                aria-label={`Show photo ${imageIndex + 1}: ${image.alt}`}
                aria-pressed={activeIndex === imageIndex}
                onClick={() => selectImage(imageIndex)}
                className="relative aspect-4/3 overflow-hidden rounded-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
              >
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 30vw, 50vw" className="object-cover" />
              </button>
            )
          })}
        </div>
      )}
      <p className="sr-only" aria-live="polite">Showing photo {activeIndex + 1} of {images.length} for {title}</p>
    </section>
  )
}
