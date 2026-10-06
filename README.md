# Christopher Velez Portfolio (Astro + Tailwind + TypeScript)

A production-ready, static portfolio website designed for GitHub Pages deployment.

## Tech Stack

- Astro (static output)
- Tailwind CSS
- TypeScript
- GitHub Actions for deployment

## Quick Start

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run locally:

   ```bash
   npm run dev
   ```

3. Build static output:

   ```bash
   npm run build
   ```

4. Preview production build:

   ```bash
   npm run preview
   ```

## Project Structure

```text
.
├─ .github/workflows/deploy.yml
├─ public/
│  ├─ favicon.svg
│  ├─ robots.txt
│  ├─ resume/
│  │  ├─ Chris_s_Resume_General.pdf
│  │  └─ README.txt
│  ├─ scripts/
│  │  └─ site.js
│  └─ images/placeholders/
│     ├─ Chris_Velez_Headshot.jpeg
│     ├─ benthos-header.png
│     ├─ benthos.jpg
│     ├─ project-immersion-2026.jpg
│     ├─ project-ischool-chatbot.png
│     ├─ SharksWayIMG1.jpg
│     ├─ SharksWayIMG2.jpg
│     ├─ StemZoneSantaClara1.jpg
│     ├─ StemZoneSantaClara2.jpg
│     └─ PhotogrametryWorkshop.jpg
├─ src/
│  ├─ components/
│  │  ├─ ExperienceCard.astro
│  │  ├─ Footer.astro
│  │  ├─ ImageCarousel.astro
│  │  ├─ NavBar.astro
│  │  ├─ ProjectCard.astro
│  │  ├─ SectionHeading.astro
│  │  └─ TagPill.astro
│  ├─ data/
│  │  ├─ experience.ts
│  │  ├─ projects.ts
│  │  └─ site.ts
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ 404.astro
│  │  ├─ about.astro
│  │  ├─ contact.astro
│  │  ├─ index.astro
│  │  ├─ projects.astro
│  │  ├─ projects/[slug].astro
│  │  └─ resume.astro
│  ├─ styles/global.css
│  └─ env.d.ts
├─ astro.config.mjs
├─ postcss.config.cjs
├─ tailwind.config.mjs
├─ tsconfig.json
└─ package.json
```

## Content Customization

Update these files first:

- `src/data/site.ts` for name, email, GitHub, LinkedIn, resume path, and metadata.
- `src/data/projects.ts` for project cards and detailed case studies.
- `src/data/experience.ts` for experience timeline content.

### Resume File

The public PDF is `public/resume/Chris_s_Resume_General.pdf`. `resumePath` in `src/data/site.ts` points at `/resume/Chris_s_Resume_General.pdf`. Replace that file in place, or change `resumePath` if the filename changes.

`/experience` redirects to `/resume` (see `redirects` in `astro.config.mjs`).

### Images

Project photos and the headshot live in `public/images/placeholders/`. Paths are set in:

- `src/data/site.ts` (`headshotPath`)
- `src/data/projects.ts` (`mediaPath` and `mediaSlides`)

Keep photos as JPEG (`.jpg`) and graphics that need transparency as PNG. Large phone originals should be resized to about 1600px wide before commit.

## GitHub Pages Deployment

This repo includes `.github/workflows/deploy.yml` that auto-deploys on pushes to `main`.

### 1) Enable GitHub Pages in your repo

In your GitHub repository:

1. Go to **Settings -> Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**

### 2) Configure the deployment URL/base path

Update environment values in `.github/workflows/deploy.yml`:

- `SITE_URL`:
  - User site: `https://username.github.io`
  - Project site: `https://username.github.io/repository-name`
- `BASE_PATH`:
  - User site: leave empty (`""`) or set `/`
  - Project site: set `"/repository-name/"` (recommended explicit setting)

The Astro config also auto-detects project-site base path from the repository name when running in GitHub Actions.

For this repo (`CrashPr0/ChrisVelezPortfolio`), the expected GitHub Pages URL is:

- `https://crashpr0.github.io/ChrisVelezPortfolio`

### 3) Push to deploy

```bash
git add .
git commit -m "Initial portfolio site"
git push origin main
```

After Actions completes, your site is live on GitHub Pages.

## Accessibility and Performance Notes

- Semantic landmarks and heading hierarchy.
- Reduced-motion support for reveal animations and carousel autoplay.
- Static rendering only (no backend/server features).
- Responsive layout tuned for mobile and desktop.
- `robots.txt`, a generated sitemap, and Person JSON-LD on the home page.

## Optional Enhancements

- Add blog/content collections.
- Add analytics (Plausible or GA4).
- Per-page Open Graph images (the site currently shares one image).
