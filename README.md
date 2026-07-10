# 🌶️ PIMENT — premium restaurant website

A bold, colorful, animated one-page site built with **React + Vite + Tailwind CSS + Framer Motion + Three.js + Lenis**.

---

## 1. Run it (3 commands)

You need Node.js installed (you already have it for your other projects).

```bash
cd piment
npm install     # downloads the tools (one time, ~1 min)
npm run dev     # starts the site
```

Then open the link it prints (usually **http://localhost:5173**). Done.

When it's time to put it online: `npm run build` creates a `dist/` folder — that folder IS the finished website. Drag it into Vercel/Netlify or point your host at it.

---

## 2. How the project is organized

Think of it like a restaurant:

```
piment/
├── index.html              ← the front door
├── src/
│   ├── content.js          ← 📝 THE MENU BOARD: every word, price,
│   │                          photo & video on the site. For a new
│   │                          client, you mostly ONLY edit this file.
│   ├── index.css           ← 🎨 THE PAINT: brand colors + fonts live
│   │                          in the @theme block at the top.
│   ├── App.jsx             ← the floor plan (section order)
│   └── components/         ← the rooms:
│       ├── Loader.jsx        intro curtain animation
│       ├── Nav.jsx           top bar + mobile menu
│       ├── Hero.jsx          full-screen VIDEO + giant headline
│       ├── Marquee.jsx       red scrolling ticker
│       ├── Story.jsx         text that lights up word-by-word
│       ├── Dishes.jsx        signature dish cards
│       ├── Market3D.jsx      🧊 the Three.js 3D ingredients scene
│       ├── MenuReceipt.jsx   menu styled like a till receipt
│       ├── Gallery.jsx       two photo rivers scrolling opposite ways
│       └── Visit.jsx         hours/address/CTA + footer
```

## 3. The 3 things clients always ask you to change

| Change | Where | How |
|---|---|---|
| **Name, text, prices, hours** | `src/content.js` | Edit the words. Save. Site updates instantly. |
| **Colors** | `src/index.css` → `@theme` | Change the hex codes. `--color-flame` is the main red. |
| **The hero video** | `src/content.js` → `hero.video` | Put the client's video file in the `public/` folder (create it if needed) as `hero.mp4`, then make the first source `"/hero.mp4"`. |

## 4. Where the media comes from (legal stuff)

- **Video:** Pexels — free for commercial use, no credit required.
- **Photos:** Unsplash — same deal.

So you're safe using this for paying clients. For the final client site, swap in their real photos — it always looks 10× better.

## 5. Tech cheat-sheet (what each library does)

- **Vite** — runs the site while you work, packs it for the internet.
- **React** — lets us build the page out of reusable Lego blocks (components).
- **Tailwind** — styling with short class names (`bg-flame`, `rounded-full`).
- **Framer Motion** — every fade, slide and hover animation.
- **Lenis** — the buttery smooth scrolling.
- **Three.js (via react-three-fiber)** — the floating 3D ingredients in the dark section.

## 6. If something breaks

- Blank page? Check the terminal running `npm run dev` — the error is printed there.
- Video not showing? The stock URL may be blocked on your network — swap to a local file (see table above).
- Weird styles after editing CSS? Stop the dev server (Ctrl+C) and run `npm run dev` again.
