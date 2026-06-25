import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const logoImg = "https://drive.google.com/thumbnail?id=1NfDnf2BbZdelg_ALX0npN_4ZV86H9vv1&sz=w400";

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  cart?: any[];
  onOpenCart?: () => void;
}

export default function Navbar({ activeSection, onNavigate, cart, onOpenCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'events', label: 'Events' },
    { id: 'sponsors', label: 'Sponsors' },
    { id: 'collaborator', label: 'Collaborators' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/35 backdrop-blur-md border-b border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="h-10 w-10 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105 duration-300">
              <img 
                src={logoImg} 
                alt="Shiny Side Connects logo" 
                className="h-full w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-extrabold tracking-[0.2em] text-xs sm:text-sm uppercase text-white font-sans whitespace-nowrap">
              SHINY SIDE CONNECTS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[13px] font-semibold uppercase tracking-[0.15em] transition-colors py-2 border-b-2 duration-200 ${
                  activeSection === item.id 
                    ? 'border-white text-white' 
                    : 'border-transparent text-neutral-300 hover:text-white hover:border-white/30'
                }`}
              >
                {item.label}
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
                className={`text-left text-xs uppercase tracking-[0.2em] font-bold py-3 px-4 border-l-4 transition-colors duration-150 ${
                  activeSection === item.id 
                    ? 'border-white bg-white/10 text-white' 
                    : 'border-transparent text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
