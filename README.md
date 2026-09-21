# J. Martin Lutece — author website

Official site for *Summons of The Eighth Divinity: The Complete Edition*. Built from the Organic design-system mockups (homepage with interactive 3D book, About the Book, the Codex of the Eight lore hub with spoiler switch, Codex entry pages, Press & Contact).

## Stack

- Next.js (App Router) + React, TypeScript
- Plain CSS: `app/tokens.css` holds the Organic design tokens and component classes; `app/globals.css` holds page styles and responsive rules
- Fonts: Caprasimo (headings) and Figtree (body) via `next/font`
- No CMS yet. Content lives in `lib/data.ts`

## Develop

```bash
npm install
npm run dev
```

## Routes

| Path | Screen |
| --- | --- |
| `/` | Homepage: hero with click-to-open, drag-to-spin book; edition, archive, author, quotes, newsletter |
| `/book` | About the Book |
| `/codex` | The Codex of the Eight (night theme, spoiler switch persisted per browser) |
| `/codex/vesiks/[slug]` | Character entry (e.g. `/codex/vesiks/eg-boothby`) |
| `/press` | Press & Contact |

## Notes

- Retail links in `lib/data.ts` (`BUY`) point at search pages until the real listings are live.
- The subscribe and contact forms are front-end only; wire them to a provider (Mailchimp, Formspree, Resend) when ready.
