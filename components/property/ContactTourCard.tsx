"use client"

import { MessageCircle, Phone } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import type { Property } from "@/data/properties"

export function ContactTourCard ({ property }: { property: Property }) {
  const [selectedDate, setSelectedDate] = useState(property.detail?.tourDates[0]?.date ?? "")
  const [contactMethod, setContactMethod] = useState<"call" | "whatsapp" | "request" | null>(null)
  const [tourRequested, setTourRequested] = useState(false)
  const agent = property.detail?.agent
  const tourDates = property.detail?.tourDates ?? []

  return (
    <Card className="gap-5 rounded-card border-border bg-card p-5 ring-0 sm:p-6">
      {agent && (
        <div className="flex items-center gap-3">
          <div aria-hidden="true" className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-foreground">
            {agent.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-foreground">{agent.name}</p>
            <p className="text-xs text-muted-foreground">{agent.role}</p>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <Button
          type="button"
          className="w-full rounded-control bg-primary text-primary-foreground hover:bg-primary/90"
          aria-pressed={contactMethod === "request"}
          onClick={() => setContactMethod(contactMethod === "request" ? null : "request")}
        >
          {contactMethod === "request" ? "Call request noted" : "Request a call"}
        </Button>
        <div className="grid grid-cols-2 gap-2">
          <Button
            type="button"
            variant="outline"
            aria-pressed={contactMethod === "call"}
            onClick={() => setContactMethod(contactMethod === "call" ? null : "call")}
            className="rounded-control border-border text-foreground"
          >
            <Phone aria-hidden="true" />
            Call now
          </Button>
          <Button
            type="button"
            variant="outline"
            aria-pressed={contactMethod === "whatsapp"}
            onClick={() => setContactMethod(contactMethod === "whatsapp" ? null : "whatsapp")}
            className="rounded-control border-border text-foreground"
          >
            <MessageCircle aria-hidden="true" />
            WhatsApp
          </Button>
        </div>
        {contactMethod && (
          <p className="text-xs text-muted-foreground" role="status">
            {contactMethod === "request" ? "Call request noted." : contactMethod === "call" ? "Call option selected." : "WhatsApp option selected."}
          </p>
        )}
      </div>

      <div className="border-t border-border pt-4">
        <div className="mb-3 flex items-start justify-between gap-2">
          <div>
            <h2 className="font-heading text-base font-semibold text-foreground">Schedule a tour</h2>
            <p className="mt-1 text-xs text-muted-foreground">Choose your preferred day</p>
          </div>
          <Link href="#tour-calendar" className="shrink-0 rounded-control text-xs font-medium text-primary hover:underline focus-visible:underline">View calendar</Link>
        </div>
        <div id="tour-calendar" className="grid grid-cols-3 gap-2">
          {tourDates.map((option) => (
            <button
              key={option.date}
              type="button"
              aria-pressed={selectedDate === option.date}
              onClick={() => {
                setSelectedDate(option.date)
                setTourRequested(false)
              }}
              className={`flex min-h-14 flex-col items-center justify-center rounded-control border px-2 py-1.5 text-xs transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${selectedDate === option.date ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:bg-muted"}`}
            >
              <span className="font-semibold">{option.date}</span>
              <span className={selectedDate === option.date ? "text-primary-foreground/80" : "text-muted-foreground"}>{option.label}</span>
            </button>
          ))}
        </div>
        <Button
          type="button"
          className="mt-3 w-full rounded-control bg-primary text-primary-foreground hover:bg-primary/90"
          disabled={!selectedDate}
          onClick={() => setTourRequested(true)}
        >
          {tourRequested ? "Tour requested" : "Book a Tour"}
        </Button>
        <p className="mt-3 text-xs leading-5 text-muted-foreground" role="status">
          {tourRequested ? `Tour request noted for ${selectedDate}.` : "By proceeding, you agree to be contacted about this property."}
        </p>
      </div>
    </Card>
  )
}
