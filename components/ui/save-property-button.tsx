"use client";

import { useState } from "react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";

export function SavePropertyButton({ title, className }: { title: string, className?: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={saved ? `Remove ${title} from saved properties` : `Save ${title}`}
      aria-pressed={saved}
      onClick={() => setSaved((value) => !value)}
      className={cn("absolute top-3.5 right-3.5 size-8 rounded-full bg-surface p-0 text-foreground hover:bg-surface hover:text-primary", className)}
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[17px]" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
        <path d="M17.2 4.7a4.1 4.1 0 0 0-5.8 0L10 6.1 8.6 4.7a4.1 4.1 0 1 0-5.8 5.8l1.4 1.4L10 17.7l5.8-5.8 1.4-1.4a4.1 4.1 0 0 0 0-5.8Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Button>
  );
}
