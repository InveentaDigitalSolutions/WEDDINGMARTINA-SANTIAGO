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
import { Invite } from './components/Invite';
import { Gate } from './components/Gate';
import { Loading } from './components/Loading';

// Sticky nav height + a touch of breathing room
const NAV_OFFSET = 84;

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        // Explicit offset is more reliable on iOS Safari than relying on
        // scroll-margin-top + scrollIntoView alone.
        const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
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

function InvitePage() {
  return (
    <>
      <Invite />
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
            <Route path="/invite" element={<InvitePage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Gate>
    </Loading>
  );
}
