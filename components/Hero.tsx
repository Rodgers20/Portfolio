import React from 'react';
import { ArrowDown } from 'lucide-react';
import { EMAIL } from '../constants';
import akiliImg from '../assets/images/akili.jpg';

const FACTS = [
  { value: '66.3%', label: 'of NFL winners picked across 3,017 backtested games. The sportsbook closing line got 66.1%.' },
  { value: '1.24M', label: 'plays processed into the pipeline behind Gridiron.' },
];

const Hero: React.FC = () => (
  <section id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
    <div className="grid items-end gap-14 md:grid-cols-12">
      <div className="md:col-span-8">
        <p className="rise mb-6 font-mono text-xs text-muted" style={{ ["--i" as string]: 0 }}>Albany, NY · University at Albany ’26</p>
        <h1 style={{ ["--i" as string]: 1 }} className="rise font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.95] tracking-tight">
          I build models that predict, and dashboards that <em className="text-accent">show their work.</em>
        </h1>
        <p style={{ ["--i" as string]: 2 }} className="rise mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Informatics graduate focused on data and software. Most of what I make is sports prediction: models trained on
          real data, graded in public, and shipped as sites you can open.
        </p>
        <div style={{ ["--i" as string]: 3 }} className="rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper press lift"
          >
            See the work <ArrowDown className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="text-sm underline decoration-line underline-offset-[6px] press hover:decoration-accent"
          >
            {EMAIL}
          </a>
        </div>
      </div>

      <figure className="rise md:col-span-4" style={{ ["--i" as string]: 2 }}>
        <img
          src={akiliImg}
          alt="Portrait of Akili Bahati in a dark suit and tie"
          width={600}
          height={800}
          className="aspect-[4/5] w-full rounded-sm object-cover"
        />
      </figure>
    </div>

    <dl className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-2 md:mt-28">
      {FACTS.map((f) => (
        <div key={f.value} className="flex items-baseline gap-5">
          <dt className="font-display text-5xl tabular-nums md:text-6xl">{f.value}</dt>
          <dd className="max-w-xs text-sm leading-relaxed text-muted">{f.label}</dd>
        </div>
      ))}
    </dl>
  </section>
);

export default Hero;
