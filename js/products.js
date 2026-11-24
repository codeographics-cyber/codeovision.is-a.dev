// Codeovision Store — product data (single source for site + admin panel)
// NOTE: Payment number/title and prices are placeholders — Kinza to confirm.
const PAYMENT = {
  easypaisa: "03XX-XXXXXXX",   // TODO: Bilal's Easypaisa number (admin Payment Settings se set hoga)
  jazzcash: "03XX-XXXXXXX",    // TODO: Bilal's JazzCash number (admin Payment Settings se set hoga)
  title: "Your Name",          // TODO: account title (admin Payment Settings se set hoga)
  whatsapp: "923037102625"     // CONFIRMED 24 Nov 2026 — Bilal's WhatsApp for orders/screenshots
};

const FREE_PRODUCTS = [
  {
    id: "free-portfolio",
    title: "Free HTML Portfolio Template",
    desc: "Complete one-page portfolio — header, about, projects aur contact section. Sirf file kholein aur apna naam likh dein.",
    tag: "HTML Template",
    page: "posts/free-html-portfolio-template.html",
    file: "downloads/portfolio-template.html"
  },
  {
    id: "free-buttons",
    title: "CSS Button Animations",
    desc: "5 khoobsurat animated buttons — hover glow, slide, gradient aur bounce effects. Copy-paste karein, lagayein.",
    tag: "CSS",
    page: "posts/css-button-animations.html",
    file: "downloads/button-animations.html"
  },
  {
    id: "free-slider",
    title: "JavaScript Image Slider",
    desc: "Auto-play slider with prev/next buttons aur dots — sirf HTML, CSS aur JavaScript, koi library nahi.",
    tag: "JavaScript",
    page: "posts/javascript-image-slider.html",
    file: "downloads/image-slider.html"
  }
];

const PAID_PRODUCTS = [
  {
    id: "paid-portfolio-pack",
    title: "Premium Portfolio Pack",
    desc: "3 premium portfolio templates — dark, light aur creative styles. Har template responsive aur asaan customize.",
    tag: "Premium",
    price: 499,
    features: ["3 complete templates", "Responsive design", "Lifetime updates"]
  },
  {
    id: "paid-template-bundle",
    title: "Website Template Bundle",
    desc: "5 complete website templates — portfolio, business, restaurant, blog aur landing page. Ek bundle, poori website kit.",
    tag: "Best Value",
    price: 999,
    features: ["5 complete templates", "All sections included", "Lifetime updates"]
  },
  {
    id: "paid-js-pack",
    title: "JavaScript Projects Pack",
    desc: "10 ready-made JavaScript projects — slider, todo app, calculator, quiz, gallery aur bhi. Seekhein aur use karein.",
    tag: "Premium",
    price: 1499,
    features: ["10 JS projects", "Step-by-step code", "Lifetime updates"]
  }
];
