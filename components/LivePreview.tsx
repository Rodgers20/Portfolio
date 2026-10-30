import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MousePointerClick, Play } from 'lucide-react';

// The embedded site renders at a fixed desktop size and is scaled to fit the card,
// so it looks the same as the real thing instead of a squeezed mobile layout.
const FRAME_W = 1280;
const FRAME_H = 800;
const HOVER_INTENT_MS = 350;

interface LivePreviewProps {
  title: string;
  url: string;
  image?: string;
  imageAlt?: string;
  /** Chrome tuned for the dark feature panel. */
  onPanel?: boolean;
}

const LivePreview: React.FC<LivePreviewProps> = ({ title, url, image, imageAlt, onPanel }) => {
  const stageRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [scale, setScale] = useState(0.5);
  const [active, setActive] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / FRAME_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const host = new URL(url).host;

  return (
    <div
      className={`overflow-hidden ${onPanel ? 'rounded-xl bg-[#2a2723] shadow-2xl ring-1 ring-white/10' : 'rounded-md border border-line bg-raised'}`}
      onPointerEnter={(e) => {
        // Hover-to-preview is for a mouse; touch users tap the button instead.
        if (e.pointerType !== 'mouse' || active) return;
        timer.current = window.setTimeout(() => setActive(true), HOVER_INTENT_MS);
      }}
      onPointerLeave={() => {
        window.clearTimeout(timer.current);
        setInteractive(false);
      }}
    >
      <div className={`flex items-center justify-between gap-4 border-b px-4 py-2.5 ${onPanel ? 'border-white/10' : 'border-line'}`}>
        <span className={`truncate font-mono text-xs ${onPanel ? 'text-[#f3efe7]/55' : 'text-muted'}`}>{host}</span>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`press inline-flex shrink-0 items-center gap-1 text-xs font-medium underline underline-offset-4 ${onPanel ? 'text-[#7fd1b9] decoration-[#7fd1b9]/40 hover:decoration-[#7fd1b9]' : 'text-accent decoration-accent/40 hover:decoration-accent'}`}
        >
          Open full site <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
        </a>
      </div>

      <div ref={stageRef} className="relative w-full overflow-hidden" style={{ aspectRatio: `${FRAME_W} / ${FRAME_H}` }}>
        {image && (
          <img src={image} alt={imageAlt} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-top" />
        )}

        {active && (
          <iframe
            src={url}
            title={`${title} live preview`}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            onLoad={() => setLoaded(true)}
            className="absolute left-0 top-0 border-0 bg-paper"
            style={{
              width: FRAME_W,
              height: FRAME_H,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              opacity: loaded ? 1 : 0,
              transition: 'opacity 300ms var(--ease-out)',
              // Until clicked, the page scrolls past instead of the embed catching the wheel.
              pointerEvents: interactive ? 'auto' : 'none',
            }}
          />
        )}

        {!active && (
          <button
            type="button"
            onClick={() => {
              setActive(true);
              setInteractive(true);
            }}
            className="press absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper shadow-lg"
          >
            <Play className="h-3.5 w-3.5" strokeWidth={2} /> Preview live here
          </button>
        )}

        {active && !interactive && (
          <button
            type="button"
            aria-label={`Interact with the ${title} preview`}
            onClick={() => setInteractive(true)}
            className="absolute inset-0 flex cursor-pointer items-end justify-center pb-4"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/85 px-4 py-2 text-sm font-medium text-paper">
              <MousePointerClick className="h-3.5 w-3.5" strokeWidth={2} /> Click to interact
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default LivePreview;
