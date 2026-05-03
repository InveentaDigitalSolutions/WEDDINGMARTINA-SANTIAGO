import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
  children: ReactNode;
  delay?: number; // ms
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

/**
 * Fade + slide-up on scroll into view. Uses IntersectionObserver.
 * Honors prefers-reduced-motion (no animation, just renders).
 */
export function Reveal({ children, delay = 0, as: Tag = 'div', className }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setShown(true);
      return;
    }
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const cls = ['reveal', shown ? 'in' : '', className].filter(Boolean).join(' ');
  // @ts-expect-error dynamic Tag
  return <Tag ref={ref} className={cls} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}
