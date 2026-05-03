import { useTranslation } from 'react-i18next';
import { Ornament } from './Ornament';
import { Reveal } from './Reveal';
import { asset } from '../lib/asset';

export function Invite() {
  const { t } = useTranslation();
  return (
    <section id="invite">
      <div className="container">
        <Reveal>
          <h2 className="section-title">{t('invite.title')}</h2>
          <p className="section-sub">{t('invite.sub')}</p>
          <Ornament variant="fleur" />
          <p style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto 2rem', color: 'var(--ink-soft)', fontStyle: 'italic' }}>
            {t('invite.intro')}
          </p>
          <div className="invite-grid">
            <a href={asset('photos/invite-1.jpg')} target="_blank" rel="noreferrer" className="invite-card">
              <img src={asset('photos/invite-1.jpg')} alt="Invitación · página 1" loading="lazy" />
            </a>
            <a href={asset('photos/invite-2.jpg')} target="_blank" rel="noreferrer" className="invite-card">
              <img src={asset('photos/invite-2.jpg')} alt="Invitación · página 2" loading="lazy" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
