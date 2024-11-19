export const getWeekdayName = (
  weekdayString: string,
  locale: Intl.LocalesArgument = 'pl',
): string => {
  const WEEKDAYS = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];

  const weekdayIndex = WEEKDAYS.indexOf(weekdayString.toLowerCase());
  if (weekdayIndex < 0) throw new Error(`Unknown weekday "${weekdayString}"`);

  const dummyDate = new Date(2001, 0, weekdayIndex);

  return dummyDate.toLocaleDateString(locale, { weekday: 'long' });
};
