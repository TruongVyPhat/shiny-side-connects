import { useState } from 'react';
import { TIMELINE_STORIES } from '../data';
import { HelpCircle, Star, Heart, ShieldAlert } from 'lucide-react';

export default function AboutSection() {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

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
      textDetail: "The motorcycle world can sometimes feel exclusionary. The Moto Social is the absolute opposite. It is designed from day one to be warm, safe, simple, and incredibly welcoming."
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

        {/* Dynamic Story Timeline block */}
        <div className="bg-white border border-neutral-200/60 p-8 md:p-12 shadow-sm mb-20 relative">
          <div className="max-w-2xl mb-8">
            <span className="text-[10px] bg-black text-white font-extrabold uppercase tracking-widest px-2.5 py-1">Timeline</span>
            <h3 className="font-serif text-2xl text-neutral-950 mt-3 tracking-tight">Interactive Community Evolution</h3>
            <p className="text-xs text-neutral-500 font-light mt-1">Select a key milestone year below to explore how the movement expanded organically.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:border-b border-neutral-100 pb-6 mb-6">
            {TIMELINE_STORIES.map((story, idx) => (
              <button
                key={story.year}
                onClick={() => setActiveYearIndex(idx)}
                className={`text-left p-4 border transition-all relative ${
                  activeYearIndex === idx
                    ? 'bg-black border-black text-white'
                    : 'bg-neutral-50 border-neutral-200 hover:border-neutral-400 text-neutral-700'
                }`}
              >
                <p className="text-lg font-bold font-mono">{story.year}</p>
                <p className="text-xs font-bold uppercase tracking-wider mt-1 truncate">{story.title}</p>
                {activeYearIndex === idx && (
                  <span className="hidden md:block absolute -bottom-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-black"></span>
                )}
              </button>
            ))}
          </div>

          {/* Expanded story */}
          <div className="min-h-[100px] bg-neutral-50 p-6 border border-neutral-100 flex flex-col justify-center animate-in fade-in duration-200">
            <p className="text-[11px] font-extrabold text-neutral-400 uppercase tracking-widest mb-1.5">
              Reflections on {TIMELINE_STORIES[activeYearIndex].year}
            </p>
            <h4 className="font-serif text-lg text-neutral-900 font-semibold mb-2">
              {TIMELINE_STORIES[activeYearIndex].title}
            </h4>
            <p className="text-neutral-600 text-sm leading-relaxed font-light">
              {TIMELINE_STORIES[activeYearIndex].description}
            </p>
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
