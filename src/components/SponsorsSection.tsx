import React from 'react';
import { HeartHandshake, Mail } from 'lucide-react';

interface Partner {
  name: string;
  category: string;
  description: string;
  logoText: string;
  badge: string;
}

export default function SponsorsSection() {
  const primaryPartners: Partner[] = [
    {
      name: 'Triumph Motorcycles',
      category: 'Official Motorcycle Partner',
      description: 'Supporting human connection and custom heritage motorcycle culture globally across countless city chapters.',
      logoText: 'TRIUMPH',
      badge: 'Global Partner'
    },
    {
      name: 'Stumptown Coffee Roasters',
      category: 'Premium Espresso Curator',
      description: 'Fueling local community hosts with award-winning custom blends and supporting independent cafe culture.',
      logoText: 'STUMPTOWN',
      badge: 'Official Coffee'
    },
    {
      name: 'Hedon Helmets',
      category: 'Safety & Lifestyle Craft',
      description: 'Fusing clean classic aesthetics with premium safety technology, sponsoring community photo awards.',
      logoText: 'HEDON',
      badge: 'Design Award'
    },
    {
      name: 'Deus Ex Machina',
      category: 'Street & Apparel Culture',
      description: 'Sharing our appreciation for cross-country exploration, attitude-free riding, and local sidewalk social gatherings.',
      logoText: 'DEUS',
      badge: 'Heritage'
    }
  ];

  return (
    <section id="sponsors" className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-semibold font-mono uppercase tracking-[0.25em] text-neutral-400 block">
            Backed By Genuine Brands
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-950">
            Our Proud Sponsors
          </h2>
          <div className="h-0.5 w-16 bg-black mx-auto mt-3"></div>
          <p className="text-neutral-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            We partner with progressive brands who believe in our absolute core values: inclusion, genuine warmth, and premium offline coffee hospitality.
          </p>
        </div>

        {/* Gray Sleek Logo Strip */}
        <div className="bg-neutral-50 border border-neutral-100 py-10 px-6 sm:px-12 flex flex-wrap justify-center items-center gap-12 lg:gap-20">
          {primaryPartners.map((partner) => (
            <div key={partner.name} className="group text-center cursor-default shrink-0">
              <span className="font-serif text-2xl font-black tracking-[0.15em] text-neutral-300 transition-colors duration-300 group-hover:text-black">
                {partner.logoText}
              </span>
              <span className="block text-[9px] font-extrabold text-neutral-400 uppercase tracking-widest mt-1">
                {partner.category}
              </span>
            </div>
          ))}
        </div>

        {/* Sponsor Call to Action Box */}
        <div className="max-w-3xl mx-auto border border-neutral-200 bg-neutral-50 p-6 sm:p-10 text-center space-y-6">
          <div className="space-y-3">
            <div className="flex justify-center text-neutral-900">
              <HeartHandshake size={32} className="stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl text-neutral-950 font-bold">
              Want to Support the Movement?
            </h3>
            <p className="text-xs text-neutral-500 font-light max-w-lg mx-auto leading-relaxed">
              Whether you are an independent local roastery, a classic gear artisan, or an established global brand, help us power warm sidewalk cafes and bring people together offline.
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="mailto:partnerships@themotosocial.com?subject=Brand%20Sponsorship%20Inquiry%20-%20The%20Moto%20Social"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white hover:bg-neutral-800 active:scale-95 px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow font-mono"
            >
              Get Partnership Deck
              <Mail size={12} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
