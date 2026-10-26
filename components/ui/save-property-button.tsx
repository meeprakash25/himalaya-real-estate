"use client";

import { useState } from "react";

export function SavePropertyButton({ title }: { title: string }) {
  const [saved, setSaved] = useState(false);

  return (
    <button
      type="button"
      aria-label={saved ? `Remove ${title} from saved properties` : `Save ${title}`}
      aria-pressed={saved}
      onClick={() => setSaved((value) => !value)}
      className="absolute top-3.5 right-3.5 inline-flex size-8 items-center justify-center rounded-full bg-surface text-foreground transition-colors hover:text-primary"
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[17px]" fill={saved ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
        <path d="M17.2 4.7a4.1 4.1 0 0 0-5.8 0L10 6.1 8.6 4.7a4.1 4.1 0 1 0-5.8 5.8l1.4 1.4L10 17.7l5.8-5.8 1.4-1.4a4.1 4.1 0 0 0 0-5.8Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
