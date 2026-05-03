import { useState, FormEvent, ReactNode, CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';

const STORAGE_KEY = 'wsm-gate';
const USER = 'trieste';      // case-insensitive
const PASSWORD = '19102026';

const LANGS = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
  { code: 'it', label: 'IT' },
];

const gateStyle = {
  '--gate-image': 'url(/photos/hero.jpg)',
} as CSSProperties;

type Props = { children: ReactNode };

export function Gate({ children }: Props) {
  const { t, i18n } = useTranslation();
  const [authed, setAuthed] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(STORAGE_KEY) === 'open';
  });
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  if (authed) return <>{children}</>;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userOk = user.trim().toLowerCase() === USER;
    const passOk = pass.trim() === PASSWORD;
    if (userOk && passOk) {
      window.localStorage.setItem(STORAGE_KEY, 'open');
      setAuthed(true);
    } else {
      setError(true);
    }
  };

  const clearError = () => { if (error) setError(false); };

  return (
    <div className="gate" style={gateStyle}>
      <div className="gate-card">
        <div className="gate-brand">M &amp; S</div>
        <div className="gate-date">19 · 10 · 2026 · TRIESTE</div>
        <p className="gate-eyebrow">{t('gate.sub')}</p>

        <form onSubmit={onSubmit} className="gate-form" noValidate>
          <label className="gate-field">
            <span>{t('gate.userLabel')}</span>
            <input
              type="text"
              autoComplete="username"
              spellCheck={false}
              value={user}
              onChange={(e) => { setUser(e.target.value); clearError(); }}
              autoFocus
            />
          </label>
          <label className="gate-field">
            <span>{t('gate.passwordLabel')}</span>
            <input
              type="password"
              autoComplete="current-password"
              value={pass}
              onChange={(e) => { setPass(e.target.value); clearError(); }}
            />
          </label>
          <button type="submit" className="gate-submit">
            {t('gate.submit')}
          </button>
          <p className={`gate-error${error ? ' show' : ''}`} role="alert">
            {t('gate.error')}
          </p>
        </form>

        <p className="gate-help">{t('gate.help')}</p>

        <div className="gate-langs" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              onClick={() => i18n.changeLanguage(l.code)}
              className={i18n.language.startsWith(l.code) ? 'active' : ''}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
