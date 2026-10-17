# Yesung Hwang — Academic Portfolio

Minimal, typography-first academic research website directly based on the [Tovacinni Research Website Template](https://github.com/tovacinni/research-website-template), built with **Vite**, **React**, and **Tailwind CSS**.

---

## ⚡ Zero-Friction Editing ("No Compiling Needed")

Content is managed in modular TypeScript files inside `src/data/`—identical to Tovacinni:

- **Bio & Links**: [`src/data/aboutme.ts`](src/data/aboutme.ts) (Name, title, institution, email, bio, social links)
- **Publications**: [`src/data/publication.ts`](src/data/publication.ts) (Title, authors, conference, year, paperUrl, codeUrl)
- **News**: [`src/data/news.ts`](src/data/news.ts) (Date, title, description, link)
- **Experience**: [`src/data/experience.ts`](src/data/experience.ts) (Role, company, date, description)
- **Education**: [`src/data/education.ts`](src/data/education.ts) (Degree, university, year, honors)
- **Projects**: [`src/data/portfolio.ts`](src/data/portfolio.ts) (Title, description, technologies, links, images)
- **Section Order**: [`src/data/section-order.ts`](src/data/section-order.ts) (Rearrange order of sections)

When you push your edits to GitHub, GitHub Actions builds and publishes the live site automatically in ~20 seconds. You never need to compile locally.

---

## 📱 Responsive Layout (Tovacinni Signature)

- **Desktop (`>= md`)**: Two-column layout with a fixed/sticky left sidebar containing your headshot on top and info below, with scrolling content on the right.
- **Narrow / Mobile Screens (`< md`)**: Automatically places your headshot portrait on the **right** (`w-1/3`) and your name, title, and contact links on the **left** (`w-2/3`), saving vertical space and keeping your basic info immediately visible without scrolling.

---

## 🌓 Dark & Light Theme

Features a working class-based dark theme toggle:
- **Light mode**: Tovacinni's warm paper canvas (`#FFFCF8`).
- **Dark mode**: Soft dark canvas (`#121214`) with muted zinc typography.
- Persists your preference in `localStorage` and respects system preferences.

---

## 🕒 Automatic "Last Updated" Date

The footer automatically extracts the exact date of your latest Git commit (`git log -1 --format=%cI`) during build time, keeping the footer fresh without manual tracking.

---

## 🚀 Local Development

```bash
npm run dev
```

Open `http://localhost:5173`.

---

## 🌐 Deploy to GitHub Pages

```bash
git add .
git commit -m "Adopt full Tovacinni template architecture"
git push origin main
```
