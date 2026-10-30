import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import ThemeProvider from "@/context/Theme"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Himalaya Real Estate | Find your place",
  description: "Discover verified homes, land, and commercial spaces across Nepal."
}

export default function RootLayout ({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
