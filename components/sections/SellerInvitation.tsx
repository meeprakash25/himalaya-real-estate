import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/container";
import { sellerInvitation } from "@/data/seller-invitation";

export function SellerInvitation() {
  return (
    <section
      id="sell"
      className="bg-background pt-7 sm:pt-8 pb-14 sm:pb-16"
      aria-labelledby="seller-invitation-title"
      data-node-id="2:9581">
      <Container>
        <div
          className="grid overflow-hidden rounded-panel bg-primary-dark lg:grid-cols-[minmax(0,820fr)_minmax(0,460fr)]"
          data-node-id="2:9582">
          <div
            className="flex flex-col items-start justify-center px-6 py-10 sm:px-8 lg:px-12 lg:py-12"
            data-node-id="2:9583">
            <p className="text-micro leading-3 font-semibold tracking-[0.08em] text-primary-soft" data-node-id="2:9584">
              {sellerInvitation.eyebrow}
            </p>
            <h2
              id="seller-invitation-title"
              className="mt-5 max-w-3xl font-heading text-3xl leading-tight font-semibold text-on-primary sm:text-promo-title"
              data-node-id="2:9585">
              {sellerInvitation.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-footer-muted" data-node-id="2:9586">
              {sellerInvitation.description}
            </p>
            <Link
              href="#list-property"
              className="mt-5 inline-flex min-h-[50px] items-center gap-3 rounded-control bg-surface px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft"
              data-node-id="2:9587">
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

          <div className="relative aspect-[4/3] min-h-64 lg:aspect-auto lg:min-h-[342px]" data-node-id="2:9590">
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
