import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CitiesSection from './components/CitiesSection';
import HostSection from './components/HostSection';
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
      const sections = ['hero', 'about', 'cities', 'host'];
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

        {/* Dynamic transition block */}
        <div className="bg-black text-white text-center py-16 px-4">
          <p className="font-serif italic text-2xl max-w-2xl mx-auto leading-relaxed font-light">
            "We don't care what you ride. We care who you are. The motorcycle is simply the vehicle that parks us on the same sidewalk."
          </p>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-neutral-400 block mt-3">— THE MANIFESTO</span>
        </div>

        <div id="cities">
          <CitiesSection />
        </div>

        <div id="host">
          <HostSection />
        </div>
      </main>

      {/* Footer block */}
      <Footer />
    </div>
  );
}
