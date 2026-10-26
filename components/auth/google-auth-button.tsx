import { Button } from "@/components/ui/button";

export function GoogleAuthButton() {
  return (
    <Button type="button" variant="outline" size="lg" className="h-11 w-full gap-2 border-border bg-surface">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4" fill="currentColor">
        <path d="M21.35 12.25c0-.68-.06-1.34-.18-1.97H12v3.73h5.23a4.47 4.47 0 0 1-1.94 2.93v2.43h3.14c1.84-1.69 2.92-4.18 2.92-7.12Z" />
        <path d="M12 21.75c2.63 0 4.84-.87 6.45-2.38l-3.14-2.43c-.87.58-1.98.93-3.31.93-2.55 0-4.71-1.72-5.48-4.04H3.27v2.5A9.75 9.75 0 0 0 12 21.75Z" />
        <path d="M6.52 13.83a5.86 5.86 0 0 1 0-3.66v-2.5H3.27a9.75 9.75 0 0 0 0 8.66l3.25-2.5Z" />
        <path d="M12 6.13c1.43 0 2.71.49 3.72 1.47l2.8-2.8C16.83 3.2 14.63 2.25 12 2.25a9.75 9.75 0 0 0-8.73 5.42l3.25 2.5C7.29 7.85 9.45 6.13 12 6.13Z" />
      </svg>
      Continue with Google
    </Button>
  );
}
