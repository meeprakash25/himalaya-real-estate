import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { sellerInvitation } from "@/data/seller-invitation"

export function SellerInvitation () {
  return (
    <section
      id="sell"
      className="bg-background pt-7 pb-14 sm:pt-8 sm:pb-16"
      aria-labelledby="seller-invitation-title">
      <Container>
        <div
          className="grid overflow-hidden rounded-panel bg-footer-background lg:grid-cols-[minmax(0,820fr)_minmax(0,460fr)]">
          <div
            className="flex flex-col items-start justify-center px-6 py-10 sm:px-8 lg:p-12">
            <p className="text-micro leading-3 font-semibold tracking-[0.08em] text-footer-muted">
              {sellerInvitation.eyebrow}
            </p>
            <h2
              id="seller-invitation-title"
              className="mt-5 max-w-3xl font-heading text-3xl leading-tight font-semibold text-footer-foreground sm:text-promo-title">
              {sellerInvitation.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-footer-muted">
              {sellerInvitation.description}
            </p>
            <Link
              href="#list-property"
              className="mt-5 inline-flex min-h-[50px] items-center gap-3 rounded-control bg-surface px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft">
              {sellerInvitation.action}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="size-[18px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5">
                <path d="M5 15 15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="relative aspect-4/3 min-h-64 lg:aspect-auto lg:min-h-[342px]">
            <Image
              src="/images/seller-invitation.jpg"
              alt={sellerInvitation.imageAlt}
              fill
              sizes="(min-width: 1280px) 460px, (min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}
