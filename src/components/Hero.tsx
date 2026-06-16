import { ArrowRight, MapPin, Coffee, Users } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  // Use the exact generated image path
  const heroImageUrl = '/src/assets/images/hero_motorcycles_1781624019427.jpg';

  return (
    <section className="bg-white text-black font-sans">
      {/* Visual Header */}
      <div className="relative overflow-hidden bg-neutral-900 border-b border-neutral-100">
        <div className="absolute inset-0">
          <img
            src={heroImageUrl}
            alt="The Moto Social Motorcycle Community Event"
            className="w-full h-full object-cover opacity-45 scale-105 animate-pulse-slow object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-neutral-900/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-40 flex flex-col justify-end min-h-[70vh] md:min-h-[80vh]">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                Upcoming Season • July 2026
              </span>
            </div>

            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Everybody is welcome. <br />
              <span className="italic font-normal font-serif text-white/90">Bring what you've got.</span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-sans font-light">
              We’re a monthly community building event. No attitudes. Just friendly people, warm coffee, and amazing machines on city streets worldwide.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('cities')}
                className="bg-white text-black hover:bg-neutral-100 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2 rounded-none group shadow-lg"
              >
                <span>Find Your City</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border border-white/30 hover:border-white text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-none"
              >
                Our Manifesto
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Core Brand Value Props / Live Stats Panel */}
      <div className="border-b border-neutral-100 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            
            <div className="flex space-x-5 md:px-4 items-start pt-6 md:pt-0">
              <div className="bg-black text-white p-3.5 flex-shrink-0">
                <Users size={20} className="stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-900">
                  It's About People
                </h3>
                <p className="text-neutral-600 text-[13px] leading-relaxed">
                  We care about the people, not what you ride. Bring a custom chopper, a modern scooter, or just bring a friend on foot. No status, no egos.
                </p>
              </div>
            </div>

            <div className="flex space-x-5 md:px-6 items-start pt-8 md:pt-0">
              <div className="bg-black text-white p-3.5 flex-shrink-0">
                <Coffee size={20} className="stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-900">
                  Supporting Local Coffee
                </h3>
                <p className="text-neutral-600 text-[13px] leading-relaxed">
                  Every event happens at a local independent cafe, showcasing independent coffee shops and boosting local neighborhood business models.
                </p>
              </div>
            </div>

            <div className="flex space-x-5 md:px-6 items-start pt-8 md:pt-0">
              <div className="bg-black text-white p-3.5 flex-shrink-0">
                <MapPin size={20} className="stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-900">
                  A Global Network
                </h3>
                <p className="text-neutral-600 text-[13px] leading-relaxed">
                  From Montreal to Cape Town, thousands of riders meet monthly. Our global community stays connected through simple local passions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
