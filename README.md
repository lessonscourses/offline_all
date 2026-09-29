# Legends Investor Meetings — October 2026 (series landing)

Next.js (App Router) + React, no CSS framework. All styles in `app/globals.css`.

```bash
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
```

## Pages

| Route | What |
|---|---|
| `/` | Series announcement: all four cities |

## Structure

- City landings are separate projects on their own domains. **Set their URLs in `data/links.js`.**
- `components/` — Header, Footer, Gallery (video + photos, full-screen lightbox), Quotes, InviteForm, Faq, StickyCta.
- `components/Interactions.jsx` — parallax (`data-speed`, `data-axis="x"`), reveal on scroll (`.rv`), lightbox (`data-lb`),
  local clocks (`data-tz`), countdowns (`data-count`, `data-days`), schedule progress, mobile menu, invite form.
- `data/cities.js` — dates, time zones and countdown start times.

## TODO

- Schedule (18:30–22:30) is a draft — replace with the real agenda in each `app/<city>/page.jsx`.
- Guest investor, venue and pricing are "shared with confirmed guests" for now.
- `InviteForm` shows the prototype success state — connect to the backend/CRM.
- Photos and film are hot-linked from belegends.club (Dubai gatherings); copy into `public/` for production.
- Links to the main site point to https://website-structure-production.up.railway.app.
