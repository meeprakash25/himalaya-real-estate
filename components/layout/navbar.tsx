"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Container } from "@/components/layout/container"
import { Button, buttonVariants } from "@/components/ui/button"
import { navigationLinks } from "@/data/navigation"

import { ModeToggle } from "../navbar/ModeToggle"

export function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)

  function selectHeroTransaction (label: string) {
    if (label === "Buy" || label === "Sell") {
      window.dispatchEvent(new CustomEvent<"buy" | "rent">("hero-transaction-change", { detail: "buy" }))
    } else if (label === "Rent") {
      window.dispatchEvent(new CustomEvent<"buy" | "rent">("hero-transaction-change", { detail: "rent" }))
    }
  }

  return (
    <header className="relative z-10 border-b border-border bg-surface">
      <Container className="flex min-h-18 items-center justify-between gap-4 xl:h-22 xl:min-h-0">
        <Link
          href="/"
          aria-label="Himalaya Real Etate home"
          className="flex shrink-0 items-center gap-2 focus-visible:rounded-control">
          <Image
            src="/hre.png"
            alt=""
            width={600}
            height={140}
            aria-hidden="true"
            className="h-auto w-[190px] dark:brightness-0 dark:invert"
            priority
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden xl:block">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => selectHeroTransaction(link.label)}
                  className="rounded-control text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden shrink-0 items-center gap-6 xl:flex">
            <Link
              href="/login"
              className="rounded-control text-sm font-semibold text-foreground transition-colors hover:text-primary">
              Join
            </Link>
            <Link
              href="/signup"
              className={buttonVariants({
                variant: "default",
                size: "lg",
                className:
                  "h-11 gap-3 rounded-control bg-primary px-4.5 text-sm font-semibold text-on-primary hover:bg-primary-dark",
              })}>
              List your property
              <span aria-hidden="true" className="text-lg leading-none">
                +
              </span>
            </Link>
          </div>
          <ModeToggle />
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="size-11 rounded-control text-foreground hover:bg-secondary xl:hidden">
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`h-0.5 w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
              <span
                className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </Button>
        </div>
      </Container>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="border-t border-border bg-surface xl:hidden">
        <Container className="flex flex-col gap-1 py-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => {
                selectHeroTransaction(link.label)
                setMenuOpen(false)
              }}
              className="rounded-control p-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary">
              {link.label}
            </Link>
          ))}
          <Link
            href="/login"
            onClick={() => setMenuOpen(false)}
            className="rounded-control p-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary">
            Join
          </Link>
          <Link
            href="/signup"
            onClick={() => setMenuOpen(false)}
            className={buttonVariants({
              variant: "default",
              size: "lg",
              className:
                "mt-2 min-h-11 gap-3 rounded-control bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-dark",
            })}>
            List your property
            <span aria-hidden="true" className="text-lg leading-none">
              +
            </span>
          </Link>
        </Container>
      </nav>
    </header>
  )
}
