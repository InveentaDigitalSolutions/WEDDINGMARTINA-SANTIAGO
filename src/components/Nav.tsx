import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LANGS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
];

export function Nav() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === '/';

  const close = () => setOpen(false);

  const link = (hash: string, label: string) =>
    onHome ? (
      <a href={`#${hash}`} onClick={close}>{label}</a>
    ) : (
      <Link to={`/#${hash}`} onClick={close}>{label}</Link>
    );

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close} aria-label="Martina & Santiago">
          M &amp; S
        </Link>

        <ul className={`nav-links${open ? ' open' : ''}`}>
          <li>{link('schedule', t('nav.schedule'))}</li>
          <li>{link('travel', t('nav.travel'))}</li>
          <li>{link('venue', t('nav.venue'))}</li>
          <li>
            <NavLink to="/places" onClick={close} className={({ isActive }) => (isActive ? 'active' : '')}>
              {t('nav.thingsToDo')}
            </NavLink>
          </li>
          <li>{link('rsvp', t('nav.rsvp'))}</li>
        </ul>

        <div className="lang-switch" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={i18n.language.startsWith(l.code) ? 'active' : ''}
              onClick={() => i18n.changeLanguage(l.code)}
              aria-label={l.label}
            >
              {l.label}
            </button>
          ))}
        </div>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={t('nav.menu') as string}
          aria-expanded={open}
        >
          {open ? '×' : '☰'}
        </button>
      </div>
    </nav>
  );
}
