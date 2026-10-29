import type { LucideIcon } from "lucide-react"
import { Mail, MapPin, Phone } from "lucide-react"

export type ContactDetail = {
  icon: LucideIcon
  title: string
  lines: string[]
}

export const contactHeader = {
  title: "Contact Us",
  description: "Have a question about a listing or our services? Send us a message and our team will get back to you within one business day."
}

export const contactFormContent = {
  submitLabel: "Send Message",
  successMessage: "Thanks for reaching out. A member of our team will contact you shortly.",
  fields: {
    fullName: { label: "Full name", placeholder: "Your full name" },
    phone: { label: "Phone number", placeholder: "+977 98XXXXXXXX" },
    email: { label: "Email address", placeholder: "you@example.com" },
    message: { label: "Message", placeholder: "How can we help you?" }
  }
}

export const contactDetails: ContactDetail[] = [
  { icon: Phone, title: "Phone", lines: ["+977 9706591493"] },
  { icon: Mail, title: "Email", lines: ["himalayarealestate@gmail.com"] },
  { icon: MapPin, title: "Office", lines: ["Kupondole, Lalitpur, Nepal"] }
]
