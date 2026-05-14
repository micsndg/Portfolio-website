# Michael San Diego Portfolio

This is a recruiter-focused portfolio website built to present my iOS engineering work, experience, and selected projects.

The project was created with AI assistance (GitHub Copilot) and then refined with custom content, design formats, and deployment setup.

## Preview

![Portfolio homepage preview](.specify/workspace/public/portfolio-screenshot.png?v=2)

## What This Site Includes

- Professional hero and summary section
- Experience section with career highlights
- Project section with App Store and related links
- Contact section with GitHub, LinkedIn, and resume download
- Multiple visual themes that can be switched via environment variable

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9
- Netlify deployment with `@netlify/plugin-nextjs`

## Project Structure

```
app/
	globals.css
	layout.tsx
	page.tsx
public/
	resume-michael-san-diego.pdf
netlify.toml
package.json
```

## Run Locally

Prerequisite: Node.js 20+ recommended.

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

## Environment-Based Format Switching

Set the active template in `.env.local`:

```bash
NEXT_PUBLIC_PORTFOLIO_FORMAT=all-black-template1
```

Available values:

- `all-black-template1` (dark Figma-inspired style)
- `black-white-template` (minimal black and white style)
- `executive` (light executive style)

## Customize Content

Update portfolio content in `app/page.tsx`:

- `techStack` array
- `projects` array (name, stack, summary, links)
- `experience` array
- Contact links and profile details

Project link fields currently supported:

- `appStore`
- `website`
- `github`
- `other`

## Deploy to Netlify

This project is ready for Netlify deployment.

1. Import the GitHub repository in Netlify.
2. If your repo root is the parent folder, set Base directory to `.specify/workspace`.
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variable:

```bash
NEXT_PUBLIC_PORTFOLIO_FORMAT=black-white-template
```

6. Trigger deploy.

Netlify will use settings from `netlify.toml` and the Next.js plugin.

## Notes

- Every push to your main branch can trigger an automatic Netlify deploy.
- The resume file is served from `public/resume-michael-san-diego.pdf`.
