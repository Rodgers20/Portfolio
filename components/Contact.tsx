import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { EMAIL, LINKEDIN, GITHUB, RESUME_URL } from '../constants';

const Contact: React.FC = () => (
  <footer id="contact" className="mx-auto max-w-6xl px-6 pb-12 pt-24 md:px-10 md:pt-32">
    <h2 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-none">
      Looking for data and software roles. <em className="text-accent">Say hello.</em>
    </h2>

    <a
      href={`mailto:${EMAIL}`}
      className="group mt-10 inline-flex items-center gap-3 text-2xl underline decoration-line underline-offset-[10px] transition-colors hover:decoration-accent md:text-4xl"
    >
      {EMAIL}
      <ArrowUpRight className="h-6 w-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.5} />
    </a>

    <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm">
      <li>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink">
          LinkedIn
        </a>
      </li>
      <li>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink">
          GitHub
        </a>
      </li>
      <li>
        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-ink">
          Résumé (PDF)
        </a>
      </li>
    </ul>

    <p className="mt-24 border-t border-line pt-6 font-mono text-xs text-muted">
      © 2026 Akili Bahati · Albany, New York
    </p>
  </footer>
);

export default Contact;
