# ShopKart — Amazon Homepage Clone

A front-end clone of Amazon's homepage, built for the Technovation
Technical Department submission (Task 2: Clone a Popular Website).

**Live demo:** _add your deployed link here after publishing (Vercel/Netlify/GitHub Pages)_

## Website chosen

Amazon — the logged-out homepage (top navigation with delivery
location, search bar and account/cart icons, secondary category nav,
a hero carousel, category cards, and a "Today's Deals" product strip,
plus the multi-column footer).

## Tech stack used

- HTML5
- CSS3 (custom properties, Flexbox, media queries — no framework)
- Vanilla JavaScript (no libraries)

No build tools or frameworks were used on purpose, to keep the project
easy to read and easy to deploy as static files.

## Features implemented

- Full top nav: logo, "Deliver to" location block, search bar with
  category dropdown, language selector, account/orders links, and a
  cart icon with a live item counter
- Secondary category nav bar (horizontally scrollable on small
  screens)
- Auto-advancing hero image carousel (3 slides) with manual
  previous/next controls and pause-on-hover
- Four category cards, each generated dynamically from a JS data
  array, with a 2x2 colour-block thumbnail grid standing in for real
  product photography
- "Today's Deals" horizontal scroll strip of six product cards with
  price + struck-through original price, generated from JS data
  clicking a deal increments the cart counter (mock add-to-cart)
- Working search form with basic validation (won't submit empty)
  and a demo message in place of a real backend
- Fully responsive: nav collapses and reorders on small screens,
  category cards and deal cards wrap/scroll appropriately, tested
  from ~360px mobile widths up to desktop

## Known limitations

- No backend — search and "add to cart" are simulated on the front
  end only (alerts / a counter), nothing is persisted
- Product and category images are CSS colour blocks rather than real
  photography, to avoid using copyrighted images
- No product detail pages, checkout, or account pages — this clone
  covers only the homepage, as required by the task
- Not pixel-perfect to Amazon's current production site — layout,
  spacing and colours are close but rebuilt from scratch, not copied
  from Amazon's source code

## Running locally

No build step needed — just open `index.html` in a browser, or serve
the folder with any static server, e.g.:

```bash
npx serve .
```

## Deploying

This is a static site, so any of these work with no configuration:

- **Vercel:** `vercel` in this folder (or drag-and-drop the folder at vercel.com/new)
- **Netlify:** drag-and-drop the folder at app.netlify.com/drop
- **GitHub Pages:** push to a repo, then enable Pages on the `main` branch

---

*This is a student project built for a college technical-club
submission and is not affiliated with or endorsed by Amazon.*
