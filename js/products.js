// Codeovision Store — product data (single source for site + admin panel)
// NOTE: Payment number/title are CONFIRMED by Bilal (24 Nov 2026).
// Base currency is USD (v11). Prices below are Bilal's Rs 499/999/1499 converted at 280 PKR/USD — confirm USD prices with Bilal.
const CURRENCY = {
  base: "USD",
  pkrRate: 280,   // PKR per $1 — admin can change this in Payment Settings (settings/currency)
};

const PAYMENT = {
  easypaisa: "03037102625",    // CONFIRMED 24 Nov 2026 — Bilal's Easypaisa number
  jazzcash: "03037102625",     // CONFIRMED 24 Nov 2026 — same number for JazzCash (Bilal)
  title: "Muhammad Bilal Anjum",  // CONFIRMED 24 Nov 2026 — Easypaisa account title
  till: "983055951",           // CONFIRMED 24 Nov 2026 — Till ID number (scan with QR)
  tillTitle: "Codeographics",  // CONFIRMED 24 Nov 2026 — Till title
  whatsapp: "923037102625"     // CONFIRMED 24 Nov 2026 — Bilal's WhatsApp for orders/screenshots
};

// v12 — Default level ladder (Bilal, 24 Nov 2026 — EXACT, do not change without asking).
// Bronze on signup (0 sales, no reward) → Silver (10 sales, $1 rank award) →
// Gold (100 sales, $10 reward + affiliate bonus) → Platinum (500 sales, rank only) →
// Associate Member (1,000 sales, $100 reward) → Director (10,000 sales, $1,000 reward).
// If the admin adds custom levels in Firestore (levels collection), those replace
// this default ladder.
const DEFAULT_LEVELS = [
  { name: "Bronze", minSales: 0, maxSales: 9, rewardUsd: 0 },
  { name: "Silver", minSales: 10, maxSales: 99, rewardUsd: 1 },
  { name: "Gold", minSales: 100, maxSales: 499, rewardUsd: 10, affiliateBonus: true },
  { name: "Platinum", minSales: 500, maxSales: 999, rewardUsd: 0 },
  { name: "Associate Member", minSales: 1000, maxSales: 9999, rewardUsd: 100 },
  { name: "Director", minSales: 10000, maxSales: 999999, rewardUsd: 1000 }
];
function levelForSales(sales, levels) {
  const list = (levels && levels.length) ? levels : DEFAULT_LEVELS;
  let found = list[0];
  list.forEach(l => { if (sales >= (l.minSales || 0) && sales <= (l.maxSales ?? 999999)) found = l; });
  return found;
}
function nextLevelForSales(sales, levels) {
  const list = (levels && levels.length) ? levels : DEFAULT_LEVELS;
  const sorted = list.slice().sort((a, b) => (a.minSales || 0) - (b.minSales || 0));
  for (const l of sorted) { if (sales < (l.minSales || 0)) return l; }
  return null;
}

// v12 — Payment gateways seed (Firestore payment_gateways collection).
// USDT addresses are PLACEHOLDERS — do NOT invent a real wallet address.
// Bilal will give the real TRX addresses later; the admin edits them in Payment Settings.
const SEED_GATEWAYS = [
  { name: "Till ID", number: "983055951", title: "Codeographics" },
  { name: "Easypaisa", number: "03037102625", title: "Muhammad Bilal Anjum" },
  { name: "JazzCash", number: "03037102625", title: "Muhammad Bilal Anjum" },
  { name: "USDT TRC20", number: "Address coming soon", title: "USDT (TRC20) — admin will add the real address" },
  { name: "USDT BEP20", number: "Address coming soon", title: "USDT (BEP20) — admin will add the real address" }
];

