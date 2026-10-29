"use client"

import { Send } from "lucide-react"
import { useState } from "react"
import { useForm, type ResolverResult } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { contactFormContent } from "@/data/contact"

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  phone: z.string().regex(/^\+?[\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.email("Enter a valid email address"),
  message: z.string().trim().min(10, "Message should be at least 10 characters")
})

type ContactValues = z.infer<typeof contactSchema>

async function resolver (values: ContactValues): Promise<ResolverResult<ContactValues>> {
  const result = contactSchema.safeParse(values)

  if (result.success) {
    return { values: result.data, errors: {} }
  }

  const errors: Partial<Record<keyof ContactValues, { type: string; message: string }>> = {}
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof ContactValues | undefined
    if (key && !errors[key]) errors[key] = { type: issue.code, message: issue.message }
  }

  return { values: {}, errors }
}

export function ContactForm () {
  const [isSent, setIsSent] = useState(false)
  const { fields, submitLabel, successMessage } = contactFormContent
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactValues>({
    resolver,
    defaultValues: { fullName: "", phone: "", email: "", message: "" }
  })

  function onValid () {
    setIsSent(true)
    reset()
  }

  return (
    <Card className="p-6 sm:p-8">
      <form noValidate onSubmit={handleSubmit(onValid)}>
        <FieldGroup>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field data-invalid={!!errors.fullName || undefined}>
              <FieldLabel htmlFor="contact-full-name">{fields.fullName.label}</FieldLabel>
              <Input
                id="contact-full-name"
                placeholder={fields.fullName.placeholder}
                autoComplete="name"
                aria-invalid={!!errors.fullName || undefined}
                {...register("fullName")}
              />
              <FieldError errors={[errors.fullName]} />
            </Field>

            <Field data-invalid={!!errors.phone || undefined}>
              <FieldLabel htmlFor="contact-phone">{fields.phone.label}</FieldLabel>
              <Input
                id="contact-phone"
                type="tel"
                placeholder={fields.phone.placeholder}
                autoComplete="tel"
                aria-invalid={!!errors.phone || undefined}
                {...register("phone")}
              />
              <FieldError errors={[errors.phone]} />
            </Field>
          </div>

          <Field data-invalid={!!errors.email || undefined}>
            <FieldLabel htmlFor="contact-email">{fields.email.label}</FieldLabel>
            <Input
              id="contact-email"
              type="email"
              placeholder={fields.email.placeholder}
              autoComplete="email"
              aria-invalid={!!errors.email || undefined}
              {...register("email")}
            />
            <FieldError errors={[errors.email]} />
          </Field>

          <Field data-invalid={!!errors.message || undefined}>
            <FieldLabel htmlFor="contact-message">{fields.message.label}</FieldLabel>
            <Textarea
              id="contact-message"
              rows={5}
              placeholder={fields.message.placeholder}
              aria-invalid={!!errors.message || undefined}
              {...register("message")}
            />
            <FieldError errors={[errors.message]} />
          </Field>

          <Button type="submit" size="lg" className="h-11 w-full gap-2 rounded-control">
            {submitLabel}
            <Send aria-hidden="true" className="size-4" />
          </Button>

          {isSent && (
            <p id="contact-success" role="status" className="text-sm text-primary">
              {successMessage}
            </p>
          )}
        </FieldGroup>
      </form>
    </Card>
  )
}
