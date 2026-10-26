"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navigationLinks } from "@/data/navigation";
import { Container } from "@/components/layout/container";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-10 border-b border-border bg-surface" data-node-id="2:9421">
      <Container className="flex min-h-18 items-center justify-between gap-4 xl:h-22 xl:min-h-0" data-node-id="2:9422">
        <Link
          href="/"
          aria-label="NiceHomes home"
          className="flex shrink-0 items-center gap-2 focus-visible:rounded-control"
        >
          <span className="flex size-9 items-center justify-center rounded-brand bg-primary">
            <Image
              src="/nicehomes-house.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
              priority
            />
          </span>
          <span className="font-heading text-wordmark font-bold tracking-tight text-foreground">
            nicehomes
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden xl:block" data-node-id="2:9426">
          <ul className="flex items-center gap-8">
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="rounded-control text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 items-center gap-6 xl:flex" data-node-id="2:9433">
          <Link
            href="#join"
            className="rounded-control text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            Join
          </Link>
          <Link
            href="#list-property"
            className="inline-flex h-11 items-center gap-3 rounded-control bg-primary px-4.5 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-dark"
            data-node-id="2:9435"
          >
            List your property
            <span aria-hidden="true" className="text-lg leading-none">+</span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-control text-foreground transition-colors hover:bg-secondary xl:hidden"
        >
          <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="flex w-5 flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-full bg-current transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </Container>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="border-t border-border bg-surface xl:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-control px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#join"
            onClick={() => setMenuOpen(false)}
            className="rounded-control px-3 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-primary"
          >
            Join
          </Link>
          <Link
            href="#list-property"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex min-h-11 items-center justify-center gap-3 rounded-control bg-primary px-4 text-sm font-semibold text-on-primary transition-colors hover:bg-primary-dark"
          >
            List your property
            <span aria-hidden="true" className="text-lg leading-none">+</span>
          </Link>
        </Container>
      </nav>
    </header>
  );
}
