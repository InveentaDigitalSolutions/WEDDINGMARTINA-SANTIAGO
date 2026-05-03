import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import {
  Greeting,
  Strip,
  Travel,
  Lodging,
  Schedule,
  DayBefore,
  Rsvp,
  Footer,
} from './components/Sections';
import { Places } from './components/Places';
import { Gate } from './components/Gate';
import { Loading } from './components/Loading';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function Home() {
  return (
    <>
      <Hero />
      <Greeting />
      <Strip />
      <DayBefore />
      <Schedule />
      <Travel />
      <Lodging />
      <Rsvp />
    </>
  );
}

function PlacesPage() {
  return (
    <>
      <Places />
    </>
  );
}

export default function App() {
  return (
    <Loading>
      <Gate>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollManager />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<PlacesPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Gate>
    </Loading>
  );
}
