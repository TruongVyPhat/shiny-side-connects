import { Star, Heart, ShieldAlert, Sparkles, Globe } from 'lucide-react';

export default function AboutSection() {

  // Use the exact generated image path
  const communityImageUrl = '/src/assets/images/community_laughing_1781624034619.jpg';

  const manifestos = [
    {
      icon: <Heart size={20} className="text-black" />,
      titleName: "Bicycles, Scooters, Choppers, or Foot",
      textDetail: "We don't care what you ride, or if you ride at all. The motorcycle is simply the catalyst that brings us together. Egos stay home. Bring whatever gets you moving."
    },
    {
      icon: <Star size={20} className="text-black" />,
      titleName: "No Attitudes, Ever",
      textDetail: "The motorcycle world can sometimes feel exclusionary. Shiny Side Connects is the absolute opposite. It is designed from day one to be warm, safe, simple, and incredibly welcoming."
    },
    {
      icon: <ShieldAlert size={20} className="text-black" />,
      titleName: "Supporting Small Business",
      textDetail: "By keeping events relaxed, casual, and located at independent local coffee spots, we inject immediate vitality and economic patronage back into local urban highstreets."
    }
  ];

  return (
    <section className="bg-neutral-50 py-24 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs sm:text-sm font-semibold font-mono uppercase tracking-[0.25em] text-neutral-400 block">
            Our Story & Creed
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-neutral-950">
            It's About The People
          </h2>
          <div className="h-0.5 w-16 bg-black mx-auto mt-3"></div>
          <p className="text-neutral-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Founded on sidewalk curbs in Toronto, we believe human connection and friendliness can exist effortlessly on public city streets.
          </p>
        </div>

        {/* Narrative & Photo Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          
          {/* Photo frame */}
          <div className="relative">
            <div className="absolute -inset-3 border-4 border-black/5 -translate-x-4 -translate-y-4 select-none pointer-events-none"></div>
            <div className="relative border border-neutral-200 shadow-xl overflow-hidden aspect-[4/3] bg-neutral-200">
              <img
                src={communityImageUrl}
                alt="Friends laughing around vintage motorcycles"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-5 left-5 bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 shadow-md">
                Official Season Shoot
              </div>
            </div>
          </div>

          {/* Narrative copy */}
          <div className="space-y-8">
            <h3 className="font-serif text-3xl sm:text-4xl text-neutral-950 leading-tight">
              "We wanted to build the community we wished existed."
            </h3>
            
            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed font-light">
              In 2013, founders Viktor and Samantha Radics noticed that while Toronto had plenty of motorcycle clubs, there wasn’t a low-pressure, open platform where everyday folks could gather simply to chat, network, and support independent coffee.
            </p>
            
            <p className="text-neutral-600 text-base sm:text-[17px] leading-relaxed font-light">
              They picked a favorite local coffee shop, spread the word on social media, and parked their custom bikes. Fifteen people showed up. They shared stories, admired the mechanics, and parted as friends. By the end of the summer, those 15 had turned into 150. Today, those circles represent thousands of participants in cities worldwide.
            </p>

            {/* Core values cards list */}
            <div className="space-y-4 pt-4 border-t border-neutral-200">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-neutral-400">Our Core Pillars</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-5 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-1.5">Inclusivity</p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">Everyone is welcome. Egos stay home.</p>
                </div>
                <div className="bg-white p-5 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-1.5">Midweek</p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">Breaks the grind on evening schedules.</p>
                </div>
                <div className="bg-white p-5 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-neutral-950 uppercase tracking-wider mb-1.5">Caffeine</p>
                  <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-light">Fueling community with coffee cups.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bike Night Season Opener Event Announcement Block */}
        <div id="bike-night-opener" className="bg-neutral-950 text-white shadow-2xl mb-24 relative overflow-hidden border border-neutral-800 flex flex-col rounded-sm">
          {/* Background Image from Google Drive with Elegant Overlays */}
          <div className="absolute inset-0 w-full h-full select-none overflow-hidden z-0 pointer-events-none">
            <img 
              src="https://drive.google.com/thumbnail?id=1yT9dCV1yWIHy-n1SD1g2vphlPNb-1uY9&sz=w1600" 
              alt="Bike Night Event Background" 
              className="w-full h-full object-cover opacity-35 transition-transform duration-1000 scale-[1.02]"
              referrerPolicy="no-referrer"
            />
            {/* Dark vignette gradient for maximum text contrast */}
            <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-neutral-950/85 to-neutral-950/40"></div>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="p-8 sm:p-12 md:p-16 relative z-10">
            {/* Subtle background graphics */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/[0.01] rounded-full -mr-28 -mt-28 pointer-events-none"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto space-y-12">
              <div className="space-y-5">
                <span className="text-xs bg-white text-black font-extrabold uppercase tracking-[0.25em] px-4 py-1.5 inline-flex items-center gap-1.5 shadow-md">
                  <Sparkles size={12} className="fill-black text-black" />
                  Upcoming Live Meetup
                </span>
                <h3 className="font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
                  Bike Night season opener
                </h3>
                <p className="text-neutral-200 text-base sm:text-lg lg:text-xl leading-relaxed font-light max-w-3xl">
                  Get ready for the first community gathering in Edmonton! We are hosting our highly anticipated season opener, bringing custom moto builders, scooter riders, vintage collectors, and local espresso lovers together side-by-side. Like always, zero pressure and all smiles.
                </p>
              </div>

              {/* Event Location - Highly Impressive, Bespoke Ticket Board Design */}
              <div className="bg-black/90 backdrop-blur-2xl border-2 border-white/15 p-1.5 sm:p-2 shadow-2xl relative overflow-hidden group">
                {/* Decorative retro ticket notch effects */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950 border border-white/10 hidden md:block z-20"></div>
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950 border border-white/10 hidden md:block z-20"></div>
                
                <div className="border border-white/5 p-6 sm:p-8 md:p-10 space-y-8 relative z-10">
                  {/* Top stamp bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                    <div className="flex items-center gap-2.5">
                      <Globe size={20} className="text-white shrink-0" />
                      <span className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-350">VENUE ACCESS PASSPORT</span>
                    </div>
                    <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/50 px-3 py-1.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="text-xs font-mono uppercase tracking-widest text-emerald-350 font-bold">CONFIRMED LOCATION</span>
                    </div>
                  </div>

                  {/* Impressive Location Presentation */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-center">
                    
                    {/* Column 1: Venue Label & Large Branding */}
                    <div className="md:col-span-4 space-y-2.5 border-l-2 border-white/35 pl-4 md:pl-6">
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block font-semibold">THE VENUE</span>
                      <h4 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-none">
                        StorageMart
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-350">
                        <span>LAT / LON :</span>
                        <span className="text-white font-medium">53.5936° N, 113.4357° W</span>
                      </div>
                    </div>

                    {/* Column 2: Exact Street Address (Enlarged) */}
                    <div className="md:col-span-4 space-y-2.5 border-l border-white/15 md:pl-8">
                      <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400 block font-semibold">STREET ADDRESS</span>
                      <p className="text-lg sm:text-xl lg:text-2xl text-white font-medium tracking-wide leading-tight sm:leading-snug">
                        13303 Fort Rd NW,<br />
                        Edmonton, AB T5A 1C3
                      </p>
                    </div>

                    {/* Column 3: Directions Action Trigger */}
                    <div className="md:col-span-4 flex md:justify-end">
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=StorageMart+13303+Fort+Rd+NW+Edmonton+AB+T5A+1C3+Canada"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full md:w-auto items-center justify-center bg-white text-black hover:bg-neutral-100 px-10 py-5 text-sm font-extrabold uppercase tracking-widest transition-all duration-300 font-mono shadow-md whitespace-nowrap border-2 border-white hover:border-neutral-100 hover:scale-[1.02] transform"
                      >
                        Get Directions in Maps
                      </a>
                    </div>

                  </div>

                  {/* Footnote ticket summary (Enlarged text and styled admission badge) */}
                  <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    <p className="sm:max-w-xl">
                      Join our welcoming community crowd. Drive any model of car, ride your bike, or simply walk over on foot to find warm conversations and beautiful machines on display.
                    </p>
                    <span className="font-mono text-xs uppercase tracking-widest bg-white/10 px-4 py-2 border border-white/10 text-white shrink-0 self-start sm:self-center font-bold">
                      ADMISSION: 100% FREE & OPEN
                    </span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed creed items */}
        <div className="space-y-8">
          <h3 className="font-serif text-center text-3xl tracking-tight text-neutral-950 mt-16 mb-10">What We Stand For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manifestos.map((man, i) => (
              <div key={i} className="bg-white p-8 border border-neutral-200 space-y-4 hover:border-black/20 transition-colors shadow-sm">
                <div className="inline-flex p-3 bg-neutral-50 border border-neutral-100">
                  {man.icon}
                </div>
                <h4 className="font-serif text-lg text-neutral-950 font-semibold">{man.titleName}</h4>
                <p className="text-neutral-500 text-sm sm:text-[15px] leading-relaxed font-light">{man.textDetail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
