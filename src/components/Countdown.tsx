import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const WEDDING = new Date('2026-10-19T15:30:00+02:00');

function daysLeft(): number {
  const now = new Date();
  const ms = WEDDING.getTime() - now.getTime();
  return Math.max(0, Math.ceil(ms / 86400000));
}

export function Countdown() {
  const { t } = useTranslation();
  const [days, setDays] = useState(daysLeft);

  useEffect(() => {
    // Recalculate at next midnight, then daily.
    const id = window.setInterval(() => setDays(daysLeft()), 60 * 60 * 1000);
    return () => window.clearInterval(id);
  }, []);

  if (days === 0) {
    return (
      <div className="countdown" aria-live="polite">
        <span className="num">·</span>
        <span className="lbl">{t('countdown.today')}</span>
      </div>
    );
  }
  return (
    <div className="countdown" aria-live="polite">
      <span className="num">{days}</span>
      <span className="lbl">{t('countdown.label', { count: days })}</span>
    </div>
  );
}
