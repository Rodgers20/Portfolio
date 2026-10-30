import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED, MORE_PROJECTS } from '../constants';
import { Project } from '../types';
import LivePreview from './LivePreview';

const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-in={shown} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const ProjectLinks: React.FC<{ p: Project }> = ({ p }) =>
  p.liveUrl ? (
    <a
      href={p.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="press lift inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-paper"
    >
      Try the live demo <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
    </a>
  ) : (
    <span className="text-sm text-muted">{p.note}</span>
  );

const Stack: React.FC<{ items: string[] }> = ({ items }) => (
  <p className="font-mono text-xs leading-relaxed text-muted">{items.join(' · ')}</p>
);

// Fixed dark panel (not theme-driven) so the screenshots always sit on a dark surface.
const Featured: React.FC<{ p: Project; flip: boolean }> = ({ p, flip }) => (
  <Reveal>
    <article className="grid items-center gap-10 overflow-hidden rounded-3xl bg-[#1c1a16] p-6 text-[#f3efe7] dark:ring-1 dark:ring-white/10 sm:p-8 md:grid-cols-12 md:p-12">
      <div className={`md:col-span-5 ${flip ? 'md:order-2' : ''}`}>
        <p className="font-mono text-xs text-[#f3efe7]/50">{p.year}</p>
        <h3 className="mt-3 font-display text-5xl leading-none md:text-6xl">{p.title}</h3>
        <p className="mt-5 leading-relaxed text-[#f3efe7]/70">{p.summary}</p>
        {p.stat && (
          <div className="mt-7">
            <p className="font-display text-5xl text-[#7fd1b9]">{p.stat.value}</p>
            <p className="mt-1 text-sm text-[#f3efe7]/60">{p.stat.label}</p>
          </div>
        )}
        <div className="mt-7 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <span key={t} className="rounded-full bg-[#f3efe7]/10 px-3 py-1 font-mono text-[11px] text-[#f3efe7]/70">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={p.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="press lift inline-flex items-center gap-2 rounded-full bg-[#f3efe7] px-5 py-2.5 text-sm font-medium text-[#1c1a16]"
          >
            Try the live demo <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
          {p.detailHref && (
            <a href={p.detailHref} className="press text-sm underline decoration-[#f3efe7]/30 underline-offset-[6px] hover:decoration-[#f3efe7]">
              How it works
            </a>
          )}
        </div>
      </div>
      <div className={`md:col-span-7 ${flip ? 'md:order-1' : ''}`}>
        <LivePreview title={p.title} url={p.liveUrl!} image={p.image} imageAlt={p.imageAlt} onPanel />
      </div>
    </article>
  </Reveal>
);

const Work: React.FC = () => (
  <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
    <h2 className="mb-14 font-display text-5xl md:text-6xl">Selected work</h2>

    <div className="space-y-8">
      {FEATURED.map((p, i) => (
        <Featured key={p.id} p={p} flip={i % 2 === 1} />
      ))}
    </div>

    <h3 className="mb-2 mt-28 font-display text-3xl md:text-4xl">Also built</h3>
    <ul className="border-t border-line">
      {MORE_PROJECTS.map((p) => (
        <li key={p.id} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-4">
            <h4 className="text-lg font-medium leading-snug">{p.title}</h4>
            <p className="mt-1 font-mono text-xs text-muted">{p.year}</p>
          </div>
          <div className="md:col-span-8">
            <p className="leading-relaxed text-muted">{p.summary}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Stack items={p.stack} />
              <ProjectLinks p={p} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Work;
