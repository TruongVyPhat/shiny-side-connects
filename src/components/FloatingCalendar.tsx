import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, X, ChevronLeft, ChevronRight, Clock, MapPin, Sparkles, ArrowRight, Radio } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import siteText from '../siteText.json';
import { getCanadaCurrentTime, getEventDayStatus, isDateTodayInCanada, CanadaTimeInfo } from '../utils/canadaTime';

interface EventDateMapping {
  year: number;
  month: number; // 0-indexed (6 = July, 7 = August, etc.)
  day: number;
  eventId: string;
  title: string;
  status: string;
  time: string;
  address: string;
}

const EVENTS_CALENDAR_DATA: EventDateMapping[] = [
  {
    year: 2026,
    month: 7, // August (0-indexed)
    day: 15,
    eventId: 'full-send-august',
    title: 'Full-send august',
    status: 'Upcoming',
    time: '12:00 PM - 4:00 PM',
    address: 'Tipsy Moose Pub & Kitchen | 6464 Cartmell Pl SW, Edmonton'
  },
  {
    year: 2026,
    month: 6, // July (0-indexed)
    day: 11,
    eventId: 'mid-season-madness',
    title: 'Mid season madness night meet',
    status: 'Featured',
    time: '5:00 PM - 9:00 PM',
    address: '13303 Fort Rd NW, Edmonton, AB T5A 1C3, Canada'
  }
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_OF_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const getUpcomingEventsCount = (): number => {
  return EVENTS_CALENDAR_DATA.filter((event) => {
    const status = getEventDayStatus(event.year, event.month, event.day);
    return status === 'today' || status === 'upcoming';
  }).length;
};

export default function FloatingCalendar() {
  const [isOpen, setIsOpen] = useState(false);
  const [canadaTime, setCanadaTime] = useState<CanadaTimeInfo>(getCanadaCurrentTime());
  
  const [currentYear, setCurrentYear] = useState(canadaTime.year);
  const [currentMonth, setCurrentMonth] = useState(canadaTime.month);
  const [selectedDay, setSelectedDay] = useState<number | null>(canadaTime.day);
  
  // Find today's event initially
  const initialEvent = EVENTS_CALENDAR_DATA.find(
    (ev) => ev.year === canadaTime.year && ev.month === canadaTime.month && ev.day === canadaTime.day
  ) || EVENTS_CALENDAR_DATA[0];

  const [selectedEvent, setSelectedEvent] = useState<EventDateMapping | null>(initialEvent);

  const upcomingCount = getUpcomingEventsCount();

  // Keep Canada time updated in real time
  useEffect(() => {
    const interval = setInterval(() => {
      setCanadaTime(getCanadaCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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

  const isSelectedEventToday = selectedEvent
    ? isDateTodayInCanada(selectedEvent.year, selectedEvent.month, selectedEvent.day)
    : false;

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
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-none font-sans border border-black animate-pulse">
                {upcomingCount}
              </span>
              <CalendarIcon size={16} className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
              <span>{siteText.floatingCalendar.triggerText}</span>
              <span className="bg-red-950 border border-red-500/50 text-red-300 px-1.5 py-0.5 text-[9px] font-bold">TODAY</span>
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

              <div className="p-5 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-400 animate-pulse" />
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-300 font-semibold">
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

                {/* Canada Time Live Status Strip */}
                <div className="bg-neutral-900 border border-white/10 px-3 py-1.5 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1.5 text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    🇨🇦 CANADA TIME: {canadaTime.timeString}
                  </span>
                  <span className="text-amber-400 font-bold">AUG 15 • TODAY</span>
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

                    // Check if this date is today in Canada
                    const isTodayCell = isDateTodayInCanada(currentYear, currentMonth, day);

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
                            ? 'bg-white text-black font-extrabold shadow-md'
                            : isTodayCell
                            ? 'bg-red-950/80 text-red-300 font-bold border-2 border-red-500/80'
                            : eventOnThisDay
                            ? 'bg-amber-500/10 text-amber-400 font-bold border border-amber-500/30 hover:bg-amber-500/20'
                            : 'hover:bg-white/5 text-neutral-300'
                        }`}
                      >
                        <span>{day}</span>
                        
                        {/* Today indicator label */}
                        {isTodayCell && !isSelected && (
                          <span className="text-[8px] font-extrabold text-red-400 leading-none">TODAY</span>
                        )}

                        {/* Event indicator dot */}
                        {eventOnThisDay && !isSelected && !isTodayCell && (
                          <span className="absolute bottom-1 w-1 h-1 rounded-full bg-amber-400" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Event Detail card */}
                <div className="border-t border-white/10 pt-3">
                  <AnimatePresence mode="wait">
                    {selectedEvent ? (
                      <motion.div
                        key={selectedEvent.eventId}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-2.5"
                      >
                        <div className="flex items-center justify-between">
                          {isSelectedEventToday ? (
                            <span className="text-[9px] font-mono font-extrabold bg-red-600 text-white px-2 py-0.5 uppercase tracking-wider flex items-center gap-1 shadow-sm">
                              <Radio size={9} className="animate-pulse" />
                              HAPPENING TODAY
                            </span>
                          ) : (
                            <span className="text-[9px] font-mono font-bold bg-neutral-800 text-neutral-300 px-1.5 py-0.5 uppercase tracking-wider">
                              {selectedEvent.status}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-neutral-400">
                            {MONTH_NAMES[selectedEvent.month]} {selectedEvent.day}, {selectedEvent.year}
                          </span>
                        </div>
                        <h4 className="font-serif font-bold text-sm text-white leading-tight">
                          {selectedEvent.title}
                        </h4>
                        <div className="space-y-1 text-[11px] text-neutral-300">
                          <div className="flex items-center gap-1.5">
                            <Clock size={11} className="text-amber-400 shrink-0" />
                            <span>{selectedEvent.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin size={11} className="text-amber-400 shrink-0" />
                            <span className="truncate">{selectedEvent.address}</span>
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

