import { useEffect, useState, ReactNode } from 'react';

const SESSION_KEY = 'wsm-splash-shown';
const HOLD_MS = 1400;
const FADE_MS = 700;

type Props = { children: ReactNode };

export function Loading({ children }: Props) {
  const [done, setDone] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.sessionStorage.getItem(SESSION_KEY) === '1';
  });
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (done) return;
    const fadeAt = window.setTimeout(() => setFading(true), HOLD_MS);
    const removeAt = window.setTimeout(() => {
      window.sessionStorage.setItem(SESSION_KEY, '1');
      setDone(true);
    }, HOLD_MS + FADE_MS);
    return () => {
      window.clearTimeout(fadeAt);
      window.clearTimeout(removeAt);
    };
  }, [done]);

  return (
    <>
      {children}
      {!done && (
        <div className={`splash${fading ? ' fade' : ''}`} aria-hidden="true">
          <div className="splash-inner">
            <div className="splash-monogram">
              M <span className="amp">&amp;</span> S
            </div>
            <div className="splash-rule" />
            <div className="splash-meta">19 · 10 · 2026 · TRIESTE</div>
          </div>
        </div>
      )}
    </>
  );
}
