import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export function AuthCard ({
  title,
  description,
  children
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="w-full max-w-md border-border shadow-md">
      <CardHeader className="gap-2 px-6 pt-6 sm:px-8 sm:pt-8">
        <CardTitle className="font-heading text-2xl font-semibold text-foreground">{title}</CardTitle>
        <CardDescription className="text-body-sm text-muted">{description}</CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8">{children}</CardContent>
    </Card>
  )
}
