# Project Context

## Overview

Himalaya Real Estate (HRE) is a Next.js property listings and search site focused on Nepal (Aana land units, Rs/Cr pricing).

## Stack

- Next.js App Router, TypeScript, React
- Tailwind CSS v4 with theme tokens in `app/globals.css`
- `next-themes` (`attribute="class"`, `defaultTheme="system"`)
- shadcn-style components (`base-nova`) in `components/ui/`, built on `@base-ui/react`

## Routes

- `/` homepage
- `/properties` listings with filters, sort, and list/grid views
- `/properties/[id]` property detail (IDs from `data/properties.ts`; unknown IDs call `notFound()`)
- `/login`, `/signup`, `/guides-and-insights`, `/help`

## Current Status

- `/properties?transaction=buy` shows 6 sale listings with Buy/Rent, keyword, location, budget, and type filters, More filters, sorting, list/grid toggle, and save controls.
- Property detail: description and amenities collapse on load and expand on click; section tabs are Overview, Description, Amenities, Similar Properties.
- Listings show a brief skeleton on first load (timer, not a real fetch).
- Browser checks have been spot-level only; TypeScript passes.

## Conventions

- Use semantic colors (`bg-surface`, `text-foreground`, `border-border`, `text-primary`, `bg-muted`). Leave existing hardcoded colors as they are.
- Component filenames are PascalCase under `components/`, except `components/layout/` and `components/ui/`.
- Feature components live in folders such as `components/property/`, `components/auth/`.
- Reuse shadcn components from `components/ui/` before creating new primitives.
- Static and mock data lives in `/data`, typed, not inside components.
- Use Next.js `Image`, `Link`, font, and metadata APIs.
- Keep markup semantic, with accessible labels and ARIA states; design responsively.
- Remove Figma-style `data-node-id` attributes; do not add them.
- Make small, stepwise changes and verify with `npx tsc --noEmit`.
- Leave the duplicated helper and other known convention issues unchanged unless asked.
