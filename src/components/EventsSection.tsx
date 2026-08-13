import { useState } from 'react';
import { Globe, Sparkles, MapPin, Navigation, Clock, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import siteText from '../siteText.json';

interface EventItem {
  id: string;
  title: string;
  status: 'Featured' | 'Upcoming' | 'Midweek Meetup';
  date: string;
  time: string;
  description: string;
  address: string;
  coordinates: string;
  directionsUrl: string;
  admission: string;
}

const EVENTS_DATA: EventItem[] = [
  {
    id: 'mid-season-madness',
    title: 'Mid season madness night meet',
    status: 'Featured',
    date: 'Saturday, July 11, 2026',
    time: '5:00 PM - 9:00 PM',
    description: 'Get ready for our mid-season night meet in Edmonton! Bringing custom moto builders, scooter riders, vintage collectors, and local enthusiast culture together side-by-side. Zero pressure and all smiles.',
    address: '13303 Fort Rd NW, Edmonton, AB T5A 1C3, Canada',
    coordinates: '53.5936° N, 113.4357° W',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=StorageMart+13303+Fort+Rd+NW+Edmonton+AB+T5A+1C3+Canada',
    admission: '100% FREE & OPEN'
  },
  {
    id: 'full-send-august',
    title: 'Full-send august',
    status: 'Upcoming',
    date: 'Sunday, August 15, 2026',
    time: '12:00 PM - 4:00 PM',
    description: 'Join us for our high-energy August meet in Edmonton. Meet us by the curb with fresh brews, good vibes, and beautiful builds. Drive, ride, or walk over to connect with local riders.',
    address: 'Tipsy Moose Pub & Kitchen | 6464 Cartmell Pl SW, Edmonton',
    coordinates: '53.4180° N, 113.5280° W',
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Tipsy+Moose+Pub+%26+Kitchen+6464+Cartmell+Pl+SW+Edmonton',
    admission: '100% FREE & OPEN'
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 120 : -120,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 },
      scale: { duration: 0.25 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 120 : -120,
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

export default function EventsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? EVENTS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === EVENTS_DATA.length - 1 ? 0 : prev + 1));
  };

  const selectedEvent = EVENTS_DATA[currentIndex];

  return (
    <section id="events" className="bg-neutral-950 text-white py-24 px-4 sm:px-6 lg:px-8 font-sans border-b border-neutral-900 relative overflow-hidden">
      {/* Absolute Background Image from Google Drive with Overlay Gradients */}
      <div className="absolute inset-0 w-full h-full select-none overflow-hidden z-0 pointer-events-none">
        <img 
          src="https://drive.google.com/thumbnail?id=1yT9dCV1yWIHy-n1SD1g2vphlPNb-1uY9&sz=w1600" 
          alt="Bike Night Event Background" 
          className="w-full h-full object-cover opacity-20 transition-transform duration-1000 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-950/90 to-neutral-950"></div>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-semibold font-mono uppercase tracking-[0.25em] text-neutral-400 block">
            {siteText.events.badgeText}
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-white">
            {siteText.events.headingText}
          </h2>
          <div className="h-0.5 w-16 bg-white mx-auto mt-3"></div>
          <p className="text-neutral-400 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            {siteText.events.subheadingText}
          </p>
        </div>

        {/* Carousel Slide Presentation */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Main Slide Track */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            
            {/* Left Button (Desktop Floating) */}
            <button
              onClick={handlePrev}
              className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/10 bg-neutral-900/80 hover:bg-white hover:text-black hover:border-white text-white rounded-full transition-all duration-300 hidden sm:flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
              aria-label="Previous Event"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Slide Content wrapper with AnimatePresence */}
            <div className="w-full overflow-hidden px-1 py-4">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={selectedEvent.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="bg-black/85 backdrop-blur-2xl border-2 border-white/15 p-1.5 sm:p-2 shadow-2xl relative overflow-hidden flex flex-col justify-between w-full"
                >
                  {/* Decorative retro ticket notch effects */}
                  <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950 border border-white/10 hidden md:block z-20"></div>
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-neutral-950 border border-white/10 hidden md:block z-20"></div>
                  
                  <div className="border border-white/5 p-6 sm:p-8 md:p-10 space-y-8 relative z-10 flex flex-col justify-between h-full">
                    
                    <div className="space-y-6">
                      {/* Stamp Header */}
                      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-2.5">
                          <Globe size={22} className="text-white shrink-0" />
                          <span className="text-sm font-mono uppercase tracking-[0.3em] text-neutral-300">
                            {selectedEvent.status} {siteText.events.entryBoardLabel}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-950/80 border border-emerald-500/50 px-3.5 py-1.5 rounded-full">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="text-xs font-mono uppercase tracking-widest text-emerald-350 font-bold">
                            {siteText.events.activeBadge}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-mono bg-white text-black px-2.5 py-1 font-bold inline-flex items-center gap-1">
                            <Sparkles size={11} className="fill-black text-black" />
                            {siteText.events.confirmedLabel}
                          </span>
                          <span className="text-xs font-mono bg-white/10 text-white px-2.5 py-1 border border-white/10 font-bold inline-flex items-center gap-1">
                            <Clock size={11} />
                            {selectedEvent.time}
                          </span>
                          <span className="text-xs font-mono bg-neutral-800 text-neutral-300 px-2.5 py-1 border border-neutral-700 font-bold inline-flex items-center gap-1">
                            <Calendar size={11} />
                            {selectedEvent.date}
                          </span>
                        </div>
                        <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-tight">
                          {selectedEvent.title}
                        </h3>
                        <p className="text-neutral-300 text-base sm:text-lg leading-relaxed font-light">
                          {selectedEvent.description}
                        </p>
                      </div>
                    </div>
                    {/* Location Presentation with Address & Directions */}
                    <div className="bg-white/[0.03] border border-white/10 p-6 sm:p-8 rounded-sm space-y-6 mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-center">
                        
                        {/* Address & Coordinates */}
                        <div className="md:col-span-8 space-y-2 border-l-2 border-white/35 pl-4 md:pl-6">
                          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-neutral-400 block font-semibold">
                            {siteText.events.streetAddressLabel}
                          </span>
                          <p className="text-xl sm:text-2xl lg:text-3xl font-serif font-extrabold text-white tracking-tight leading-snug">
                            {selectedEvent.address}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-300 pt-1">
                            <span>COORDINATES :</span>
                            <span className="text-white font-medium">{selectedEvent.coordinates}</span>
                          </div>
                        </div>

                        {/* Directions Action Trigger */}
                        <div className="md:col-span-4 flex md:justify-end">
                          <a
                            href={selectedEvent.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full md:w-auto items-center justify-center bg-white text-black hover:bg-neutral-100 px-8 py-4 text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-all duration-300 font-mono shadow-md whitespace-nowrap border-2 border-white hover:border-neutral-100 hover:scale-[1.02] transform cursor-pointer"
                          >
                            <Navigation size={14} className="mr-1.5 shrink-0" />
                            {siteText.events.buttonDirections}
                          </a>
                        </div>

                      </div>
                    </div>

                     {/* Footnote ticket summary (Enlarged text and styled admission badge) */}
                     <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm sm:text-base text-neutral-300 font-light leading-relaxed mt-4">
                       <p className="sm:max-w-md">
                         {siteText.events.footnoteText}
                       </p>
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-widest bg-white/15 px-4 py-2.5 border border-white/10 text-white shrink-0 self-start sm:self-center font-bold">
                        {selectedEvent.admission}
                      </span>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Button (Desktop Floating) */}
            <button
              onClick={handleNext}
              className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 z-30 p-4 border border-white/10 bg-neutral-900/80 hover:bg-white hover:text-black hover:border-white text-white rounded-full transition-all duration-300 hidden sm:flex items-center justify-center shadow-xl cursor-pointer hover:scale-105"
              aria-label="Next Event"
            >
              <ChevronRight size={24} />
            </button>

          </div>

          {/* Navigation Controls Row (Mobile & General Indicators) */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-neutral-900 mt-8">
            {/* Visual Dot Indicators */}
            <div className="flex items-center gap-3">
              {EVENTS_DATA.map((event, idx) => (
                <button
                  key={`dot-${event.id}`}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`h-2.5 rounded-none transition-all duration-300 cursor-pointer ${
                    idx === currentIndex ? 'w-10 bg-white' : 'w-2.5 bg-neutral-800 hover:bg-neutral-600'
                  }`}
                  aria-label={`Go to event ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile / General Button Row & Counter */}
            <div className="flex items-center gap-6">
              <span className="font-mono text-sm tracking-wider text-neutral-400">
                <span className="text-white font-bold">0{currentIndex + 1}</span> / 0{EVENTS_DATA.length}
              </span>
              
              {/* Manual buttons for small screens */}
              <div className="flex items-center gap-2 sm:hidden">
                <button
                  onClick={handlePrev}
                  className="p-3 border border-white/10 bg-neutral-900/80 hover:bg-white hover:text-black text-white transition-all duration-200 cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 border border-white/10 bg-neutral-900/80 hover:bg-white hover:text-black text-white transition-all duration-200 cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
