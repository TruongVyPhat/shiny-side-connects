import { useState, useEffect } from 'react';
import { Menu, X, Radio } from 'lucide-react';
import siteText from '../siteText.json';
import logoNoBg from '../assets/logo_no_bg.png';
import { getCanadaCurrentTime, CanadaTimeInfo } from '../utils/canadaTime';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  cart?: any[];
  onOpenCart?: () => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [canadaTime, setCanadaTime] = useState<CanadaTimeInfo>(getCanadaCurrentTime());

  // Update live clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCanadaTime(getCanadaCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const navItems = siteText.navbar.menuItems;

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10 font-sans">
      {/* Top micro ticker for Canada Time */}
      <div className="bg-neutral-950/90 border-b border-white/5 py-1 px-4 sm:px-8 text-[11px] font-mono text-neutral-400 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-neutral-300 font-semibold">CANADA (EDMONTON, AB)</span>
          <span className="text-white font-bold">{canadaTime.formattedDate}</span>
          <span className="text-neutral-400 hidden sm:inline">• {canadaTime.timeString} {canadaTime.timezoneAbbr}</span>
        </div>
        <button 
          onClick={() => handleNavClick('events')}
          className="flex items-center gap-1.5 text-red-400 hover:text-red-300 font-bold uppercase tracking-wider transition-colors cursor-pointer group"
        >
          <Radio size={11} className="text-red-400 animate-pulse" />
          <span>1 MEETUP TODAY</span>
          <span className="text-[9px] bg-red-600/30 text-red-300 border border-red-500/40 px-1 py-0.5 ml-1 hidden xs:inline">VIEW</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="h-9 w-9 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-300">
              <img 
                src={logoNoBg} 
                alt={siteText.navbar.logoAlt} 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-extrabold tracking-[0.2em] text-xs sm:text-sm uppercase text-white font-sans whitespace-nowrap">
              {siteText.navbar.title}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors py-2 border-b-2 duration-200 relative ${
                  activeSection === item.id 
                    ? 'border-white text-white' 
                    : 'border-transparent text-neutral-300 hover:text-white hover:border-white/30'
                }`}
              >
                {item.label}
                {item.id === 'events' && (
                  <span className="absolute -top-1.5 -right-3 px-1 py-0.2 bg-red-600 text-white text-[8px] font-mono font-bold leading-none animate-pulse">
                    TODAY
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* Hamburger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 border border-white/20 hover:border-white/40 rounded-none text-white focus:outline-none"
              aria-label="Open Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/95 backdrop-blur-lg absolute left-0 right-0 py-6 px-4 space-y-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-xs uppercase tracking-[0.2em] font-bold py-3 px-4 border-l-4 transition-colors duration-150 flex items-center justify-between ${
                  activeSection === item.id 
                    ? 'border-white bg-white/10 text-white' 
                    : 'border-transparent text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {item.id === 'events' && (
                  <span className="bg-red-600 text-white px-2 py-0.5 text-[9px] font-mono font-bold animate-pulse">
                    1 EVENT TODAY
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

