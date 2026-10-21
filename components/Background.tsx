import React from 'react';
import { ROLES, DEGREES, SKILLS } from '../constants';

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="mb-6 font-mono text-xs uppercase tracking-widest text-muted">{children}</h3>
);

const Background: React.FC = () => (
  <section id="background" className="border-t border-line bg-raised">
    <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
      <h2 className="font-display text-5xl md:col-span-4 md:text-6xl">Background</h2>

      <div className="space-y-16 md:col-span-8">
        <div>
          <Heading>Experience</Heading>
          {ROLES.map((r) => (
            <article key={r.org} className="border-t border-line pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                <h4 className="text-lg font-medium">{r.title}</h4>
                <p className="font-mono text-xs text-muted">{r.dates}</p>
              </div>
              <p className="mt-1 text-sm text-muted">
                {r.org}, {r.place}
              </p>
              <ul className="mt-4 space-y-2 leading-relaxed text-muted">
                {r.points.map((pt) => (
                  <li key={pt} className="pl-4 -indent-4 before:mr-2 before:text-accent before:content-['–']">
                    {pt}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div>
          <Heading>Education</Heading>
          <div className="space-y-6">
            {DEGREES.map((d) => (
              <article key={d.title} className="border-t border-line pt-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6">
                  <h4 className="text-lg font-medium">{d.title}</h4>
                  <p className="font-mono text-xs text-muted">{d.dates}</p>
                </div>
                <p className="mt-1 text-sm text-muted">{d.school}</p>
                <p className="mt-3 leading-relaxed text-muted">{d.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <Heading>Tools</Heading>
          <dl className="space-y-4">
            {SKILLS.map((g) => (
              <div key={g.label} className="grid gap-1 border-t border-line pt-4 sm:grid-cols-[7rem_1fr] sm:gap-6">
                <dt className="text-sm text-muted">{g.label}</dt>
                <dd>{g.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
);

export default Background;
