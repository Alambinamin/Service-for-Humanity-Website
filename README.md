# Service for Humanity — সার্ভিস ফর হিউম্যানিটি

The official website of **Service for Humanity**, a volunteer-run initiative based in Daganbhuiyan, Feni, Bangladesh. We collect contributions from friends abroad and deliver direct aid to families in need.

🌐 **Bilingual** — English & বাংলা (toggle in navbar)

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero, impact numbers, featured stories, photo strip |
| **About** | Origin story, vision & mission, values, timeline |
| **Our Work** | Case studies with category filters |
| **Gallery** | Photo grid with lightbox |
| **Support Us** | bKash, Nagad, bank transfer details |
| **Contact** | Contact form, volunteer info, Facebook link |

## Quick Start

```powershell
npm install
npm run dev
```

Open the link it prints (usually `http://localhost:5173`).

## Edit Content

All text and data lives in two files:

- **`src/data/content.js`** — Stories, impact numbers, payment info, gallery photos
- **`src/data/translations.js`** — All UI strings (headings, buttons, labels) in BN/EN

## Build for Production

```powershell
npm run build
```

Upload the `dist` folder to **Netlify**, **Vercel**, or **GitHub Pages**.

---

*Built with React + Vite.*
