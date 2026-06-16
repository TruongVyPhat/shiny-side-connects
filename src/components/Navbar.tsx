import { useState } from 'react';
import { Menu, X, Radio } from 'lucide-react';

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
    { id: 'cities', label: 'Cities & Events' },
    { id: 'host', label: 'Join the Team' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-black text-white p-2 rounded-none transition-transform group-hover:rotate-12 duration-300">
              <Radio size={20} className="stroke-[2.5]" />
            </div>
            <span className="font-extrabold tracking-[0.25em] text-sm uppercase text-black font-sans">
              THE MOTO SOCIAL
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
                    ? 'border-black text-black' 
                    : 'border-transparent text-neutral-500 hover:text-black hover:border-neutral-200'
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
              className="p-2 border border-neutral-200 rounded-none text-black focus:outline-none"
              aria-label="Open Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white/98 backdrop-blur-lg absolute left-0 right-0 py-6 px-4 space-y-4 shadow-xl z-50 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-xs uppercase tracking-[0.2em] font-bold py-3 px-4 border-l-4 transition-colors duration-150 ${
                  activeSection === item.id 
                    ? 'border-black bg-neutral-50 text-black' 
                    : 'border-transparent text-neutral-500 hover:text-black hover:bg-neutral-50'
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
