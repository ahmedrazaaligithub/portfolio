# Muhammad Ahmed Raza — Developer Portfolio

A React.js / Frontend Developer portfolio showcasing projects, professional experience, skills, and contact information.

- Production: [ahmed-raza-one.vercel.app](https://ahmed-raza-one.vercel.app/)
- Professional GitHub: [ahmedrazaaligithub](https://github.com/ahmedrazaaligithub)

## Stack

- React 19 and React DOM, with React Router for the application wrapper.
- Vite 7 and `@vitejs/plugin-react` for development and production builds.
- Tailwind CSS 4 through `@tailwindcss/vite`, alongside the shared styles in `src/index.css`.
- GSAP, `@gsap/react`, and ScrollTrigger for scoped entrance and scroll-driven animations.
- One Lenis instance connected to the GSAP ticker for smooth desktop scrolling and anchor navigation.
- `@emailjs/browser` for the contact form; its existing service/template configuration lives in `src/Sections/ContactUs/ContactUs.jsx`.
- `react-icons` for interface and technology icons; ESLint 9 for linting.

Exact dependency versions are recorded in `package.json` and `package-lock.json`.

## Features

- Responsive sections for Hero, About, Experience, Skills, Projects, and Contact.
- Persistent dark/light themes with an early theme initialization script.
- A scroll-controlled Wireframe → UI Assembly → Finished Website preview.
- A desktop featured-project showcase, with vertical presentations on smaller screens.
- All ten projects available through Show More/Show Less. Unavailable company demos retain their original URLs in project data and render a non-clickable availability notice.
- A career timeline, selectable technology showcase, and fine-pointer cursor/magnetic interactions.
- Reduced-motion fallbacks, keyboard focus states, and accessible form labels.
- Resume viewing and PDF downloads, plus EmailJS contact-form validation and status messages.

## Local setup

Use Node.js 24.x (validated with 24.14.0), or Node.js 22.12+ on the 22.x release line. Run commands from a local checkout of this project's root directory.

```bash
npm ci
npm run dev
```

`npm ci` installs the versions recorded in the lockfile, including the development tools required to build the site.

## Checks and production preview

```bash
npm run lint
npm audit
npm audit --omit=dev
npm run build
npm run preview
```

The build is written to `dist/`. The preview command serves those production files locally; it does not deploy the site.

When checking changes, cover both themes, desktop/mobile layouts, forward/reverse scrolling, project expansion, navigation, reduced motion, and contact-form validation. Checking validation does not require sending an email; delivery needs a separate authorized test.

## Deployment

The production portfolio is hosted on Vercel. For a future deployment, use the Vite framework preset with:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm ci`, including development dependencies for the build
- A Node.js version compatible with the local setup above

Build and verify locally before publishing. Deployment is a separate action.

## Static SEO and public assets

`index.html` contains the title, description, canonical URL, Open Graph metadata, and X summary-card metadata. The canonical production homepage is `https://ahmed-raza-one.vercel.app/`.

- `public/robots.txt` allows crawling and references the sitemap.
- `public/sitemap.xml` lists only the canonical homepage; section fragments are not separate pages.
- `public/ahmed-raza.jpeg` is an unchanged copy of the existing 460×460 portrait for a stable social-sharing URL.
- `public/favicon.png` is the existing favicon.
- `public/Muhammad_Ahmed_Raza_CV.pdf` is the active resume used by the viewing and download links.

Vite copies these public assets into `dist/`. If the production domain changes, update the canonical URL, social URLs, robots sitemap reference, and sitemap location together. Search indexing and social-preview refreshes are controlled by the respective services after deployment.
