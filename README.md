# Team Bernhard

A premium family lifestyle site for the Bernhard family — built as a multi-page Next.js 14 (App Router) application with Tailwind, Framer Motion, and Lucide icons.

Five pages: **The Hub**, **Lex's Arena**, **Elizabeth's Journey**, **Olga's Corner**, **Luke's Ventures**.

---

## 1. Add the family photos and crest

Two assets are referenced from `public/images/` and are not bundled with the source:

**a) Family photos.** Run the included download script:

```bash
chmod +x scripts/download-images.sh
./scripts/download-images.sh
```

This downloads:

```
public/images/family-wide.jpg
public/images/family-1.jpg
public/images/family-2.jpg
public/images/family-3.jpg
public/images/luke.jpg
```

**b) The Bernhardt crest.** Save the metallic shield logo (cross, soccer ball, yacht, skis, Liberty Flames) as:

```
public/images/bernhardt-crest.png
```

The crest is referenced in `src/app/page.tsx` (hero), `src/components/layout/Navbar.tsx`, and `src/components/layout/Footer.tsx`.

---

## 2. Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---

## 3. Build for production

```bash
npm run build
npm start
```

A successful `next build` proves all 5 pages compile, all components type-check, and all routes prerender.

---

## 4. Deploy to Vercel

```bash
git init
git add .
git commit -m "feat: Team Bernhard initial build"
gh repo create team-bernhard --public --push --source=.
```

Then go to https://vercel.com/new, import the `team-bernhard` repo, and click **Deploy**. Vercel auto-detects Next.js — no configuration needed.

---

## Project structure

```
team-bernhard/
├── public/images/                    # Family photos + crest go here
├── scripts/download-images.sh        # Pulls family photos from zyrosite
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Root layout: Montserrat, Navbar, Footer
│   │   ├── globals.css               # Tailwind + custom utilities
│   │   ├── page.tsx                  # The Hub (homepage)
│   │   ├── lexs-arena/page.tsx       # Eagles green theme
│   │   ├── elizabeths-journey/page.tsx  # Liberty red + navy theme
│   │   ├── olgas-corner/page.tsx     # Wood + teal theme
│   │   └── lukes-ventures/page.tsx   # Navy + gold theme
│   └── components/
│       ├── layout/
│       │   ├── Navbar.tsx            # Sticky, transparent → solid on scroll
│       │   └── Footer.tsx            # 3-col with subscribe form
│       └── ui/
│           ├── AnimatedSection.tsx   # Framer Motion scroll-reveal wrapper
│           └── Lightbox.tsx          # Full-screen image lightbox
├── tailwind.config.ts                # Custom palette: navy, eagles, liberty, olga, luke
├── next.config.js                    # Allowlists images.unsplash.com + zyrosite
└── tsconfig.json
```

---

## Color system

| Family member       | Primary       | Accent          |
| ------------------- | ------------- | --------------- |
| Lex (sports/Eagles) | `#004C54`     | `#A5ACAF`       |
| Elizabeth (Liberty) | `#990000`     | `#002868`       |
| Olga (calm)         | `#8B6914`     | `#2D9596`       |
| Luke (ventures)     | `#1A2A4A`     | `#C9A84C` gold  |

Site-wide neutrals: navy `#1A2A4A` / `#234F7E` / `#1D4370`; cream `#F5F8FC` / `#E6EBF2`.

---

## Notes

- The hero on every page uses `priority` image loading.
- All images go through `next/image`; remote hostnames (`images.unsplash.com`, `assets.zyrosite.com`) are allowlisted in `next.config.js`.
- Animations are scroll-triggered via `useInView` with a `-80px` margin so they fire as the section enters the viewport.
- The crest is referenced in 3 places — Navbar, Footer, and homepage hero. If the file isn't present, `next/image` will throw at request time; either drop the file in or comment out those `<Image>` blocks.
- The contact and subscribe forms are not wired to a backend — wire them to your form handler of choice (Formspree, Resend, an API route, etc.).
