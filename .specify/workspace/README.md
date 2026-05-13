# Professional Portfolio Website

Recruiter-facing portfolio built with Next.js and TailwindCSS.

## Stack

- Next.js (App Router + TypeScript)
- TailwindCSS
- Netlify hosting

## Sections Included

- Hero
- Summary
- Experience
- Projects
- Skills
- Contact

## Local Development

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build
```

## Switch Portfolio Format

This project supports multiple page formats using an environment variable:

- `figma` (default): Figma-inspired dark layout
- `executive`: Light, recruiter-focused executive layout

Set in `.env.local`:

```bash
NEXT_PUBLIC_PORTFOLIO_FORMAT=figma
```

or

```bash
NEXT_PUBLIC_PORTFOLIO_FORMAT=executive
```

## Customize With Your Resume

Update placeholder details in `app/page.tsx`:

- Name and professional headline
- Experience entries
- Projects
- Skills list
- Contact information

## Push to GitHub

If this repository is not connected yet:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If this repo already exists, commit and push as usual.

## Deploy to Netlify

This project includes `netlify.toml` with Next.js plugin support.

Steps:

1. Create a new site in Netlify and import your GitHub repository.
2. Build command: `npm run build`
3. Publish directory: `.next` (already configured in `netlify.toml`)
4. Deploy.

Netlify should auto-detect and use `@netlify/plugin-nextjs`.
