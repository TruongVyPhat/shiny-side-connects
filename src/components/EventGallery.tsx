import { useState, useMemo } from 'react';
import { Camera, Calendar, MapPin, ChevronLeft, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { EVENT_TIMELINE_DATA, TimelineEvent, GalleryPhoto } from '../galleryData';

interface EventGalleryProps {
  onBackToHome?: () => void;
}

export default function EventGallery({ onBackToHome }: EventGalleryProps) {
  const [selectedEventId, setSelectedEventId] = useState<string>(EVENT_TIMELINE_DATA[0].id);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  // Find active event object
  const activeEventIndex = useMemo(() => {
    const idx = EVENT_TIMELINE_DATA.findIndex(e => e.id === selectedEventId);
    return idx !== -1 ? idx : 0;
  }, [selectedEventId]);

  const activeEvent: TimelineEvent = EVENT_TIMELINE_DATA[activeEventIndex];

  // Navigate timeline
  const handlePrevEvent = () => {
    if (activeEventIndex > 0) {
      setSelectedEventId(EVENT_TIMELINE_DATA[activeEventIndex - 1].id);
    }
  };

  const handleNextEvent = () => {
    if (activeEventIndex < EVENT_TIMELINE_DATA.length - 1) {
      setSelectedEventId(EVENT_TIMELINE_DATA[activeEventIndex + 1].id);
    }
  };

  // Lightbox prev/next
  const currentPhotoIndex = selectedPhoto 
    ? activeEvent.photos.findIndex(p => p.id === selectedPhoto.id) 
    : -1;

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setSelectedPhoto(activeEvent.photos[currentPhotoIndex - 1]);
    }
  };

  const handleNextPhoto = () => {
    if (currentPhotoIndex < activeEvent.photos.length - 1) {
      setSelectedPhoto(activeEvent.photos[currentPhotoIndex + 1]);
    }
  };

  return (
    <div id="gallery" className="bg-neutral-950 text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Background ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neutral-900/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-10">

        {/* Optional Back to Home button */}
        {onBackToHome && (
          <div>
            <button
              onClick={onBackToHome}
              className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white px-3 py-2 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </button>
          </div>
        )}

        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-neutral-800 pb-6 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-mono uppercase tracking-[0.2em] text-neutral-300 mb-3">
              <Camera size={14} className="text-white" />
              <span>Event Photo Gallery</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif tracking-tight text-white">
              Edmonton Rides Gallery
            </h1>
          </div>
        </div>

        {/* TIMELINE BAR - IMAGE MATCHING HORIZONTAL LINE WITH CIRCULAR NODES */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-neutral-400">
              Timeline
            </span>

            {/* Prev / Next controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrevEvent}
                disabled={activeEventIndex === 0}
                className="p-1.5 border border-neutral-700 hover:border-white bg-neutral-800 text-white disabled:opacity-30 transition-colors"
                title="Previous Event"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-mono text-neutral-400">
                {activeEventIndex + 1} / {EVENT_TIMELINE_DATA.length}
              </span>
              <button
                onClick={handleNextEvent}
                disabled={activeEventIndex === EVENT_TIMELINE_DATA.length - 1}
                className="p-1.5 border border-neutral-700 hover:border-white bg-neutral-800 text-white disabled:opacity-30 transition-colors"
                title="Next Event"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Horizontal Line with Concentric Circular Nodes (Line centered on circles) */}
          <div className="relative py-4 px-2 overflow-x-auto">
            <div className="relative min-w-[600px]">
              {/* Continuous Horizontal Line - Centered precisely on the 48px circle row (top-6) */}
              <div className="absolute top-6 left-8 right-8 h-[2px] bg-neutral-700/80 -translate-y-1/2 pointer-events-none z-0"></div>

              {/* Timeline Nodes Row */}
              <div className="flex items-start justify-between relative z-10 px-4">
                {EVENT_TIMELINE_DATA.map((item) => {
                  const isActive = item.id === selectedEventId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setSelectedEventId(item.id)}
                      className="flex flex-col items-center group focus:outline-none transition-all duration-200"
                    >
                      {/* Node Circle Container (Fixed height h-12 = 48px, centering the 36px circle vertically at 24px) */}
                      <div className="h-12 flex items-center justify-center relative cursor-pointer">
                        {/* Active Outer Pulsing Glow */}
                        {isActive && (
                          <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                        )}

                        {/* Outer Ring */}
                        <div
                          className={`w-9 h-9 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                            isActive
                              ? 'border-white bg-neutral-900 shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-110'
                              : 'border-white/40 bg-neutral-950 group-hover:border-white/80 group-hover:scale-105'
                          }`}
                        >
                          {/* Inner Ring / Solid Dot */}
                          <div
                            className={`rounded-full transition-all duration-300 ${
                              isActive
                                ? 'w-4 h-4 bg-white ring-2 ring-white/50'
                                : 'w-3 h-3 bg-white/70 group-hover:bg-white'
                            }`}
                          ></div>
                        </div>
                      </div>

                      {/* Date Label Below Node */}
                      <span
                        className={`mt-2 text-xs font-mono font-bold tracking-wider transition-all duration-200 ${
                          isActive
                            ? 'text-white scale-105'
                            : 'text-neutral-400 group-hover:text-neutral-200'
                        }`}
                      >
                        {item.dateLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* EVENT DETAIL - TIME, LOCATION, NAME ONLY */}
        <div className="bg-neutral-900 border border-neutral-800 p-6 sm:p-8 space-y-3">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-300">
            <span className="flex items-center space-x-2 bg-neutral-950 px-3 py-1.5 border border-neutral-800 font-bold text-white">
              <Calendar size={14} className="text-white" />
              <span>{activeEvent.dateLabel}</span>
            </span>

            <span className="flex items-center space-x-2 bg-neutral-950 px-3 py-1.5 border border-neutral-800 text-neutral-200">
              <MapPin size={14} className="text-white" />
              <span>{activeEvent.location}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif text-white font-bold tracking-tight pt-1">
            {activeEvent.title}
          </h2>
        </div>

        {/* PHOTO GALLERY GRID - PURE IMAGE TILES ONLY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {activeEvent.photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-neutral-900 border border-neutral-800 overflow-hidden cursor-pointer hover:border-neutral-500 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={photo.url}
                  alt="Event gallery photo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL - PURE FULL IMAGE ONLY */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-5xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 z-20 p-2 bg-neutral-900 hover:bg-white hover:text-black text-white border border-neutral-700 transition-colors"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>

            {/* Lightbox Image View */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src={selectedPhoto.url}
                alt="Event gallery photo enlarged"
                className="max-h-[85vh] max-w-full object-contain border border-neutral-800 shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Prev/Next Image Controls inside Lightbox */}
              {currentPhotoIndex > 0 && (
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-colors shadow-lg"
                  title="Previous Photo"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {currentPhotoIndex < activeEvent.photos.length - 1 && (
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 transition-colors shadow-lg"
                  title="Next Photo"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


