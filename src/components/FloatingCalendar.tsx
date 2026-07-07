import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, X, ChevronLeft, ChevronRight, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import siteText from '../siteText.json';

interface EventDateMapping {
  year: number;
  month: number; // 0-indexed (6 = July, 7 = August, etc.)
  day: number;
  eventId: string;
  title: string;
  status: string;
  time: string;
  venue: string;
  address: string;
}

const EVENTS_CALENDAR_DATA: EventDateMapping[] = [
  {
    year: 2026,
    month: 6, // July
    day: 11,
    eventId: 'edmonton-season-opener',
    title: 'Bike Night season opener',
    status: 'Featured',
    time: '6:00 PM - 10:00 PM',
    venue: 'StorageMart',
    address: '13303 Fort Rd NW, Edmonton, AB'
  },
  {
    year: 2026,
    month: 7, // August
    day: 15,
    eventId: 'toronto-espresso-curb',
    title: 'Sidewalk Coffee & Sparkplugs',
    status: 'Upcoming',
    time: '7:00 PM - 11:00 PM',
    venue: 'Cherry Beach Curb',
    address: '1 Cherry St, Toronto, ON'
  },
  {
    year: 2026,
    month: 8, // September
    day: 12,
    eventId: 'calgary-autumn-sunset',
    title: 'Autumn Cafe Ride & Social',
    status: 'Upcoming',
    time: '5:00 PM - 9:00 PM',
    venue: 'Analog Coffee Parking',
    address: '740 17 Ave SW, Calgary, AB'
  },
  {
    year: 2026,
    month: 9, // October
    day: 14,
    eventId: 'midweek-moped-madness',
    title: 'Midweek Curb Club',
    status: 'Midweek Meetup',
    time: '6:30 PM - 9:30 PM',
    venue: 'Sidewalk Caffe',
    address: '10130 104 St NW, Edmonton, AB'
  }
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_OF_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export default function FloatingCalendar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);
  // Default to July (6) because that's when the first event happens in our 2026 dataset
  const [currentMonth, setCurrentMonth] = useState(6);
  const [selectedDay, setSelectedDay] = useState<number | null>(11);
  const [selectedEvent, setSelectedEvent] = useState<EventDateMapping | null>(EVENTS_CALENDAR_DATA[0]);

  // Handle auto-selecting events when the month changes
  useEffect(() => {
    const eventInMonth = EVENTS_CALENDAR_DATA.find(
      (ev) => ev.year === currentYear && ev.month === currentMonth
    );
    if (eventInMonth) {
      setSelectedDay(eventInMonth.day);
      setSelectedEvent(eventInMonth);
    } else {
      setSelectedDay(null);
      setSelectedEvent(null);
    }
  }, [currentMonth, currentYear]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  // Grid math
  const firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();
  const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  const daysArray: (number | null)[] = [];
  // Fill leading empty cells
  for (let i = 0; i < firstDayIndex; i++) {
    daysArray.push(null);
  }
  // Fill actual days
  for (let d = 1; d <= totalDays; d++) {
    daysArray.push(d);
  }

  const handleDayClick = (day: number) => {
    setSelectedDay(day);
    const event = EVENTS_CALENDAR_DATA.find(
      (ev) => ev.year === currentYear && ev.month === currentMonth && ev.day === day
    );
    setSelectedEvent(event || null);
  };

  const jumpToEventsSection = () => {
    setIsOpen(false);
    const section = document.getElementById('events');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              id="floating-calendar-trigger"
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-5 py-4 bg-black text-white border-2 border-white/20 shadow-2xl hover:border-white transition-all cursor-pointer font-mono text-xs uppercase tracking-widest relative group rounded-none"
            >
              {/* Highlight Notification badge */}
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center bg-amber-500 text-black text-[10px] font-bold rounded-none font-sans border border-black animate-bounce">
                4
              </span>
              <CalendarIcon size={16} className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>{siteText.floatingCalendar.triggerText}</span>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Calendar Popup Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="floating-calendar-panel"
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="w-full max-w-[360px] bg-neutral-950 text-white border-2 border-white/15 shadow-2xl overflow-hidden mb-2 relative"
            >
              {/* Decorative side ticket notches */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border border-white/10 z-10"></div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border border-white/10 z-10"></div>

              <div className="p-5 space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-400 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 font-semibold">
                      {siteText.floatingCalendar.headerText}
                    </span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Close calendar"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Month Selector Controls */}
                <div className="flex items-center justify-between bg-white/[0.03] border border-white/5 p-2 rounded-none">
                  <button
                    onClick={handlePrevMonth}
                    className="p-1 hover:bg-white/10 hover:text-white text-neutral-400 transition-colors cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="font-serif font-semibold tracking-wide text-sm uppercase">
                    {MONTH_NAMES[currentMonth]} {currentYear}
                  </span>
                  <button
                    onClick={handleNextMonth}
                    className="p-1 hover:bg-white/10 hover:text-white text-neutral-400 transition-colors cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>

                {/* Calendar Grid Weekdays */}
                <div className="grid grid-cols-7 text-center gap-1">
                  {DAYS_OF_WEEK.map((day, i) => (
                    <span key={`day-${i}`} className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest py-1 font-semibold">
                      {day}
                    </span>
                  ))}
                </div>

                {/* Days Grid */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  {daysArray.map((day, index) => {
                    if (day === null) {
                      return <div key={`empty-${index}`} className="aspect-square" />;
                    }

                    // Check if this date has a registered event
                    const eventOnThisDay = EVENTS_CALENDAR_DATA.find(
                      (ev) => ev.year === currentYear && ev.month === currentMonth && ev.day === day
                    );

                    const isSelected = selectedDay === day;
                    
                    return (
                      <button
                        key={`day-btn-${day}`}
                        onClick={() => handleDayClick(day)}
                        className={`aspect-square text-xs font-mono flex flex-col items-center justify-center relative cursor-pointer select-none transition-all ${
                          isSelected
                            ? 'bg-white text-black font-extrabold'
                            : eventOnThisDay
                            ? 'bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30 hover:bg-amber-500/20'
                            : 'hover:bg-white/5 text-neutral-300'
                        }`}
                      >
                        <span>{day}</span>
                        
                        {/* Event indicator dot */}
                        {eventOnThisDay && !isSelected && (
                          <span className="absolute bottom-1 w-1 h-1 rounded-full bg-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Event Detail card */}
                <div className="border-t border-white/10 pt-4">
                  <AnimatePresence mode="wait">
                    {selectedEvent ? (
                      <motion.div
                        key={selectedEvent.eventId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] font-mono font-bold bg-amber-500 text-black px-1.5 py-0.5 uppercase tracking-wider">
                            {selectedEvent.status}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {MONTH_NAMES[selectedEvent.month]} {selectedEvent.day}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm text-white leading-tight">
                          {selectedEvent.title}
                        </h4>
                        <div className="space-y-1.5 text-[11px] text-neutral-300">
                          <div className="flex items-center gap-1.5">
                            <Clock size={11} className="text-amber-400 shrink-0" />
                            <span>{selectedEvent.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={11} className="text-amber-400 shrink-0" />
                            <span className="truncate">{selectedEvent.venue} — {selectedEvent.address}</span>
                          </div>
                        </div>
                        <button
                          onClick={jumpToEventsSection}
                          className="w-full py-2 bg-white text-black hover:bg-neutral-100 text-[10px] font-bold font-mono uppercase tracking-widest flex items-center justify-center gap-1.5 cursor-pointer mt-1"
                        >
                          <span>{siteText.floatingCalendar.buttonPassport}</span>
                          <ArrowRight size={11} />
                        </button>
                      </motion.div>
                    ) : (
                      <div className="text-center py-4 text-neutral-500 text-xs font-light font-sans italic">
                        {siteText.floatingCalendar.noEventText}
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
