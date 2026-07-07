import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin, Coffee, Users, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import siteText from '../siteText.json';

import banner1 from '../assets/banner/moto_banner_1.jpg';
import banner2 from '../assets/banner/moto_banner_2.jpg';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const HERO_IMAGES = [
  {
    url: banner1,
    caption: 'Classic motorcycle lineup at the Sidewalk Meetup'
  },
  {
    url: banner2,
    caption: 'Curbside vintage builds & cafe racers side-by-side'
  }
];

export default function Hero({ onNavigate }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? HERO_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === HERO_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white text-black font-sans">
      {/* Visual Header */}
      <div className="relative overflow-hidden bg-neutral-950 border-b border-neutral-100 min-h-[75vh] md:min-h-[85vh] flex flex-col justify-between">
        
        {/* Sliding Background Images */}
        <div className="absolute inset-0 select-none overflow-hidden z-0 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={HERO_IMAGES[currentIndex].url}
              alt={HERO_IMAGES[currentIndex].caption}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.65, scale: 1 }}
              exit={{ opacity: 0, scale: 1.03 }}
              transition={{ duration: 0.9 }}
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-neutral-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Floating Manual Slide Controls */}
        <div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-20 pointer-events-none">
          <button
            onClick={handlePrev}
            className="p-3 border border-white/10 bg-black/45 hover:bg-white hover:text-black text-white rounded-full transition-all duration-300 pointer-events-auto cursor-pointer hover:scale-105 shadow-xl"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="p-3 border border-white/10 bg-black/45 hover:bg-white hover:text-black text-white rounded-full transition-all duration-300 pointer-events-auto cursor-pointer hover:scale-105 shadow-xl"
            aria-label="Next Slide"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Hero Content Section */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 md:py-36 w-full h-full flex flex-col justify-end z-10 grow">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                {siteText.hero.badgeText}
              </span>
            </div>

            <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight">
              {siteText.hero.headingText} <br />
              <span className="italic font-normal font-serif text-white/90">{siteText.hero.subheadingText}</span>
            </h1>

            <p className="text-neutral-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl font-sans font-light">
              {siteText.hero.descriptionText}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('events')}
                className="bg-white text-black hover:bg-neutral-100 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center space-x-2 rounded-none group shadow-lg cursor-pointer"
              >
                <span>{siteText.hero.buttonMeetups}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="border border-white/30 hover:border-white text-white bg-black/30 hover:bg-black/50 backdrop-blur-sm px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all rounded-none cursor-pointer"
              >
                {siteText.hero.buttonManifesto}
              </button>
            </div>
          </div>
        </div>

        {/* Slideshow Navigation Dots & Caption Indicator Bar */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full z-20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2 bg-black/50 backdrop-blur-sm px-3.5 py-1.5 border border-white/10 text-neutral-300 text-xs font-mono rounded-none">
            <Camera size={13} className="text-white shrink-0" />
            <span className="font-light">{HERO_IMAGES[currentIndex].caption}</span>
          </div>

          <div className="flex items-center space-x-2">
            {HERO_IMAGES.map((_, idx) => (
              <button
                key={`hero-dot-${idx}`}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 transition-all duration-300 cursor-pointer ${
                  idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-600 hover:bg-neutral-400'
                }`}
                aria-label={`Go to hero slide ${idx + 1}`}
              />
            ))}
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
                  {siteText.hero.pillars[0].title}
                </h3>
                <p className="text-neutral-600 text-[13px] leading-relaxed">
                  {siteText.hero.pillars[0].description}
                </p>
              </div>
            </div>

            <div className="flex space-x-5 md:px-6 items-start pt-8 md:pt-0">
              <div className="bg-black text-white p-3.5 flex-shrink-0">
                <Coffee size={20} className="stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-900">
                  {siteText.hero.pillars[1].title}
                </h3>
                <p className="text-neutral-600 text-[13px] leading-relaxed">
                  {siteText.hero.pillars[1].description}
                </p>
              </div>
            </div>

            <div className="flex space-x-5 md:px-6 items-start pt-8 md:pt-0">
              <div className="bg-black text-white p-3.5 flex-shrink-0">
                <MapPin size={20} className="stroke-[2]" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xs uppercase tracking-[0.2em] font-extrabold text-neutral-900">
                  {siteText.hero.pillars[2].title}
                </h3>
                <p className="text-neutral-600 text-[13px] leading-relaxed">
                  {siteText.hero.pillars[2].description}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
