import { Card } from "@/components/ui/card"
import { contactDetails } from "@/data/contact"

export function ContactDetails() {
  return (
    <ul className="grid gap-5 md:grid-cols-3">
      {contactDetails.map(({ icon: Icon, title, lines }) => (
        <li key={title}>
          <Card className="h-full items-center gap-3 p-6 text-center">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary-soft text-primary">
              <Icon aria-hidden="true" className="size-5" />
            </span>
            <h2 className="mt-4 font-heading text-base font-semibold text-foreground">{title}</h2>
            <div className="mt-2 flex flex-col gap-0.5 text-sm text-muted-foreground">
              {lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </Card>
        </li>
      ))}
    </ul>
  )
}
