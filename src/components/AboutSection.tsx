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
    <section className="bg-neutral-50 py-20 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-neutral-400 block">
            Our Story & Creed
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif tracking-tight text-neutral-950">
            It's About The People
          </h2>
          <div className="h-0.5 w-12 bg-black mx-auto mt-2"></div>
          <p className="text-neutral-500 text-sm leading-relaxed max-w-lg mx-auto font-light">
            Founded on sidewalk curbs in Toronto, we believe human connection and friendliness can exist effortlessly on public city streets.
          </p>
        </div>

        {/* Narrative & Photo Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          
          {/* Photo frame */}
          <div className="relative">
            <div className="absolute -inset-2.5 border-4 border-black/5 -translate-x-3 -translate-y-3 select-none pointer-events-none"></div>
            <div className="relative border border-neutral-200 shadow-xl overflow-hidden aspect-[4/3] bg-neutral-200">
              <img
                src={communityImageUrl}
                alt="Friends laughing around vintage motorcycles"
                className="w-full h-full object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-black text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 shadow-md">
                Official Season Shoot
              </div>
            </div>
          </div>

          {/* Narrative copy */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl text-neutral-950 leading-tight">
              "We wanted to build the community we wished existed."
            </h3>
            
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              In 2013, founders Viktor and Samantha Radics noticed that while Toronto had plenty of motorcycle clubs, there wasn’t a low-pressure, open platform where everyday folks could gather simply to chat, network, and support independent coffee.
            </p>
            
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              They picked a favorite local coffee shop, spread the word on social media, and parked their custom bikes. Fifteen people showed up. They shared stories, admired the mechanics, and parted as friends. By the end of the summer, those 15 had turned into 150. Today, those circles represent thousands of participants in cities worldwide.
            </p>

            {/* Core values cards list */}
            <div className="space-y-3 pt-2">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-neutral-400">Our Core Pillars</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 border border-neutral-150">
                  <p className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-1">Inclusivity</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">Everyone is welcome. Egos stay home.</p>
                </div>
                <div className="bg-white p-4 border border-neutral-150">
                  <p className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-1">Midweek</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">Breaks the grind on evening schedules.</p>
                </div>
                <div className="bg-white p-4 border border-neutral-150">
                  <p className="text-xs font-bold text-neutral-950 uppercase tracking-wider mb-1">Caffeine</p>
                  <p className="text-[11px] text-neutral-500 leading-relaxed">Fueling community with coffee cups.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bike Night Season Opener Event Announcement Block */}
        <div id="bike-night-opener" className="bg-neutral-950 text-white shadow-xl mb-20 relative overflow-hidden border border-neutral-800 flex flex-col">
          {/* Banner Image from Google Drive */}
          <div className="relative h-64 sm:h-80 md:h-[380px] w-full overflow-hidden select-none">
            <img 
              src="https://drive.google.com/thumbnail?id=1yT9dCV1yWIHy-n1SD1g2vphlPNb-1uY9&sz=w1600" 
              alt="Shiny Side Connects Australia Road Ride" 
              className="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Elegant glassmorphism gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent"></div>
          </div>

          <div className="p-8 md:p-12 relative z-10">
            {/* Subtle background graphics */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.01] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[10px] bg-white text-black font-extrabold uppercase tracking-[0.2em] px-3 py-1 inline-flex items-center gap-1">
                <Sparkles size={10} className="fill-black text-black" />
                Offline Event Announcement
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl tracking-tight text-white leading-tight">
                Bike Night season opener
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light max-w-xl">
                Get ready for the first community gathering in Edmonton! We are hosting our highly anticipated season opener, bringing custom moto builders, scooter riders, vintage collectors, and local espresso lovers together side-by-side. Like always, zero pressure and all smiles.
              </p>
              

            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Globe size={18} className="text-white shrink-0" />
                <p className="font-serif text-lg font-semibold text-white">Event Location</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-white font-semibold">StorageMart</p>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  13303 Fort Rd NW, <br />
                  Edmonton, AB T5A 1C3, Canada
                </p>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed">
                Join our welcoming community crowd. Drive, ride, or simply walk over on foot to find warm conversations and beautiful machines on display.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=StorageMart+13303+Fort+Rd+NW+Edmonton+AB+T5A+1C3+Canada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center block bg-white text-black hover:bg-neutral-100 py-3 text-[11px] font-extrabold uppercase tracking-widest transition-all cursor-pointer font-mono shadow"
                >
                  Get Directions in Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Detailed creed items */}
        <div className="space-y-6">
          <h3 className="font-serif text-center text-2xl tracking-tight text-neutral-950 mt-12 mb-8">What We Stand For</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {manifestos.map((man, i) => (
              <div key={i} className="bg-white p-6 border border-neutral-100 space-y-3">
                <div className="inline-flex p-3 bg-neutral-50 border border-neutral-100">
                  {man.icon}
                </div>
                <h4 className="font-serif text-base text-neutral-950 font-semibold">{man.titleName}</h4>
                <p className="text-neutral-500 text-[13px] leading-relaxed font-light">{man.textDetail}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
