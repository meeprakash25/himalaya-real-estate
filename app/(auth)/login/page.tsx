import type { Metadata } from "next"

import { AuthCard } from "@/components/auth/auth-card"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Log in | Himalaya Real Etate"
}

export default function LoginPage () {
  return (
    <section className="w-full max-w-md" aria-labelledby="login-title">
      <h1 id="login-title" className="sr-only">Log in</h1>
      <AuthCard title="Welcome back" description="Log in to your Himalaya Real Etate account.">
        <LoginForm />
      </AuthCard>
    </section>
  )
}