const FREE_PRODUCTS = [
  {
    id: "free-portfolio",
    title: "Free HTML Portfolio Template",
    desc: "A complete one-page portfolio — header, about, projects and contact sections. Just open the file and add your name.",
    tag: "HTML Template",
    page: "posts/free-html-portfolio-template.html",
    file: "downloads/portfolio-template.html",
    thumbnail: "images/free-portfolio.svg",
    fileSize: "18 KB", format: "HTML + CSS", version: "1.0",
    requirements: "Any modern browser — no build step, no libraries.",
    demoUrl: "posts/free-html-portfolio-template.html",
    includes: ["index.html — full page", "style.css — all styling", "README with setup steps"]
  },
  {
    id: "free-buttons",
    title: "CSS Button Animations",
    desc: "5 beautiful animated buttons — hover glow, slide, gradient and bounce effects. Copy, paste and use them anywhere.",
    tag: "CSS",
    page: "posts/css-button-animations.html",
    file: "downloads/button-animations.html",
    thumbnail: "images/free-buttons.svg",
    fileSize: "9 KB", format: "HTML + CSS", version: "1.0",
    requirements: "Any modern browser — pure CSS, no JavaScript.",
    demoUrl: "posts/css-button-animations.html",
    includes: ["buttons.html — 5 buttons", "buttons.css — all animations", "Usage examples"]
  },
  {
    id: "free-slider",
    title: "JavaScript Image Slider",
    desc: "An auto-play slider with prev/next buttons and dots — pure HTML, CSS and JavaScript, no libraries needed.",
    tag: "JavaScript",
    page: "posts/javascript-image-slider.html",
    file: "downloads/image-slider.html",
    thumbnail: "images/free-slider.svg",
    fileSize: "14 KB", format: "HTML + CSS + JS", version: "1.0",
    requirements: "Any modern browser — vanilla JavaScript only.",
    demoUrl: "posts/javascript-image-slider.html",
    includes: ["slider.html — markup", "slider.css — styling", "slider.js — auto-play + controls"]
  }
];

const PAID_PRODUCTS = [
  {
    id: "paid-portfolio-pack",
    title: "Premium Portfolio Pack",
    desc: "3 premium portfolio templates — dark, light and creative styles. Every template is responsive and easy to customize.",
    tag: "Premium",
    price: 1.78,   // Rs 499 @ 280 — confirm
    features: ["3 complete templates", "Responsive design", "Lifetime updates"],
    thumbnail: "images/paid-portfolio-pack.svg",
    fileSize: "1.2 MB", format: "HTML + CSS + JS", version: "1.0",
    requirements: "Any modern browser — no build step, no libraries.",
    demoUrl: "",
    includes: ["Dark portfolio template", "Light portfolio template", "Creative portfolio template", "All images + assets"]
  },
  {
    id: "paid-template-bundle",
    title: "Website Template Bundle",
    desc: "5 complete website templates — portfolio, business, restaurant, blog and landing page. One bundle, a full website kit.",
    tag: "Best Value",
    price: 3.57,   // Rs 999 @ 280 — confirm
    features: ["5 complete templates", "All sections included", "Lifetime updates"],
    thumbnail: "images/paid-template-bundle.svg",
    fileSize: "3.4 MB", format: "HTML + CSS + JS", version: "1.0",
    requirements: "Any modern browser — no build step, no libraries.",
    demoUrl: "",
    includes: ["Portfolio template", "Business template", "Restaurant template", "Blog template", "Landing page template"]
  },
  {
    id: "paid-js-pack",
    title: "JavaScript Projects Pack",
    desc: "10 ready-made JavaScript projects — slider, todo app, calculator, quiz, gallery and more. Learn and use them right away.",
    tag: "Premium",
    price: 5.35,   // Rs 1499 @ 280 — confirm
    features: ["10 JS projects", "Step-by-step code", "Lifetime updates"],
    thumbnail: "images/paid-js-pack.svg",
    fileSize: "2.1 MB", format: "HTML + CSS + JS", version: "1.0",
    requirements: "Any modern browser — vanilla JavaScript only.",
    demoUrl: "",
    includes: ["Image slider", "Todo app", "Calculator", "Quiz app", "Photo gallery", "5 more mini projects"]
  }
];
