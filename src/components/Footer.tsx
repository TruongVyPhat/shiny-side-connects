import React, { useState } from 'react';
import { Mail, Instagram, Facebook, Send, Check, MessageSquare, Users, Calendar } from 'lucide-react';
import siteText from '../siteText.json';

const logoImg = "https://drive.google.com/thumbnail?id=1NfDnf2BbZdelg_ALX0npN_4ZV86H9vv1&sz=w400";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="bg-neutral-950 text-white font-sans border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-900 pb-12 mb-12">
          {/* Column 1: Info and Wordmark */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 overflow-hidden">
                <img 
                  src={logoImg} 
                  alt="Shiny Side Connects logo" 
                  className="h-full w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-extrabold tracking-[0.2em] text-sm uppercase text-white font-sans">
                SHINY SIDE CONNECTS
              </span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm font-light">
              {siteText.footer.description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {/* Discord */}
              <div className="relative group">
                <a 
                  href="https://discord.com/invite/SZSFBmzA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:bg-neutral-900" 
                  aria-label="Discord"
                >
                  <MessageSquare size={16} />
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase text-white bg-neutral-900 border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                  Discord
                </span>
              </div>

              {/* Instagram */}
              <div className="relative group">
                <a 
                  href="https://www.instagram.com/shinysideconnects/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:bg-neutral-900" 
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase text-white bg-neutral-900 border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                  Instagram
                </span>
              </div>

              {/* Facebook Page */}
              <div className="relative group">
                <a 
                  href="https://www.facebook.com/shinysideconnects/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:bg-neutral-900" 
                  aria-label="Facebook Page"
                >
                  <Facebook size={16} />
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase text-white bg-neutral-900 border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                  Facebook Page
                </span>
              </div>

              {/* Facebook Group */}
              <div className="relative group">
                <a 
                  href="https://www.facebook.com/groups/5234400616773955" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-neutral-800 hover:border-white text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center bg-neutral-950 hover:bg-neutral-900" 
                  aria-label="Facebook Group"
                >
                  <Users size={16} />
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase text-white bg-neutral-900 border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                  Facebook Group
                </span>
              </div>

              {/* Event Page */}
              <div className="relative group">
                <a 
                  href="https://www.facebook.com/events/2487325615114760/?rdid=YWaDxWmheU8WkTXG&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1F5ZwGBs7A%2F#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-white/20 bg-white/[0.03] hover:bg-white text-white hover:text-black transition-all duration-200 flex items-center justify-center" 
                  aria-label="Event Invite"
                >
                  <Calendar size={16} />
                </a>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[9px] font-mono tracking-wider uppercase text-white bg-neutral-900 border border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 shadow-xl">
                  Event Info
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick navigation anchors */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">{siteText.footer.navHeader}</h4>
            <ul className="space-y-2 text-xs text-neutral-300 font-light font-sans">
              {siteText.footer.chapters.map((chapter) => (
                <li key={chapter}>
                  <span className="text-neutral-400 hover:text-white cursor-pointer transition-colors">
                    {chapter}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Custom local newsletter signups */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">{siteText.footer.dispatchHeader}</h4>
            <p className="text-neutral-400 text-xs font-light leading-relaxed">
              {siteText.footer.dispatchDescription}
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={subscribed ? siteText.footer.dispatchActivePlaceholder : siteText.footer.dispatchPlaceholder}
                  disabled={subscribed}
                  className={`w-full bg-neutral-900 border text-xs px-4 py-3 pr-10 focus:outline-none transition-all ${
                    subscribed 
                      ? 'border-emerald-500 text-emerald-400' 
                      : 'border-neutral-800 focus:border-white'
                  }`}
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 text-neutral-400 hover:text-white cursor-pointer"
                  aria-label="Submit subscriber"
                >
                  {subscribed ? <Check size={14} className="text-emerald-400" /> : <Send size={14} />}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom copyright items */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-neutral-500 font-light space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} {siteText.footer.copyrightSuffix}</p>
          <div className="flex space-x-6">
            {siteText.footer.links.map((link) => (
              <span key={link} className="hover:text-white cursor-pointer transition-colors">
                {link}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
