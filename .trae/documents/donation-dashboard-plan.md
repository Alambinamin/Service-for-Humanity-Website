# Plan: Service for Humanity — Donation Dashboard

## Summary
Build a modern, responsive **React single-page dashboard** for the "Service for Humanity" volunteering organisation. All amounts are shown in **Bangladeshi Taka (৳ / BDT)**. It shows:
- **Total Raised** (sum of all donations received from foreign neighbours, all years)
- **Total Distributed** (funds given out to needy people, all years)
- **Current Balance** (Raised − Distributed)
- **Top Donors** leaderboard (who donated how much)
- **Where We Helped** breakdown (where funds went and how much)

Data is stored in a **simple editable JSON file** (no backend/database). To update figures, an admin edits `src/data/donations.json` and the site recalculates everything automatically.

## Current State Analysis
- The workspace `c:\Users\Reazk\Documents\trae_projects\Service For Humanity` is **empty** (fresh project, no existing code, config, or dependencies).
- Everything will be created from scratch.

## Tech Choice
- **Vite + React** (JavaScript) — fast, modern, easy to host for free (Netlify, Vercel, GitHub Pages).
- **Recharts** for simple charts.
- Plain CSS (no heavy UI library) for a clean, lightweight, customizable look.

## Data Model
Each donation record in `donations.json`:
```json
{
  "donorName": "John Smith",
  "amount": 50000,
  "country": "United Kingdom",
  "date": "2024-07-01"
}
```
A separate list for distributions (funds given to needy people — the "where"):
```json
{
  "purpose": "Winter blankets",
  "place": "Village A",
  "amount": 30000,
  "date": "2024-12-05"
}
```
Top file structure (amounts in Taka):
```json
{
  "currency": "BDT",
  "currencySymbol": "৳",
  "donations": [ ... ],
  "distributions": [ ... ]
}
```

## Proposed Changes (files to create)

1. **`package.json`** — project metadata + scripts (`dev`, `build`, `preview`) and dependencies: `react`, `react-dom`, `recharts`, `vite`, `@vitejs/plugin-react`.
2. **`vite.config.js`** — Vite + React plugin config.
3. **`index.html`** — root HTML with `#root` mount point and page title.
4. **`src/main.jsx`** — React entry point; renders `<App />`.
5. **`src/data/donations.json`** — the single source of truth. Pre-filled with sample donations + distributions (across multiple years) so the page looks complete; admin edits this to update real data.
6. **`src/utils/format.js`** — Taka currency formatter (e.g. `৳ 1,50,000` with proper thousands separators).
7. **`src/App.jsx`** — main component: imports data, computes totals, renders layout.
8. **`src/components/StatCard.jsx`** — reusable card for Total Raised / Distributed / Balance / Donor count.
9. **`src/components/TopDonors.jsx`** — leaderboard: groups donations by donor, sums amounts, sorts descending, shows rank, name, country, total (who donated how much).
10. **`src/components/WhereWeHelped.jsx`** — breakdown of distributions: purpose, place, amount, date (where funds went and how much), sorted by amount.
11. **`src/components/DonationChart.jsx`** — Recharts chart (top donors and/or raised-vs-distributed by year).
12. **`src/components/DonationsTable.jsx`** — full table of donations (name, country, amount, date).
13. **`src/App.css` / `src/index.css`** — responsive, modern styling (header with org name, card grid, mobile-friendly).
14. **`README.md`** — short "how to run" and "how to update donation data" guide. *(Only this doc, since it's essential operational instructions for the org.)*

## Key Logic
- **Total Raised** = sum of `donations[].amount`.
- **Total Distributed** = sum of `distributions[].amount`.
- **Balance** = Total Raised − Total Distributed.
- **Top Donors** = group donations by `donorName`, sum per donor, sort desc, take top 10.
- **Where We Helped** = list distributions (optionally grouped by place), sorted by amount desc.
- All computed live from JSON via `useMemo` — no manual totals to maintain.
- All amounts formatted in Taka (৳) via `src/utils/format.js`.

## Assumptions & Decisions
- Currency is **Bangladeshi Taka (BDT, ৳)** throughout. Amounts are plain numbers in the JSON; the app adds the ৳ symbol and formatting.
- "Total amount raised" = total received from donors (all years). "Total distributed" = funds given to needy people (all years). Balance = the difference. All three shown.
- **Who donated how much** → Top Donors leaderboard. **Where we donated how much** → "Where We Helped" section.
- No login/admin panel — updates happen by editing the JSON file (per your "simple file" choice). Keeps it free to host and simple to maintain.
- Country/neighbour info and dates are displayed in the donations table and donor list.

## Verification
1. Run `npm install` then `npm run dev`; open the local URL.
2. Confirm the stat cards show correct computed totals in Taka (৳) matching the sample JSON.
3. Confirm Top Donors leaderboard is sorted highest-first and aggregates repeat donors.
4. Confirm "Where We Helped" lists distributions with place + amount.
5. Confirm chart and donations table render.
6. Edit a value in `donations.json`, save, and confirm the page auto-updates (hot reload).
7. Resize browser / view on mobile to confirm responsive layout.
8. Run `npm run build` to confirm it builds cleanly for deployment.
