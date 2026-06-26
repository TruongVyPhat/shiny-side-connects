import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import EventsSection from './components/EventsSection';
import SponsorsSection from './components/SponsorsSection';
import HostSection from './components/HostSection';
import ManifestoSection from './components/ManifestoSection';
import FloatingCalendar from './components/FloatingCalendar';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Nav scroll behavior
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans relative antialiased selection:bg-black selection:text-white">
      {/* Navbar header */}
      <Navbar 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Single-View Scrolling Sections */}
      <main className="relative">
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
      </main>

      {/* Footer block */}
      <Footer />

      {/* Floating Action Event Calendar */}
      <FloatingCalendar />
    </div>
  );
}
