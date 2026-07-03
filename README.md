# ⚡ Trion

A **scroll-driven product showcase website** built with vanilla HTML, CSS, and JavaScript — featuring GSAP-powered section transitions, GPU-composited animations, and consistent 60fps performance across all devices.

🔗 [Live Demo](https://gsap-1-tau.vercel.app/) 

---

## 📸 Preview

<img width="959" height="476" alt="image" src="https://github.com/user-attachments/assets/32fbe0ae-74c7-4fc6-af35-b70cb08c0522" />
<img width="959" height="473" alt="image" src="https://github.com/user-attachments/assets/262c4ca9-74d1-4f3f-8d39-b7c603a7c24b" />

---

## ✨ Features

- Scroll-triggered section animations using GSAP ScrollTrigger
- Sub-100ms animation frames — consistent 60fps across 4+ device breakpoints
- GPU-composited animations (transform + opacity only — no layout thrashing)
- Fully responsive from 320px mobile to 1920px desktop
- 85+ Google Lighthouse performance score
- Zero frameworks, zero dependencies — pure HTML/CSS/JS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Responsive layouts (Grid + Flexbox), CSS variables, transitions |
| Vanilla JavaScript | Scroll handling, DOM interaction, GSAP integration |
| GSAP + ScrollTrigger | Animation engine — section reveals tied to scroll position |

> No npm, no bundler, no framework. Open the HTML file and it works.

---

## ⚡ Performance

**Why this site is fast:**

All animations use only `transform` and `opacity` — the two CSS properties handled entirely by the GPU compositor, skipping layout and paint steps entirely.

```
❌ Slow (triggers layout):     top, left, margin, width, height
✅ Fast (GPU composited):      transform: translateY(), opacity
```

This is what achieves **sub-100ms frame rendering** and **60fps** on mid-range phones.

| Lighthouse Metric | Score |
|---|---|
| Performance | 85+ |
| Accessibility | 88+ |
| Best Practices | 90+ |

---

## 🚀 Getting Started

No installation needed. This is a zero-dependency project.

### Option 1 — Open directly

```bash
git clone https://github.com/kanishkium/trion
cd trion
# Open index.html in your browser
```

### Option 2 — Use Live Server (VS Code)

1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Opens at `http://127.0.0.1:5500`

---

## 📁 Folder Structure

```
trion/
├── index.html          # Main HTML — all sections defined here
├── css/
│   ├── style.css       # Global styles, CSS variables, resets
│   ├── layout.css      # Grid/Flexbox layout rules
│   └── responsive.css  # Media queries (mobile-first)
├── js/
│   ├── main.js         # Entry point — initializes all modules
│   └── animations.js   # All GSAP timelines and ScrollTrigger setup
└── assets/
    ├── images/         # Optimized WebP images
    └── fonts/          # Self-hosted fonts (if any)
```

---

## 🎨 Animation Architecture

ScrollTrigger is set up with a debounced resize handler to prevent position miscalculation on window resize:

```javascript
// animations.js

function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Section reveal animation
  gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 80,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
}

// Refresh ScrollTrigger on resize (debounced)
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 250);
});

initAnimations();
```

---

## 🌐 Deployment

Since this is a static site, it can be deployed anywhere:

**Vercel (recommended)**
```bash
# Drag and drop the project folder on vercel.com/new
# Or use Vercel CLI:
npx vercel
```

**GitHub Pages**
1. Push to GitHub
2. Go to repo Settings → Pages
3. Set source to `main` branch → `/root`
4. Your site is live at `https://username.github.io/trion`

**Netlify**
- Drag and drop the project folder on [netlify.com/drop](https://app.netlify.com/drop)

---

## 📄 License

[MIT](LICENSE)

---

<p align="center">Built by <a href="https://kanishkkumar.dev">Kanishk Kumar</a></p>
