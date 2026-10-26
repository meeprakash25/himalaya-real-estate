"use client";

import Link from "next/link";
import { useState } from "react";
import { z } from "zod";
import { type FieldErrors, type Resolver, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { AuthCard } from "@/components/auth/auth-card";
import { GoogleAuthButton } from "@/components/auth/google-auth-button";
import { PasswordInput } from "@/components/auth/password-input";

const signupSchema = z
  .object({
    fullName: z.string().trim().min(1, "Full name is required."),
    email: z.string().email("Enter a valid email address."),
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
    termsAccepted: z.boolean().refine((accepted) => accepted, "You must accept the terms and conditions."),
  })
  .refine((values) => !values.confirmPassword || values.password === values.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

type SignupValues = z.infer<typeof signupSchema>;

const signupResolver: Resolver<SignupValues> = async (values) => {
  const result = signupSchema.safeParse(values);
  if (result.success) return { values: result.data, errors: {} };

  const errors: FieldErrors<SignupValues> = {};
  for (const issue of result.error.issues) {
    const field = issue.path[0];
    if (field === "fullName") errors.fullName = { type: "validate", message: issue.message };
    if (field === "email") errors.email = { type: "validate", message: issue.message };
    if (field === "password") errors.password = { type: "validate", message: issue.message };
    if (field === "confirmPassword") errors.confirmPassword = { type: "validate", message: issue.message };
    if (field === "termsAccepted") errors.termsAccepted = { type: "validate", message: issue.message };
  }

  return { values: {}, errors };
};

export function SignupForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupValues>({
    resolver: signupResolver,
    defaultValues: { fullName: "", email: "", password: "", confirmPassword: "", termsAccepted: false },
  });
  async function onSubmit() {
    setSubmitting(true);
    setStatus("");
    await new Promise((resolve) => window.setTimeout(resolve, 600));
    setSubmitting(false);
    setStatus("This sign-up form is a preview; account creation is not connected.");
  }

  return (
    <AuthCard title="Create your account" description="Find your next place with Himalaya Real Etate.">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="full-name">Full name</Label>
          <Input
            id="full-name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "full-name-error" : undefined}
            className="h-11"
            {...register("fullName")}
          />
          {errors.fullName && <p id="full-name-error" className="text-sm text-destructive">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="signup-email">Email</Label>
          <Input
            id="signup-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "signup-email-error" : undefined}
            className="h-11"
            {...register("email")}
          />
          {errors.email && <p id="signup-email-error" className="text-sm text-destructive">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="signup-password">Password</Label>
          <PasswordInput
            id="signup-password"
            autoComplete="new-password"
            placeholder="At least 8 characters"
            aria-invalid={Boolean(errors.password)}
            aria-describedby={errors.password ? "signup-password-error" : undefined}
            {...register("password")}
          />
          {errors.password && <p id="signup-password-error" className="text-sm text-destructive">{errors.password.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm password</Label>
          <PasswordInput
            id="confirm-password"
            autoComplete="new-password"
            placeholder="Re-enter your password"
            aria-invalid={Boolean(errors.confirmPassword)}
            aria-describedby={errors.confirmPassword ? "confirm-password-error" : undefined}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && <p id="confirm-password-error" className="text-sm text-destructive">{errors.confirmPassword.message}</p>}
        </div>

        <div>
          <div className="flex items-start gap-2">
            <Checkbox
              id="terms-accepted"
              checked={termsAccepted}
              aria-invalid={Boolean(errors.termsAccepted)}
              aria-describedby={errors.termsAccepted ? "terms-error" : undefined}
              onCheckedChange={(checked) => {
                const accepted = checked === true;
                setTermsAccepted(accepted);
                setValue("termsAccepted", accepted, { shouldValidate: true });
              }}
            />
            <Label htmlFor="terms-accepted" className="cursor-pointer text-sm leading-5 font-normal text-muted">
              I agree to the <Link href="#terms" className="font-medium text-primary underline-offset-4 hover:underline">terms and conditions</Link>
            </Label>
          </div>
          {errors.termsAccepted && <p id="terms-error" className="mt-2 text-sm text-destructive">{errors.termsAccepted.message}</p>}
        </div>

        <Button type="submit" size="lg" disabled={submitting} className="h-11 w-full bg-primary text-primary-foreground hover:bg-primary-dark">
          {submitting ? "Creating account..." : "Create account"}
        </Button>
        <p role="status" aria-live="polite" className="text-center text-sm text-muted">{status}</p>

        <div className="flex items-center gap-3" aria-label="Or continue with">
          <Separator className="flex-1" />
          <span className="shrink-0 text-xs text-muted">Or continue with</span>
          <Separator className="flex-1" />
        </div>

        <GoogleAuthButton />

        <p className="text-center text-sm text-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-primary underline-offset-4 hover:underline">Log in</Link>
        </p>
      </form>
    </AuthCard>
  );
}
