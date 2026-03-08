# Akili Bahati — Portfolio

Personal portfolio website for Akili Bahati, a final-year Informatics student at the University at Albany concentrating in Data Visualization & Predictive Modeling.

**Live site:** [akilibahati.dev](https://akilibahati.dev) *(replace with actual URL)*

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (build tool)
- **Tailwind CSS** (via CDN)
- **lucide-react** (icons)
- **formsubmit.co** (contact form)

## Project Structure

```
├── App.tsx              # Root layout, dark mode state
├── index.tsx            # ReactDOM entrypoint
├── constants.tsx        # All site data (projects, experience, etc.)
├── types.ts             # TypeScript interfaces
├── components/
│   ├── Header.tsx       # Nav + dark mode toggle
│   ├── Hero.tsx         # Landing + skills ticker
│   ├── About.tsx        # Biography
│   ├── Experience.tsx   # Work history
│   ├── Projects.tsx     # Project showcase
│   ├── Education.tsx    # Academic background
│   ├── Certifications.tsx
│   ├── Services.tsx     # Technical concentration
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx
├── assets/images/       # Project & profile images (Vite-imported)
└── public/              # Static files (PDF resume)
```

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Updating Content

All site content lives in `constants.tsx`. To update projects, experience, certifications, or skills — only edit that file. Components pull data from it automatically.

To add a new project image, place it in `assets/images/` and import it at the top of `constants.tsx`.

## Contact

**Email:** abahati@albany.edu
**LinkedIn:** [linkedin.com/in/akili-bahati](https://linkedin.com/in/akili-bahati)
**GitHub:** [github.com/Rodgers20](https://github.com/Rodgers20)
