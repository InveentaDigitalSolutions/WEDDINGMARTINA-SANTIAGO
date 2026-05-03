import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import es from './locales/es.json';
import en from './locales/en.json';
import it from './locales/it.json';

const STORAGE_KEY = 'wsm-lang';

const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
const browser = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : 'es';
const initial = stored || (['es', 'en', 'it'].includes(browser) ? browser : 'es');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      it: { translation: it },
    },
    lng: initial,
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    returnObjects: true,
  });

i18n.on('languageChanged', (lng) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, lng);
    document.documentElement.lang = lng;
  }
});

if (typeof document !== 'undefined') {
  document.documentElement.lang = initial;
}

export default i18n;
