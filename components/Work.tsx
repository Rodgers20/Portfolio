import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED, MORE_PROJECTS } from '../constants';
import { Project } from '../types';

const linkClass =
  'inline-flex items-center gap-1 text-sm font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent';

const ProjectLinks: React.FC<{ p: Project }> = ({ p }) => (
  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
    {p.liveUrl && (
      <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        Open live site <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
      </a>
    )}
    {p.repoUrl && (
      <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        Source on GitHub <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
      </a>
    )}
    {p.note && <span className="text-sm text-muted">{p.note}</span>}
  </div>
);

const Stack: React.FC<{ items: string[] }> = ({ items }) => (
  <p className="font-mono text-xs leading-relaxed text-muted">{items.join(' · ')}</p>
);

const Featured: React.FC<{ p: Project; flip: boolean }> = ({ p, flip }) => (
  <article className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
    <a
      href={p.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${p.title}`}
      className={`group block overflow-hidden rounded-sm border border-line bg-raised md:col-span-7 ${flip ? 'md:order-2' : ''}`}
    >
      <img
        src={p.image}
        alt={p.imageAlt}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
      />
    </a>
    <div className="md:col-span-5">
      <p className="mb-3 font-mono text-xs text-muted">{p.year}</p>
      <h3 className="font-display text-4xl leading-none md:text-5xl">{p.title}</h3>
      <p className="mt-5 leading-relaxed text-muted">{p.summary}</p>
      <div className="mt-5">
        <Stack items={p.stack} />
      </div>
      <div className="mt-6">
        <ProjectLinks p={p} />
      </div>
    </div>
  </article>
);

const Work: React.FC = () => (
  <section id="work" className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">
    <h2 className="mb-16 font-display text-5xl md:text-6xl">Selected work</h2>

    <div className="space-y-24 md:space-y-32">
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
