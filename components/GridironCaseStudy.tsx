import React from 'react';

const RESULTS = [
  { label: 'Winners picked', model: '66.3%', market: '66.1%' },
  { label: 'Log loss (lower is better)', model: '0.6135', market: '0.6122' },
  { label: 'Margin error, points', model: '≈ 9.8', market: '≈ 9.8' },
];

const STEPS: { heading: string; body: string[] }[] = [
  {
    heading: 'The question',
    body: [
      'Can a model trained only on public data compete with the betting market, the best public forecast of an NFL game there is? I built Gridiron to find out, and to make the answer something anyone can open and check.',
    ],
  },
  {
    heading: 'Data',
    body: [
      'Play-by-play from nflverse going back to 1999: 1.24 million plays across 7,548 games, plus injuries, snap counts and charting. Free ESPN feeds supply live lines, scores and in-game plays. Everything lands in a Parquet data lake on an external SSD.',
    ],
  },
  {
    heading: 'Features',
    body: [
      'Each game gets about 90 features. Team ratings are exponentially weighted averages of EPA per play, success rate, explosive plays and turnovers, and they are recorded before the game updates them, so no future information can leak in.',
      'On top of the ratings sit Elo, a rating for the starting quarterback, injuries weighted by how much each missing player actually plays, rest days, weather, and the betting line.',
    ],
  },
  {
    heading: 'Models',
    body: [
      'Small, regularised ensembles: logistic and ridge regression averaged with shallow LightGBM trees. One variant never sees the betting line and one does. With about 5,400 training games a neural network would memorise noise, so I picked models sized to the data.',
      'Predicted margins and totals are turned into a full distribution over real NFL scores, so the winner, spread and total always agree with each other.',
    ],
  },
];

const AFTER_TEST: { heading: string; body: string[] }[] = [
  {
    heading: 'How the site presents it',
    body: [
      'Because the model ties the market, the site doesn’t sell picks. It shows the model next to the sportsbook and the historical hit rate of every kind of pick. Each call is logged before kickoff and graded after the final whistle, and the running record is public. It’s a calibrated second opinion, not a lock of the week.',
    ],
  },
  {
    heading: 'Keeping it running',
    body: [
      'The model retrains weekly as a champion and challenger: a new version only goes live if its walk-forward log loss is no more than 0.005 worse than the current one. Drift is monitored, every prediction goes into an append-only log, and a failing test blocks publishing. There are more than 150 Python tests, 34 web tests and a daily browser test at phone and desktop widths.',
      'Every page is read-only, so the pipeline exports the API into about 1,400 static JSON files and publishes them to Vercel, up to five times on game days. If any step fails, the previous version stays live. It runs on my Mac because the data lake sits on an external SSD.',
    ],
  },
  {
    heading: 'The hardest bug',
    body: [
      'Live win probability showed 69% for a team up 27–7, where roughly 97% is right. Two causes: training rows paired the score after a play with the situation before it, a state that never exists, and ESPN’s feed reports 0–0 on timeout rows. I fixed both, then retrained through 2022, calibrated on 2023–24 and tested on 2025.',
    ],
  },
  {
    heading: 'What I’d do next',
    body: [
      'Line movement from open to close, which needs opening lines that nflverse doesn’t publish. Injuries against depth charts, travel, more than one sportsbook, and moving the pipeline off my Mac and into the cloud.',
    ],
  },
];

const Block: React.FC<{ heading: string; body: string[] }> = ({ heading, body }) => (
  <div>
    <h4 className="mb-3 text-lg font-medium">{heading}</h4>
    <div className="space-y-4 leading-relaxed text-muted">
      {body.map((para) => (
        <p key={para}>{para}</p>
      ))}
    </div>
  </div>
);

const GridironCaseStudy: React.FC = () => (
  <section id="gridiron-case-study" className="border-t border-line">
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-32">
      <div className="md:col-span-4">
        <div className="md:sticky md:top-28">
          <p className="mb-3 font-mono text-xs text-muted">Case study</p>
          <h2 className="font-display text-5xl md:text-6xl">Inside Gridiron</h2>
          <p className="mt-5 leading-relaxed text-muted">
            How a model built from public data ends up level with the sportsbook, and why I published that result.
          </p>
        </div>
      </div>

      <div className="space-y-12 md:col-span-8">
        {STEPS.map((s) => (
          <Block key={s.heading} {...s} />
        ))}

        <div>
          <h4 className="mb-3 text-lg font-medium">The test</h4>
          <div className="space-y-4 leading-relaxed text-muted">
            <p>
              I used a walk-forward backtest: every season from 2015 to 2025 is predicted by a model trained only on
              earlier seasons, across 3,017 games. The result is a tie with the closing line.
            </p>
          </div>
          <table className="mt-6 w-full text-left text-sm tabular-nums">
            <thead>
              <tr className="border-b border-line font-mono text-xs text-muted">
                <th className="py-2 pr-4 font-normal">Measure</th>
                <th className="py-2 pr-4 font-normal">Gridiron</th>
                <th className="py-2 font-normal">Closing line</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r) => (
                <tr key={r.label} className="border-b border-line">
                  <td className="py-3 pr-4">{r.label}</td>
                  <td className="py-3 pr-4 font-medium text-accent">{r.model}</td>
                  <td className="py-3">{r.market}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-6 space-y-4 leading-relaxed text-muted">
            <p>
              Against the spread, no tier of picks cleared the 52.38% break-even you need at −110 on the 2023–2025
              holdout. That is the finding, and the site says so.
            </p>
            <p>
              One over/under filter looked like 54.7% in-sample. On the holdout it fell to 51.1%, so I dropped it
              instead of shipping it.
            </p>
          </div>
        </div>

        {AFTER_TEST.map((s) => (
          <Block key={s.heading} {...s} />
        ))}
      </div>
    </div>
  </section>
);

export default GridironCaseStudy;
