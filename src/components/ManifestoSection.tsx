import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ManifestoQuote {
  text: string;
  author: string;
}

const MANIFESTO_QUOTES: ManifestoQuote[] = [
  {
    text: "We don't care what you ride. We care who you are. The motorcycle is simply the vehicle that parks us on the same sidewalk.",
    author: "THE CORE MANIFESTO"
  },
  {
    text: "Egos stay at home. Sidewalk curbs are flat, and so is our community — no hierarchies, no prerequisites, just coffee and smiles.",
    author: "OUR COMMONS CREED"
  },
  {
    text: "Built on friendliness, fueled by caffeine, and sustained by the simple act of showing up midweek to break the daily grind.",
    author: "THE MIDWEEK PROTOCOL"
  },
  {
    text: "Whether you roll in on a custom chopper, a vintage scooter, or walk over in a business suit — you have a place on our curb.",
    author: "THE OPEN ACCESSION"
  }
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 }
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 }
    }
  })
};

export default function ManifestoSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? MANIFESTO_QUOTES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === MANIFESTO_QUOTES.length - 1 ? 0 : prev + 1));
  };

  // Auto-play quotes every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === MANIFESTO_QUOTES.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const activeQuote = MANIFESTO_QUOTES[currentIndex];

  return (
    <section className="bg-neutral-950 text-white py-20 px-4 sm:px-6 lg:px-8 border-b border-neutral-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-5 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0,transparent_100%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        
        {/* Subtle Icon stamp */}
        <div className="inline-flex justify-center items-center p-3 bg-white/5 border border-white/10 rounded-full text-neutral-400">
          <Quote size={20} className="fill-white/5" />
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
          
          {/* Slider Controls - Left */}
          <button
            onClick={handlePrev}
            className="absolute left-0 sm:-left-12 lg:-left-20 p-2 sm:p-3 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-all rounded-full cursor-pointer hover:scale-105 z-20"
            aria-label="Previous quote"
          >
            <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Animating Slide text */}
          <div className="w-full px-12 sm:px-16 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-4"
              >
                <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto leading-relaxed font-light text-neutral-100">
                  "{activeQuote.text}"
                </p>
                <span className="text-[10px] sm:text-xs uppercase font-semibold font-mono tracking-[0.25em] text-neutral-400 block pt-1">
                  — {activeQuote.author}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls - Right */}
          <button
            onClick={handleNext}
            className="absolute right-0 sm:-right-12 lg:-right-20 p-2 sm:p-3 border border-white/10 hover:border-white text-neutral-400 hover:text-white transition-all rounded-full cursor-pointer hover:scale-105 z-20"
            aria-label="Next quote"
          >
            <ChevronRight size={18} className="sm:w-5 sm:h-5" />
          </button>

        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center items-center gap-2.5 pt-4">
          {MANIFESTO_QUOTES.map((_, idx) => (
            <button
              key={`manifesto-dot-${idx}`}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-1.5 transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-neutral-800 hover:bg-neutral-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
