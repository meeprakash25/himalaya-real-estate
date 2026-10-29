"use client"

import { ArrowRight } from "lucide-react"
import { useRouter } from "next/navigation"
import { Controller, useForm, type ResolverResult } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { SearchFormContent } from "@/data/about"
import { propertiesHref, type PropertySearchFilters } from "@/data/property-search"

const buildSearchSchema = z.object({
  transaction: z.string(),
  propertyType: z.string(),
  where: z.string(),
  budget: z.string().regex(/^\d*$/, "Enter the budget as a number"),
  bedrooms: z.string()
})

type BuildSearchValues = z.infer<typeof buildSearchSchema>

async function resolver (values: BuildSearchValues): Promise<ResolverResult<BuildSearchValues>> {
  const result = buildSearchSchema.safeParse(values)

  if (result.success) {
    return { values: result.data, errors: {} }
  }

  return {
    values: {},
    errors: { budget: { type: "invalid", message: result.error.issues[0]?.message } }
  }
}

const crore = 10_000_000

function budgetFilter (npr: string) {
  if (!npr) return undefined

  const value = Number(npr) / crore
  if (value < 1) return "under-1"
  if (value <= 3) return "1-3"
  if (value <= 5) return "3-5"
  return "above-5"
}

export function BuildSearchCard ({ content }: { content: SearchFormContent }) {
  const router = useRouter()
  const { control, register, handleSubmit, formState: { errors } } = useForm<BuildSearchValues>({
    resolver,
    defaultValues: content.defaults
  })

  function withoutAny (value: string) {
    return content.anyOptions.includes(value) ? undefined : value
  }

  function submitSearch (values: BuildSearchValues) {
    const filters: PropertySearchFilters = {
      transaction: content.transactionFilters[values.transaction] ?? "buy",
      query: values.where.trim() || undefined,
      type: withoutAny(values.propertyType),
      budget: budgetFilter(values.budget),
      bedrooms: withoutAny(values.bedrooms)
    }

    router.push(propertiesHref(filters))
  }

  return (
    <Card className="gap-6 rounded-card border border-border p-6 ring-0 sm:p-8" aria-labelledby="build-search-title">
      <div className="flex flex-col gap-1.5">
        <h3 id="build-search-title" className="font-heading text-xl leading-snug font-semibold text-foreground">
          {content.title}
        </h3>
        <p className="text-sm text-muted-foreground">{content.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit(submitSearch)} noValidate>
        <FieldGroup>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="search-transaction">I&apos;m looking to</FieldLabel>
              <Controller
                control={control}
                name="transaction"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="search-transaction" className="w-full data-[size=default]:h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {content.transactionOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="search-property-type">Property type</FieldLabel>
              <Controller
                control={control}
                name="propertyType"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="search-property-type" className="w-full data-[size=default]:h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {content.propertyTypeOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
          </div>

          <Field>
            <FieldLabel htmlFor="search-where">Where?</FieldLabel>
            <Input
              id="search-where"
              className="h-10"
              placeholder={content.wherePlaceholder}
              {...register("where")}
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field data-invalid={!!errors.budget || undefined}>
              <FieldLabel htmlFor="search-budget">Maximum budget (NPR)</FieldLabel>
              <Input
                id="search-budget"
                inputMode="numeric"
                className="h-10"
                placeholder={content.budgetPlaceholder}
                aria-invalid={!!errors.budget}
                aria-describedby={errors.budget ? "search-budget-error" : undefined}
                {...register("budget")}
              />
              <FieldError id="search-budget-error" errors={[errors.budget]} />
            </Field>

            <Field>
              <FieldLabel htmlFor="search-bedrooms">Bedrooms</FieldLabel>
              <Controller
                control={control}
                name="bedrooms"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="search-bedrooms" className="w-full data-[size=default]:h-10">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {content.bedroomOptions.map((option) => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
          </div>

          <Button type="submit" size="lg" className="h-11 w-full gap-2 rounded-control">
            {content.submitLabel}
            <ArrowRight aria-hidden="true" className="size-4" />
          </Button>
        </FieldGroup>
      </form>
    </Card>
  )
}
