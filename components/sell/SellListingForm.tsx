"use client"

import { useState } from "react"
import { Controller, useForm, type ResolverResult } from "react-hook-form"
import { z } from "zod"

import { Container } from "@/components/layout/container"
import { SectionEyebrow } from "@/components/shared/SectionEyebrow"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { sellForm } from "@/data/sell"

const sellSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name"),
  phone: z.string().regex(/^\+?[\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.email("Enter a valid email address"),
  propertyType: z.string().min(1, "Choose a property type"),
  details: z.string().trim().min(10, "Share at least 10 characters about the property")
})

type SellValues = z.infer<typeof sellSchema>

async function resolver (values: SellValues): Promise<ResolverResult<SellValues>> {
  const result = sellSchema.safeParse(values)

  if (result.success) {
    return { values: result.data, errors: {} }
  }

  const errors: Partial<Record<keyof SellValues, { type: string; message: string }>> = {}
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof SellValues | undefined
    if (key && !errors[key]) errors[key] = { type: issue.code, message: issue.message }
  }

  return { values: {}, errors }
}

export function SellListingForm () {
  const [isSent, setIsSent] = useState(false)
  const { fields, propertyTypes, submitLabel, note, successMessage } = sellForm
  const { control, handleSubmit, reset } = useForm<SellValues>({
    resolver,
    defaultValues: { fullName: "", phone: "", email: "", propertyType: "", details: "" }
  })

  function onValid () {
    setIsSent(true)
    reset()
  }

  return (
    <section id="list-property" className="bg-background py-16 sm:py-20" aria-labelledby="sell-form-title">
      <Container className="flex flex-col gap-12">
        <header className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionEyebrow>{sellForm.eyebrow}</SectionEyebrow>
          <h2 id="sell-form-title" className="mt-5 font-heading text-3xl leading-tight font-semibold text-foreground sm:text-title">
            {sellForm.title}
          </h2>
          <p className="mt-4 text-intro text-muted-foreground">{sellForm.description}</p>
        </header>

        <div className="mx-auto w-full max-w-3xl">
          <Card className="gap-6 rounded-card border border-border p-6 ring-0 sm:p-8">
            {isSent ? (
              <p role="status" className="text-sm font-medium text-primary">{successMessage}</p>
            ) : (
              <form onSubmit={handleSubmit(onValid)} noValidate>
                <FieldGroup>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Controller
                      control={control}
                      name="fullName"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid || undefined}>
                          <FieldLabel htmlFor="sell-full-name">{fields.fullName.label}</FieldLabel>
                          <Input
                            {...field}
                            id="sell-full-name"
                            className="h-10"
                            placeholder={fields.fullName.placeholder}
                            autoComplete="name"
                            aria-invalid={fieldState.invalid || undefined}
                          />
                          <FieldError errors={[fieldState.error]} />
                        </Field>
                      )}
                    />

                    <Controller
                      control={control}
                      name="phone"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid || undefined}>
                          <FieldLabel htmlFor="sell-phone">{fields.phone.label}</FieldLabel>
                          <Input
                            {...field}
                            id="sell-phone"
                            type="tel"
                            className="h-10"
                            placeholder={fields.phone.placeholder}
                            autoComplete="tel"
                            aria-invalid={fieldState.invalid || undefined}
                          />
                          <FieldError errors={[fieldState.error]} />
                        </Field>
                      )}
                    />
                  </div>

                  <Controller
                    control={control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid || undefined}>
                        <FieldLabel htmlFor="sell-email">{fields.email.label}</FieldLabel>
                        <Input
                          {...field}
                          id="sell-email"
                          type="email"
                          className="h-10"
                          placeholder={fields.email.placeholder}
                          autoComplete="email"
                          aria-invalid={fieldState.invalid || undefined}
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />

                  <Controller
                    control={control}
                    name="propertyType"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid || undefined}>
                        <FieldLabel htmlFor="sell-property-type">{fields.propertyType.label}</FieldLabel>
                        <Select value={field.value} onValueChange={field.onChange}>
                          <SelectTrigger
                            id="sell-property-type"
                            className="w-full data-[size=default]:h-10"
                            aria-invalid={fieldState.invalid || undefined}>
                            <SelectValue placeholder={fields.propertyType.placeholder} />
                          </SelectTrigger>
                          <SelectContent>
                            {propertyTypes.map((option) => (
                              <SelectItem key={option} value={option}>{option}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />

                  <Controller
                    control={control}
                    name="details"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid || undefined}>
                        <FieldLabel htmlFor="sell-details">{fields.details.label}</FieldLabel>
                        <Textarea
                          {...field}
                          id="sell-details"
                          rows={4}
                          placeholder={fields.details.placeholder}
                          aria-invalid={fieldState.invalid || undefined}
                        />
                        <FieldError errors={[fieldState.error]} />
                      </Field>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="h-11 w-full rounded-control bg-destructive text-surface hover:bg-destructive/90">
                    {submitLabel}
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">{note}</p>
                </FieldGroup>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  )
}
