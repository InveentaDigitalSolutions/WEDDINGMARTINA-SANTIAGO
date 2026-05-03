import { useTranslation } from 'react-i18next';
import { RichText } from './RichText';
import { Photo } from './Photo';
import { Ornament } from './Ornament';
import { Reveal } from './Reveal';
import { Icon } from './Icon';
import { asset } from '../lib/asset';

const MAP_AIRPORT = 'https://www.google.com/maps/place/?q=place_id:ChIJgQu1xE01eUcRmUhimHEy8SM';
const MAP_HAMPTON = 'https://www.google.com/maps/place/?q=place_id:ChIJvduAx6SxfkcRzpkITw8L1dA';
const HAMPTON_BOOK = 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=VCEIN';
const MAP_TIVOLI = 'https://www.google.com/maps/place/?q=place_id:ChIJnS3k1qYNe0cRJHM9HZC-lKE';
const TIVOLI_SITE = 'https://www.tivolihotels.com/en/tivoli-portopiccolo-sistiana';
const MAP_CATHEDRAL = 'https://www.google.com/maps/place/?q=place_id:ChIJHz5rYnRre0cRLw1tzldSVUI';
const MAP_TRANSIT_VENICE_TRIESTE =
  'https://www.google.com/maps/dir/?api=1&origin=Venice+Marco+Polo+Airport&destination=Trieste+Centrale&travelmode=transit';
const TRENITALIA = 'https://www.trenitalia.com/en.html';

const PHONE_HN = '+504 9612 3277';
const PHONE_DE = '+49 176 6144 4048';
const WA_HN = 'https://wa.me/50496123277';
const WA_DE = 'https://wa.me/491766144048';

export function Greeting() {
  const { t } = useTranslation();
  return (
    <section id="welcome" className="container greeting">
      <Reveal>
        <h2 className="section-title">{t('greeting.title')}</h2>
        <p className="section-sub">{t('greeting.sub')}</p>
        <Ornament variant="olive" />
        <p>{t('greeting.p1')}</p>
        <p>{t('greeting.p2')}</p>
        <p>{t('greeting.p3')}</p>
        <p className="greeting-parents">{t('greeting.p4')}</p>
        <p>{t('greeting.p5')}</p>
        <figure className="couple-photo">
          <img src={asset('photos/couple.jpg')} alt="Martina & Santiago" />
        </figure>
        <p className="greeting-signoff">{t('greeting.p6')}</p>
      </Reveal>
    </section>
  );
}

export function Strip() {
  return (
    <Reveal as="div" className="strip">
      <Photo src="/photos/trieste.jpg" alt="Trieste" label="Trieste" />
      <Photo src="/photos/sangiusto.jpg" alt="San Giusto" label="San Giusto" />
      <Photo src="/photos/sistiana.jpg" alt="Sistiana" label="Sistiana" />
      <Photo src="/photos/miramare.jpg" alt="Miramare" label="Miramare" />
    </Reveal>
  );
}

type ScheduleItem = { time: string; event: string };

export function Schedule() {
  const { t } = useTranslation();
  const items = t('bigDay.schedule', { returnObjects: true }) as ScheduleItem[];
  return (
    <section id="schedule">
      <div className="container">
        <Reveal>
        <h2 className="section-title">{t('bigDay.title')}</h2>
        <p className="section-sub">{t('bigDay.sub')}</p>
        <Ornament variant="diamond" />
        </Reveal>

        <div className="grid-2">
          <div className="place-photo">
            <Photo
              src="/photos/sangiusto.jpg"
              alt="Catedral de San Giusto"
              label="Cattedrale di San Giusto"
              className="tall"
            />
          </div>
          <div>
            <div className="card">
              <div className="card-title">
                <Icon name="church" />
                <span>{t('bigDay.ceremony.title')}</span>
              </div>
              <div className="meta">{t('bigDay.ceremony.address')}</div>
              <div className="meta">
                <a href={MAP_CATHEDRAL} target="_blank" rel="noreferrer" className="link-icon">
                  <Icon name="pin" size={14} />
                  <span>{t('bigDay.ceremony.mapLabel')}</span>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="card-title">
                <Icon name="star" />
                <span>{t('bigDay.dressCode.title')}</span>
              </div>
              <div className="meta"><RichText text={t('bigDay.dressCode.p1')} /></div>
              <div className="meta"><RichText text={t('bigDay.dressCode.p2')} /></div>
              <div className="meta">{t('bigDay.dressCode.p3')}</div>
            </div>
          </div>
        </div>

        <ul className="timeline">
          {items.map((item, i) => (
            <li key={i}>
              <span className="time">{item.time}</span>
              <span className="event">{item.event}</span>
            </li>
          ))}
        </ul>
        <p className="small-note">{t('bigDay.note')}</p>
      </div>
    </section>
  );
}

