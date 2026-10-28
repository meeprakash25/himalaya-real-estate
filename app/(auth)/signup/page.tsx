import type { Metadata } from "next"
import { SignupForm } from "@/components/auth/signup-form"

export const metadata: Metadata = {
  title: "Sign up | Himalaya Real Etate"
}

export default function SignupPage () {
  return (
    <section className="w-full max-w-md" aria-labelledby="signup-title">
      <h1 id="signup-title" className="sr-only">Sign up</h1>
      <SignupForm />
    </section>
  )
}
