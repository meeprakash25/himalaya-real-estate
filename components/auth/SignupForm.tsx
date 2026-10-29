"use client"

import Link from "next/link"
import { useState } from "react"
import { Controller, type FieldErrors, type Resolver, useForm } from "react-hook-form"
import { z } from "zod"

import { AuthCard } from "@/components/auth/AuthCard"
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton"
import { PasswordInput } from "@/components/auth/PasswordInput"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const signupSchema = z
  .object({
    fullName: z.string().trim().min(1, "Full name is required."),
    email: z.string().email("Enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
    termsAccepted: z.boolean().refine((accepted) => accepted, "You must accept the terms and conditions.")
  })
  .refine((values) => !values.confirmPassword || values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match."
  })

type SignupValues = z.infer<typeof signupSchema>;

const signupResolver: Resolver<SignupValues> = async (values) => {
  const result = signupSchema.safeParse(values)
  if (result.success) return { values: result.data, errors: {} }

  const errors: FieldErrors<SignupValues> = {}
  for (const issue of result.error.issues) {
    const field = issue.path[0]
    if (field === "fullName") errors.fullName = { type: "validate", message: issue.message }
    if (field === "email") errors.email = { type: "validate", message: issue.message }
    if (field === "password") errors.password = { type: "validate", message: issue.message }
    if (field === "confirmPassword") errors.confirmPassword = { type: "validate", message: issue.message }
    if (field === "termsAccepted") errors.termsAccepted = { type: "validate", message: issue.message }
  }

  return { values: {}, errors }
}

export function SignupForm () {
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState("")
  const { control, handleSubmit } = useForm<SignupValues>({
    resolver: signupResolver,
    defaultValues: { fullName: "", email: "", password: "", confirmPassword: "", termsAccepted: false }
  })

  async function onSubmit () {
    setSubmitting(true)
    setStatus("")
    await new Promise((resolve) => window.setTimeout(resolve, 600))
    setSubmitting(false)
    setStatus("This sign-up form is a preview; account creation is not connected.")
  }

  return (
    <AuthCard title="Create your account" description="Find your next place with Himalaya Real Etate.">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FieldGroup>
          <Controller
            control={control}
            name="fullName"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid || undefined}>
                <FieldLabel htmlFor="full-name">Full name</FieldLabel>
                <Input
                  {...field}
                  id="full-name"
                  type="text"
                  autoComplete="name"
                  className="h-11"
                  placeholder="Your full name"
                  aria-invalid={fieldState.invalid || undefined}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            control={control}
            name="email"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid || undefined}>
                <FieldLabel htmlFor="signup-email">Email</FieldLabel>
                <Input
                  {...field}
                  id="signup-email"
                  type="email"
                  autoComplete="email"
                  className="h-11"
                  placeholder="you@example.com"
                  aria-invalid={fieldState.invalid || undefined}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            control={control}
            name="password"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid || undefined}>
                <FieldLabel htmlFor="signup-password">Password</FieldLabel>
                <PasswordInput
                  {...field}
                  id="signup-password"
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  aria-invalid={fieldState.invalid || undefined}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            control={control}
            name="confirmPassword"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid || undefined}>
                <FieldLabel htmlFor="confirm-password">Confirm password</FieldLabel>
                <PasswordInput
                  {...field}
                  id="confirm-password"
                  autoComplete="new-password"
                  placeholder="Re-enter your password"
                  aria-invalid={fieldState.invalid || undefined}
                />
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Controller
            control={control}
            name="termsAccepted"
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid || undefined}>
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms-accepted"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    aria-invalid={fieldState.invalid || undefined}
                  />
                  <FieldLabel htmlFor="terms-accepted" className="cursor-pointer leading-5 font-normal text-muted-foreground">
                    I agree to the <Link href="#terms" className="font-medium text-primary underline-offset-4 hover:underline">terms and conditions</Link>
                  </FieldLabel>
                </div>
                <FieldError errors={[fieldState.error]} />
              </Field>
            )}
          />

          <Button type="submit" size="lg" disabled={submitting} className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary-dark">
            {submitting ? "Creating account..." : "Create account"}
          </Button>
          <p role="status" aria-live="polite" className="text-center text-sm text-muted-foreground">{status}</p>

          <div className="flex items-center gap-3" aria-label="Or continue with">
            <Separator className="flex-1" />
            <span className="shrink-0 text-xs text-muted-foreground">Or continue with</span>
            <Separator className="flex-1" />
          </div>

          <GoogleAuthButton />

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-primary underline-offset-4 hover:underline">Log in</Link>
          </p>
        </FieldGroup>
      </form>
    </AuthCard>
  )
}
