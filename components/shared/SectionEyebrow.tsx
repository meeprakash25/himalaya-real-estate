export function SectionEyebrow ({ children, inverse = false }: { children: React.ReactNode; inverse?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2 text-label leading-[13px] font-bold tracking-[0.08em] ${inverse ? "text-footer-muted" : "text-destructive"}`}>
      <span aria-hidden="true" className={`h-0.5 w-5 ${inverse ? "bg-footer-muted" : "bg-destructive"}`} />
      {children}
    </p>
  )
}
