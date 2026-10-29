"use client"

import Link from "next/link"
import { useState } from "react"
import { Controller, type FieldErrors, type Resolver, useForm } from "react-hook-form"
import { z } from "zod"

import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton"
import { PasswordInput } from "@/components/auth/PasswordInput"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address."),
  password: z.string().min(1, "Password is required.")
})

type LoginValues = z.infer<typeof loginSchema>;

const loginResolver: Resolver<LoginValues> = async (values) => {
  const result = loginSchema.safeParse(values)

  if (result.success) {
    return { values: result.data, errors: {} }
  }

  const errors: FieldErrors<LoginValues> = {}
  for (const issue of result.error.issues) {
    if (issue.path[0] === "email") {
      errors.email = { type: "validate", message: issue.message }
    }
    if (issue.path[0] === "password") {
      errors.password = { type: "validate", message: issue.message }
    }
  }

  return { values: {}, errors }
}

export function LoginForm () {
  const [remember, setRemember] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState("")
  const { control, handleSubmit } = useForm<LoginValues>({
    resolver: loginResolver,
    defaultValues: { email: "", password: "" }
  })

  async function onSubmit () {
    setSubmitting(true)
    setStatus("")
    await new Promise((resolve) => window.setTimeout(resolve, 600))
    setSubmitting(false)
    setStatus("This sign-in form is a preview; authentication is not connected.")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FieldGroup>
        <Controller
          control={control}
          name="email"
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid || undefined}>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                {...field}
                id="email"
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
              <div className="flex items-center justify-between gap-3">
                <FieldLabel htmlFor="password">Password</FieldLabel>
                <Link href="#forgot-password" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                  Forgot password?
                </Link>
              </div>
              <PasswordInput
                {...field}
                id="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                aria-invalid={fieldState.invalid || undefined}
              />
              <FieldError errors={[fieldState.error]} />
            </Field>
          )}
        />

        <Field orientation="horizontal">
          <Checkbox id="remember" checked={remember} onCheckedChange={(checked) => setRemember(checked === true)} />
          <FieldLabel htmlFor="remember" className="cursor-pointer font-normal text-muted-foreground">Remember me</FieldLabel>
        </Field>

        <Button type="submit" size="lg" disabled={submitting} className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary-dark">
          {submitting ? "Signing in..." : "Log in"}
        </Button>
        <p role="status" aria-live="polite" className="text-center text-sm text-muted-foreground">{status}</p>

        <div className="flex items-center gap-3" aria-label="Or continue with">
          <Separator className="flex-1" />
          <span className="shrink-0 text-xs text-muted-foreground">Or continue with</span>
          <Separator className="flex-1" />
        </div>

        <GoogleAuthButton />

        <p className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-primary underline-offset-4 hover:underline">Sign up</Link>
        </p>
      </FieldGroup>
    </form>
  )
}
