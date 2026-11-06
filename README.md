# MediWell — Health Information Portal

A complete, responsive, professional health information website built with **plain HTML, CSS and JavaScript**. No build step, no frameworks and no backend required.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home page with hero, categories, featured articles, tools preview and newsletter |
| `articles.html` | Article library with live search and category filters |
| `article.html` | Single article page (loads content by `?id=` from `js/data.js`) |
| `tools.html` | Working health calculators: BMI, daily calories, water intake and heart-rate zones |
| `about.html` | Mission, editorial values, review process, team and FAQs |
| `contact.html` | Validated contact form with local storage + contact info |

## Features

- **Fully working calculators** using established formulas
  - BMI (metric + imperial) with visual gauge
  - Daily calories via Mifflin–St Jeor, with weight-loss/gain targets
  - Personalised water-intake target
  - Heart-rate training zones (Karvonen method when resting HR is supplied)
- **Live article search** and category filtering
- **12 full articles** with key takeaways and medical disclaimers
- **Dark / light mode** with saved preference
- **Mobile-first responsive design** with accessible navigation
- **Form validation** with inline errors and success feedback
- **SEO-ready** meta tags and semantic HTML
- **Zero data collection** — all calculations and form storage happen in the browser

## Run locally

Open `index.html` directly in a browser, or serve the folder:

```bash
npx serve health-portal
# or
npx http-server health-portal
```

## Project structure

```
health-portal/
├── index.html
├── articles.html
├── article.html
├── tools.html
├── about.html
├── contact.html
├── css/
│   └── style.css
└── js/
    ├── data.js       # Articles, categories and icon set
    ├── main.js       # Theme, navigation, reveal animations, helpers
    ├── articles.js   # Home, listing and single-article rendering
    ├── tools.js      # Calculator logic
    └── contact.js    # Contact form validation
```

## Customising

- **Add an article:** copy an object in the `ARTICLES` array in `js/data.js` and give it a unique `id`. It automatically appears on the home and listing pages.
- **Change the brand:** update the `.brand` markup and the colours in `:root` inside `css/style.css`.
- **Go live with forms:** the contact form currently saves messages to `localStorage`. Replace the storage block in `js/contact.js` with a `fetch()` call to your API, Formspree, Netlify Forms or similar.

## Deploy

Upload the folder to any static host — GitHub Pages, Netlify, Vercel, Firebase Hosting or shared cPanel hosting. No server-side configuration is needed.

---

**Medical disclaimer:** MediWell provides general educational information only and is not a substitute for professional medical advice, diagnosis or treatment.
