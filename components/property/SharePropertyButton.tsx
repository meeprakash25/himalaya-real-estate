"use client"

import { Share2 } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

export function SharePropertyButton ({ title }: { title: string }) {
  const [copied, setCopied] = useState(false)

  async function shareProperty () {
    const url = window.location.href

    try {
      if (navigator.share) {
        await navigator.share({ title, url })
        return
      }

      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Share property"
      onClick={shareProperty}
      className="size-9 rounded-full bg-card text-foreground hover:bg-muted"
    >
      <Share2 aria-hidden="true" />
      <span className="sr-only" role="status">{copied ? "Property link copied" : ""}</span>
    </Button>
  )
}
