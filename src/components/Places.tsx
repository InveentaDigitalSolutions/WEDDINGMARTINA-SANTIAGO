import { useTranslation } from 'react-i18next';
import { Photo } from './Photo';
import { Ornament } from './Ornament';

const ORDER = [
  'miramare',
  'trieste',
  'canal',
  'molo',
  'sangiusto',
  'caffe',
  'faro',
  'sistiana',
  'venice',
  'grotta',
] as const;

const PHOTO: Record<(typeof ORDER)[number], string> = {
  miramare: '/photos/miramare.jpg',
  trieste: '/photos/piazza.jpg',
  canal: '/photos/canal-grande.jpg',
  molo: '/photos/molo-audace.jpg',
  sangiusto: '/photos/sangiusto-castle.jpg',
  caffe: '/photos/caffe.jpg',
  faro: '/photos/faro.jpg',
  sistiana: '/photos/sistiana.jpg',
  venice: '/photos/gondola.jpg',
  grotta: '/photos/grotta.jpg',
};

// Per-place photo aspect overrides (portrait photos look better as `tall`)
const TALL: Set<string> = new Set();

type Item = {
  name: string;
  eyebrow: string;
  p1: string;
  p2?: string;
};

export function Places() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="container">
        <h2 className="section-title">{t('places.title')}</h2>
        <p className="section-sub">{t('places.sub')}</p>
        <Ornament variant="olive" />
        <p className="trieste-intro">
          {t('places.aboutTrieste')}
        </p>
        <p style={{ textAlign: 'center', maxWidth: 620, margin: '0 auto', color: 'var(--ink-faint)', fontStyle: 'italic', fontSize: '0.95rem' }}>
          {t('places.intro')}
        </p>

        {ORDER.map((key, i) => {
          const item = t(`places.items.${key}`, { returnObjects: true }) as Item;
          return (
            <article key={key} className={`place-card${i % 2 ? ' flip' : ''}`}>
              <div className="place-photo">
                <Photo
                  src={PHOTO[key]}
                  alt={item.name}
                  label={item.name}
                  className={TALL.has(key) ? 'tall' : undefined}
                />
              </div>
              <div className="place-text">
                <div className="place-eyebrow">{item.eyebrow}</div>
                <h3>{item.name}</h3>
                <p>{item.p1}</p>
                {item.p2 && <p>{item.p2}</p>}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
