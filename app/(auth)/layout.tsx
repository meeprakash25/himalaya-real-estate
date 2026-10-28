import { Container } from "@/components/layout/container"

export default function AuthLayout ({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 items-center justify-center bg-background py-10 sm:py-14">
      <Container className="flex w-full flex-1 items-center justify-center">
        {children}
      </Container>
    </div>
  )
}
