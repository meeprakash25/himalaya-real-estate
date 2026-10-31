import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/layout/container"
import { Separator } from "@/components/ui/separator"
import {
  footerDescription,
  footerLinkGroups,
  footerCopyright,
  footerLegalLinks,
  footerOrigin,
  footerSocialLinks,
} from "@/data/site-footer"

function SocialIcon ({ name }: { name: (typeof footerSocialLinks)[number]["icon"] }) {
  if (name === "facebook") {
    return <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="currentColor"><path d="M9.1 14V8.7h1.8l.3-2.1H9.1V5.2c0-.6.2-1 1.1-1h1.1V2.3c-.2 0-.9-.1-1.7-.1-1.7 0-2.9 1-2.9 2.9v1.6H4.8v2.1h1.9V14h2.4Z" /></svg>
  }

  if (name === "instagram") {
    return <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="2.5" y="2.5" width="11" height="11" rx="3" /><circle cx="8" cy="8" r="2.5" /><circle cx="11.6" cy="4.6" r=".6" fill="currentColor" stroke="none" /></svg>
  }

  return <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="currentColor"><path d="M3.3 5.9H1.1V15h2.2V5.9ZM2.2 1a1.3 1.3 0 1 0 0 2.6 1.3 1.3 0 0 0 0-2.6ZM15 9.8c0-2.7-1.4-4-3.3-4a2.9 2.9 0 0 0-2.6 1.4V5.9H6.9V15h2.2v-4.5c0-1.2.2-2.4 1.8-2.4s1.7 1.4 1.7 2.5V15H15V9.8Z" /></svg>
}

export function Footer () {
  return (
    <footer id="footer" className="bg-footer-background text-footer-foreground">
      <Container className="pt-12 pb-7">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="font-heading text-title font-medium text-footer-foreground">Home is closer than you think.</h2>
            <p className="mt-2.5 text-sm leading-[21px] text-footer-muted">Let’s find a place for your next chapter.</p>
          </div>
          <Link
            href="/properties"
            className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-3 self-start rounded-control bg-surface px-5 text-sm font-semibold text-primary transition-colors hover:bg-primary-soft lg:self-auto"
          >
            Find your home
            <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 15 15 5M6 5h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        <Separator className="mt-10 bg-footer-divider" />

        <div className="mt-10 grid gap-10 sm:grid-cols-2 xl:grid-cols-[280px_minmax(0,1fr)] xl:gap-12">
          <div className="max-w-70">
            <Link href="/" aria-label="Himalaya Real Etate home" className="inline-flex items-center gap-2 rounded-control focus-visible:outline-offset-4">
              <Image src="/hre-logo-light.png" alt="" width={384} height={200} aria-hidden="true" className="h-auto w-[130px]" priority />
            </Link>
            <p className="mt-5 text-body-sm leading-[23px] text-footer-muted">{footerDescription}</p>
            <nav aria-label="Social media" className="mt-5">
              <ul className="flex items-center gap-3">
                {footerSocialLinks.map((social) => (
                  <li key={social.icon}>
                    <a
                      href="#"
                      aria-label={social.label}
                      className="inline-flex size-[34px] items-center justify-center rounded-full border border-footer-divider text-footer-muted transition-colors hover:bg-surface/10 hover:text-footer-foreground"
                    >
                      <SocialIcon name={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav aria-label="Footer navigation" className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-7">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs leading-[15px] font-semibold text-footer-foreground">{group.title}</h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-footer-link text-footer-muted transition-colors hover:text-footer-foreground">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <Separator className="mt-10 bg-footer-divider" />
        <div className="mt-10 flex flex-col gap-4 text-micro text-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footerCopyright}</p>
          <nav aria-label="Legal links" className="flex items-center gap-6">
            {footerLegalLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-footer-foreground">{link.label}</Link>
            ))}
          </nav>
          <p>{footerOrigin}</p>
        </div>
      </Container>
    </footer>
  )
}