export function Travel() {
  const { t } = useTranslation();
  return (
    <section id="travel" className="tinted">
      <div className="container">
        <Reveal>
        <h2 className="section-title">{t('travel.title')}</h2>
        <p className="section-sub">{t('travel.sub')}</p>
        <Ornament variant="diamond" />
        </Reveal>

        <div className="grid-2">
          <div>
            <p><RichText text={t('travel.p1')} /></p>
            <div className="card">
              <div className="card-title">
                <Icon name="plane" />
                <span>{t('travel.airport.title')}</span>
              </div>
              <div className="meta">{t('travel.airport.address')}</div>
              <div className="meta">
                <a href={MAP_AIRPORT} target="_blank" rel="noreferrer" className="link-icon">
                  <Icon name="pin" size={14} />
                  <span>{t('travel.airport.mapLabel')}</span>
                </a>
              </div>
            </div>
            <p><RichText text={t('travel.p2')} /></p>
            <div className="card">
              <div className="card-title">
                <Icon name="hotel" />
                <span>{t('travel.hotelVenice.title')}</span>
              </div>
              <div className="meta"><strong>{t('travel.hotelVenice.name')}</strong></div>
              <div className="meta">{t('travel.hotelVenice.note')}</div>
              <div className="meta">
                <a href={MAP_HAMPTON} target="_blank" rel="noreferrer" className="link-icon">
                  <Icon name="pin" size={14} />
                  <span>{t('travel.hotelVenice.mapLabel')}</span>
                </a>
                {' · '}
                <a href={HAMPTON_BOOK} target="_blank" rel="noreferrer">{t('travel.hotelVenice.bookLabel')}</a>
              </div>
            </div>
          </div>
          <div>
            <Photo src="/photos/venice.jpg" alt="Venice sunset" label="Venezia" className="tall" />
          </div>
        </div>

        <Ornament variant="olive" />

        <h2 className="section-title">{t('travel.transport.title')}</h2>
        <p className="section-sub">{t('travel.transport.sub')}</p>

        <p style={{ maxWidth: 720, margin: '1.5rem auto 0', textAlign: 'center' }}>
          <RichText text={t('travel.transport.p1')} />
        </p>

        <p style={{ maxWidth: 720, margin: '2rem auto 0', textAlign: 'center' }}>
          <RichText text={t('travel.transport.p2intro')} />
        </p>

        <ol className="transit-steps">
          {(t('travel.transport.steps', { returnObjects: true }) as string[]).map((step, i) => (
            <li key={i}><RichText text={step} /></li>
          ))}
        </ol>

        <div className="transit-links">
          <a href={MAP_TRANSIT_VENICE_TRIESTE} target="_blank" rel="noreferrer" className="link-icon">
            <Icon name="map" size={14} />
            <span>{t('travel.transport.mapsLabel')}</span>
          </a>
          <a href={TRENITALIA} target="_blank" rel="noreferrer" className="link-icon">
            <Icon name="train" size={14} />
            <span>{t('travel.transport.bookTrainLabel')}</span>
          </a>
        </div>

        <p style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <RichText text={t('travel.transport.byCar')} />
        </p>

        <div className="callout">
          <RichText text={t('travel.transport.callout')} />
        </div>
      </div>
    </section>
  );
}

export function Lodging() {
  const { t } = useTranslation();
  return (
    <>
      <div className="band">
        <img src={asset('photos/sistiana.jpg')} alt="Bahía de Sistiana" />
        <div className="band-caption">
          <div className="script">Sistiana</div>
          <div className="sub">{t('lodging.sub')}</div>
        </div>
      </div>
      <section id="venue">
        <div className="container">
          <Reveal>
          <h2 className="section-title">{t('lodging.title')}</h2>
          <p className="section-sub">{t('lodging.sub')}</p>
          <Ornament variant="diamond" />
          </Reveal>

          <div className="grid-2">
            <div>
              <p><RichText text={t('lodging.p1')} /></p>
              <div className="card">
                <div className="card-title">
                  <Icon name="leaf" />
                  <span>{t('lodging.resort.title')}</span>
                </div>
                <div className="meta">{t('lodging.resort.address')}</div>
                <div className="meta">
                  <a href={MAP_TIVOLI} target="_blank" rel="noreferrer" className="link-icon">
                    <Icon name="pin" size={14} />
                    <span>{t('lodging.resort.mapLabel')}</span>
                  </a>
                  {' · '}
                  <a href={TIVOLI_SITE} target="_blank" rel="noreferrer">{t('lodging.resort.siteLabel')}</a>
                </div>
              </div>
              <p><RichText text={t('lodging.p2')} /></p>
            </div>
            <Photo src="/photos/sistiana.jpg" alt="Tivoli Portopiccolo" label="Portopiccolo · Sistiana" />
          </div>

          <div className="callout">
            <RichText text={t('lodging.callout')} />
          </div>
        </div>
      </section>
    </>
  );
}

export function DayBefore() {
  const { t } = useTranslation();
  return (
    <section id="day-before" className="tinted">
      <div className="container">
        <Reveal>
        <h2 className="section-title">{t('dayBefore.title')}</h2>
        <p className="section-sub">{t('dayBefore.sub')}</p>
        <Ornament variant="olive" />
        <p style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--ink-soft)' }}>
          <RichText text={t('dayBefore.p1')} />
        </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Rsvp() {
  const { t } = useTranslation();
  return (
    <>
      <div className="band">
        <img src={asset('photos/piazza.jpg')} alt="Piazza Unità d'Italia" />
        <div className="band-caption">
          <div className="script">RSVP</div>
          <div className="sub">{t('rsvp.sub')}</div>
        </div>
      </div>
      <section id="rsvp">
        <div className="container">
          <Reveal>
          <h2 className="section-title">{t('rsvp.title')}</h2>
          <p className="section-sub">{t('rsvp.sub')}</p>
          <Ornament variant="diamond" />
          <p style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto', color: 'var(--ink-soft)' }}>
            {t('rsvp.intro')}
          </p>
          <div className="rsvp-box">
            <strong>{t('rsvp.label')}</strong>
            <a href={WA_HN} target="_blank" rel="noreferrer">{PHONE_HN}</a>
            <br />
            <a href={WA_DE} target="_blank" rel="noreferrer">{PHONE_DE}</a>
          </div>
          <p className="rsvp-allergies">
            <RichText text={t('rsvp.allergiesNote')} />
          </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="signoff">{t('footer.signoff')}</div>
      <div className="names">{t('footer.names')}</div>
      <div className="meta">19 · 10 · 2026 · Trieste</div>
    </footer>
  );
}
