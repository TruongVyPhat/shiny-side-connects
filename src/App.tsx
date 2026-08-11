import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import EventGallery from './components/EventGallery';
import SponsorsSection from './components/SponsorsSection';
import HostSection from './components/HostSection';
import ManifestoSection from './components/ManifestoSection';
import FloatingCalendar from './components/FloatingCalendar';
import Footer from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'gallery'>('home');
  const [activeSection, setActiveSection] = useState('hero');

  // Sync hash routing on load & hash change
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#gallery' || hash === '#/gallery') {
        setCurrentView('gallery');
        setActiveSection('gallery');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentView('home');
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Navigation handler
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'gallery') {
      setCurrentView('gallery');
      setActiveSection('gallery');
      window.location.hash = 'gallery';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView === 'gallery') {
        setCurrentView('home');
        window.location.hash = sectionId === 'hero' ? '' : sectionId;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 50);
      } else {
        setActiveSection(sectionId);
        window.location.hash = sectionId === 'hero' ? '' : sectionId;
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  // Scroll spy on home page
  useEffect(() => {
    if (currentView !== 'home') return;

    const handleScroll = () => {
      const sections = ['hero', 'about', 'events', 'sponsors', 'collaborator'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-white text-black font-sans relative antialiased selection:bg-black selection:text-white flex flex-col justify-between">
      {/* Navbar header */}
      <Navbar 
        activeSection={currentView === 'gallery' ? 'gallery' : activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main View Router */}
      <main className="relative flex-1">
        {currentView === 'gallery' ? (
          <EventGallery onBackToHome={() => handleNavigate('hero')} />
        ) : (
          <>
            <div id="hero">
              <Hero onNavigate={handleNavigate} />
            </div>

            <div id="about">
              <AboutSection />
            </div>

            <div id="events">
              <EventsSection />
            </div>

            <div id="sponsors">
              <SponsorsSection />
            </div>

            <ManifestoSection />

            <div id="collaborator">
              <HostSection />
            </div>
          </>
        )}
      </main>

      {/* Footer block */}
      <Footer />

      {/* Floating Action Event Calendar (on Home) */}
      {currentView === 'home' && <FloatingCalendar />}
    </div>
  );
}

