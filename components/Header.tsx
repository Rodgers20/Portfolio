import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { RESUME_URL } from '../constants';

interface HeaderProps {
  isDark: boolean;
  onToggleDark: () => void;
}

const LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#background', label: 'Background' },
  { href: '#contact', label: 'Contact' },
];

const Header: React.FC<HeaderProps> = ({ isDark, onToggleDark }) => (
  <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
    <nav aria-label="Primary" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
      <a href="#top" className="font-display text-2xl italic leading-none">
        Akili Bahati
      </a>

      <div className="flex items-center gap-5 md:gap-8">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="hidden text-sm text-muted transition-colors hover:text-ink sm:block">
            {l.label}
          </a>
        ))}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
        >
          Résumé
        </a>
        <button
          onClick={onToggleDark}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          className="flex h-8 w-8 items-center justify-center rounded-full text-muted transition-colors hover:text-ink active:scale-95"
        >
          {isDark ? <Sun className="h-4 w-4" strokeWidth={1.5} /> : <Moon className="h-4 w-4" strokeWidth={1.5} />}
        </button>
      </div>
    </nav>
  </header>
);

export default Header;
