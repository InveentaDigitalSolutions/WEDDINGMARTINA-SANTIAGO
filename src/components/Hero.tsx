import { useTranslation } from 'react-i18next';
import { CSSProperties } from 'react';
import { Countdown } from './Countdown';
import { asset } from '../lib/asset';

const heroStyle = {
  '--hero-image': `url(${asset('photos/hero.jpg')})`,
} as CSSProperties;

export function Hero() {
  const { t } = useTranslation();
  return (
    <header className="hero" id="top" style={heroStyle}>
      <div className="hero-inner">
        <p className="pretitle">Save the date</p>
        <h1 className="couple">
          Martina <span className="amp">&amp;</span> Santiago
        </h1>
        <div className="date-line">
          <span className="rule" />
          <span className="date">{t('hero.date')}</span>
          <span className="rule" />
        </div>
        <p className="place">{t('hero.place')}</p>
        <Countdown />
      </div>
    </header>
  );
}
