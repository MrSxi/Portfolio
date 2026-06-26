# Amir Beshir — Portfolio Website

A premium cyberpunk-themed personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)

## ✨ Features

- **Cyberpunk Design** — Neon glows, glitch animations, particle backgrounds
- **9 Sections** — Hero, About, Education, Skills, Projects, Experience, Certifications, Achievements, Contact
- **Fully Responsive** — Mobile-first design, works on all devices
- **Smooth Animations** — Framer Motion powered transitions and scroll-triggered effects
- **SEO Optimized** — Meta tags, Open Graph, structured data (JSON-LD)
- **Static Export** — GitHub Pages compatible
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigable

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
```

The static site will be output to the `./out` directory.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Cyberpunk design system
│   ├── layout.tsx       # Root layout with fonts & SEO
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── Navbar.tsx        # Fixed nav with glassmorphism
│   ├── ScrollProgress.tsx # Neon scroll progress bar
│   ├── BackToTop.tsx     # Floating back-to-top button
│   ├── SectionHeading.tsx # Reusable section title
│   ├── Hero.tsx          # Hero with particles & typewriter
│   ├── About.tsx         # Bio, stats, interests
│   ├── Education.tsx     # Degree, GPA, coursework
│   ├── Skills.tsx        # Animated skill bars
│   ├── Projects.tsx      # Filterable project grid + modals
│   ├── Experience.tsx    # Timeline with internships
│   ├── Certifications.tsx # Certificate cards
│   ├── Achievements.tsx  # Awards & honors
│   ├── Contact.tsx       # Contact form & info
│   └── Footer.tsx        # Footer with socials
└── data/
    └── portfolio.ts      # ← EDIT THIS to update all content
```

## ✏️ Updating Content

All website content is in **`src/data/portfolio.ts`**. Edit this single file to update:

- Personal info, bio, and social links
- Education details
- Skills and proficiency levels
- Projects (titles, descriptions, technologies)
- Work experience
- Certifications
- Achievements

## 🌐 GitHub Pages Deployment

### Automatic Deployment (Recommended)

1. **Create a GitHub repository** (e.g., `amirbeshir.github.io` for a user site, or any name for a project site)

2. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/amirbeshir/<repo-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The included workflow will automatically build and deploy on every push to `main`

4. **Wait for deployment** — Check the **Actions** tab for build progress

### For Project Sites (subpath deployment)

If deploying to `username.github.io/repo-name` instead of `username.github.io`:

1. Open `next.config.ts`
2. Uncomment and set the `basePath` and `assetPrefix`:
   ```ts
   basePath: "/repo-name",
   assetPrefix: "/repo-name/",
   ```

### Adding Your Resume

Place your resume PDF at `public/resume.pdf` — the download button will automatically work.

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 15 | React framework with App Router |
| TypeScript | Type safety |
| Tailwind CSS 4 | Utility-first CSS |
| Framer Motion | Animations & transitions |
| React Icons | Icon library |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
