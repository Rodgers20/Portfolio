import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import Background from './components/Background';
import Contact from './components/Contact';

const prefersDark = () => {
  try {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
  } catch {
    // storage blocked: fall through to the system setting
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(prefersDark);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch {
      // storage blocked: theme just won't persist
    }
  }, [isDark]);

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to work
      </a>
      <Header isDark={isDark} onToggleDark={() => setIsDark((d) => !d)} />
      <main>
        <Hero />
        <Work />
        <Background />
      </main>
      <Contact />
    </>
  );
};

export default App;
