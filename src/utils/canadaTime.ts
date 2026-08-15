// Utility for handling Canadian Timezone (Mountain Time / Edmonton, Alberta - America/Edmonton)

export const CANADA_TIMEZONE = 'America/Edmonton';

export interface CanadaTimeInfo {
  year: number;
  month: number; // 0-indexed (0 = Jan, 7 = Aug)
  day: number;
  dayOfWeek: string;
  monthName: string;
  formattedDate: string;
  timeString: string;
  timezoneAbbr: string;
  isoDateString: string; // YYYY-MM-DD
}

export function getCanadaCurrentTime(baseDate: Date = new Date()): CanadaTimeInfo {
  // Format in America/Edmonton timezone
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: CANADA_TIMEZONE,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    weekday: 'long'
  });

  const parts = formatter.formatToParts(baseDate);
  const getPart = (type: string) => parts.find((p) => p.type === type)?.value || '';

  const year = parseInt(getPart('year'), 10) || baseDate.getFullYear();
  const month = (parseInt(getPart('month'), 10) || baseDate.getMonth() + 1) - 1;
  const day = parseInt(getPart('day'), 10) || baseDate.getDate();
  const dayOfWeek = getPart('weekday') || 'Saturday';

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthName = monthNames[month];

  const hour = getPart('hour');
  const minute = getPart('minute');
  const dayPeriod = getPart('dayPeriod').toUpperCase();
  const timeString = `${hour}:${minute} ${dayPeriod}`;

  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  const isoDateString = `${year}-${mm}-${dd}`;

  return {
    year,
    month,
    day,
    dayOfWeek,
    monthName,
    formattedDate: `${dayOfWeek}, ${monthName} ${day}, ${year}`,
    timeString,
    timezoneAbbr: 'MDT (Canada)',
    isoDateString
  };
}

export function isDateTodayInCanada(year: number, month: number, day: number): boolean {
  const current = getCanadaCurrentTime();
  return current.year === year && current.month === month && current.day === day;
}

export function getEventDayStatus(year: number, month: number, day: number): 'today' | 'upcoming' | 'past' {
  const current = getCanadaCurrentTime();
  const currentVal = current.year * 10000 + current.month * 100 + current.day;
  const eventVal = year * 10000 + month * 100 + day;

  if (eventVal === currentVal) return 'today';
  if (eventVal > currentVal) return 'upcoming';
  return 'past';
}
