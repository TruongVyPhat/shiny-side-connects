import React, { useState } from 'react';
import { HeartHandshake, Mail, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';
import siteText from '../siteText.json';

import tuluLogo from '../assets/partners/tulu_motors.svg';
import tipsyMooseLogo from '../assets/partners/tipsy_moose.svg';
import noInviteLogo from '../assets/partners/no_invite.svg';
import idleKitchenLogo from '../assets/partners/idle_kitchen.svg';
import foodTruck6asLogo from '../assets/partners/6as_and_j_food.svg';

interface Partner {
  id: string;
  name: string;
  category: string;
  badge: string;
  description: string;
  logoUrl: string;
  aspectClass?: string;
  accentColor: string;
  highlight: string;
}

export default function SponsorsSection() {
  const [activePartnerId, setActivePartnerId] = useState<string | null>(null);

  const partners: Partner[] = [
    {
      id: 'tulu',
      name: 'Tulu Motors',
      category: 'Custom & Moto Partner',
      badge: 'Primary Partner',
      description: 'Custom motorcycle builder and fabrication shop dedicated to community support and two-wheel craftsmanship.',
      logoUrl: tuluLogo,
      aspectClass: 'aspect-square',
      accentColor: '#5bbfa4',
      highlight: 'Custom Moto Fabrication'
    },
    {
      id: 'tipsy-moose',
      name: 'Tipsy Moose Pub & Kitchen',
      category: 'Host & Venue Partner',
      badge: 'Venue Host',
      description: 'Local hospitality hub and neighborhood favorite welcoming Edmonton riders with great food, drinks, and parking.',
      logoUrl: tipsyMooseLogo,
      aspectClass: 'aspect-square',
      accentColor: '#c89656',
      highlight: 'Meetup Venue & Hospitality'
    },
    {
      id: 'no-invite',
      name: 'No Invite',
      category: 'Rider Collective & Apparel',
      badge: 'Culture Partner',
      description: 'Edmonton-born motorcycle riding collective and streetwear label established in 2019, championing authentic street culture.',
      logoUrl: noInviteLogo,
      aspectClass: 'aspect-[3/2]',
      accentColor: '#d9232a',
      highlight: 'Est. 2019 Riding Collective'
    },
    {
      id: 'idle-kitchen',
      name: 'IDLE Kitchen & Coffee',
      category: 'Coffee & Kitchen Partner',
      badge: 'Coffee Partner',
      description: 'Artisanal kitchen and craft roastery crafting high-end espresso and fuel for early morning rides and weekend kickstands.',
      logoUrl: idleKitchenLogo,
      aspectClass: 'aspect-square',
      accentColor: '#111111',
      highlight: 'Artisanal Coffee & Food'
    },
    {
      id: '6as-food',
      name: "6A's & J Food Truck",
      category: 'Street Food & Flavor Partner',
      badge: 'Food Partner',
      description: 'Beloved local food truck serving authentic Filipino comfort dishes, signature flavors, and smiles at community meets.',
      logoUrl: foodTruck6asLogo,
      aspectClass: 'aspect-square',
      accentColor: '#0038a8',
      highlight: 'Authentic Filipino Cuisine'
    }
  ];

  return (
    <section id="sponsors" className="bg-white py-24 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-semibold font-mono uppercase tracking-[0.25em] text-neutral-400 block">
            {siteText.sponsors.badgeText}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-950">
            {siteText.sponsors.headingText}
          </h2>
          <div className="h-0.5 w-16 bg-black mx-auto mt-3"></div>
          <p className="text-neutral-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            {siteText.sponsors.subheadingText}
          </p>
        </div>

        {/* Dynamic Partner Logo Strip & Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {partners.map((partner) => {
            const isHovered = activePartnerId === partner.id;
            return (
              <div
                key={partner.id}
                id={`partner-card-${partner.id}`}
                onMouseEnter={() => setActivePartnerId(partner.id)}
                onMouseLeave={() => setActivePartnerId(null)}
                className={`group relative bg-neutral-50/80 hover:bg-white border transition-all duration-300 p-6 flex flex-col items-center text-center justify-between cursor-pointer rounded-sm ${
                  isHovered 
                    ? 'border-neutral-950 shadow-xl -translate-y-1.5' 
                    : 'border-neutral-200 hover:border-neutral-400 shadow-sm'
                }`}
              >
                {/* Top Badge */}
                <div className="w-full flex justify-between items-center mb-4">
                  <span className="inline-block text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 bg-neutral-200/70 text-neutral-700 rounded-sm">
                    {partner.badge}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-400 font-medium">
                    {partner.highlight}
                  </span>
                </div>

                {/* Partner Logo Container */}
                <div className="w-full h-36 flex items-center justify-center p-2 mb-4">
                  <div className="w-28 h-28 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <img
                      src={partner.logoUrl}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain filter drop-shadow-sm transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Partner Details */}
                <div className="space-y-2 w-full pt-2 border-t border-neutral-100">
                  <h3 className="font-serif text-lg font-bold text-neutral-950 group-hover:text-black transition-colors">
                    {partner.name}
                  </h3>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                    {partner.category}
                  </p>
                  <p className="text-xs text-neutral-600 font-light leading-relaxed line-clamp-3 mt-1">
                    {partner.description}
                  </p>
                </div>

                {/* Bottom interactive accent bar */}
                <div 
                  className={`w-full h-0.5 mt-4 transition-all duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: partner.accentColor }}
                />
              </div>
            );
          })}
        </div>

        {/* Collaborative Impact Highlight */}
        <div className="bg-neutral-950 text-white p-8 sm:p-10 rounded-sm border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles size={14} />
              <span>COMMUNITY POWERED</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Fueling Local Passion Together
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              Our partners support free admission, warm spaces, reliable ride destinations, and delicious culinary stops for every motorcycle enthusiast in Edmonton.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-sm text-xs font-mono text-neutral-300">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>100% Free Events</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-4 py-2.5 rounded-sm text-xs font-mono text-neutral-300">
              <HeartHandshake size={16} className="text-amber-400" />
              <span>Zero Egos Welcomed</span>
            </div>
          </div>
        </div>

        {/* Sponsor Call to Action Box */}
        <div className="max-w-3xl mx-auto border border-neutral-200 bg-neutral-50 p-6 sm:p-10 text-center space-y-6">
          <div className="space-y-3">
            <div className="flex justify-center text-neutral-900">
              <HeartHandshake size={32} className="stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-2xl text-neutral-950 font-bold">
              {siteText.sponsors.ctaHeader}
            </h3>
            <p className="text-xs text-neutral-500 font-light max-w-lg mx-auto leading-relaxed">
              {siteText.sponsors.ctaText}
            </p>
          </div>

          <div className="pt-2">
            <a 
              href="mailto:partnerships@themotosocial.com?subject=Brand%20Sponsorship%20Inquiry%20-%20The%20Moto%20Social"
              className="inline-flex items-center gap-2 bg-neutral-950 text-white hover:bg-neutral-800 active:scale-95 px-6 py-3.5 text-xs font-bold uppercase tracking-widest transition-all cursor-pointer shadow font-mono"
            >
              {siteText.sponsors.ctaButton}
              <Mail size={12} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

