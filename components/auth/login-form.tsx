"use client"

import Link from "next/link"
import { z } from "zod"
import { useState } from "react"
import { type FieldErrors, type Resolver, useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { GoogleAuthButton } from "@/components/auth/google-auth-button"
import { PasswordInput } from "@/components/auth/password-input"

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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginValues>({
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="h-11"
          {...register("email")}
        />
        {errors.email && <p id="email-error" className="text-sm text-destructive">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <Label htmlFor="password">Password</Label>
          <Link href="#forgot-password" className="text-sm font-medium text-primary underline-offset-4 hover:underline">
            Forgot password?
          </Link>
        </div>
        <PasswordInput
          id="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          aria-invalid={Boolean(errors.password)}
          aria-describedby={errors.password ? "password-error" : undefined}
          {...register("password")}
        />
        {errors.password && <p id="password-error" className="text-sm text-destructive">{errors.password.message}</p>}
      </div>

      <div className="flex items-center gap-2">
        <Checkbox id="remember" checked={remember} onCheckedChange={(checked) => setRemember(checked === true)} />
        <Label htmlFor="remember" className="cursor-pointer text-sm font-normal text-muted">Remember me</Label>
      </div>

      <Button type="submit" size="lg" disabled={submitting} className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary-dark">
        {submitting ? "Signing in..." : "Log in"}
      </Button>
      <p role="status" aria-live="polite" className="text-center text-sm text-muted">{status}</p>

      <div className="flex items-center gap-3" aria-label="Or continue with">
        <Separator className="flex-1" />
        <span className="shrink-0 text-xs text-muted">Or continue with</span>
        <Separator className="flex-1" />
      </div>

      <GoogleAuthButton />

      <p className="text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="font-semibold text-primary underline-offset-4 hover:underline">Sign up</Link>
      </p>
    </form>
  )
}
