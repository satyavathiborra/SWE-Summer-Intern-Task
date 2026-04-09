import React from 'react';
import DayCell from './DayCell';

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function CalendarGrid({
  daysArray,
  currentMonth,
  selectedRange,
  dateRange,
  onDateSelect,
  holidays,
}) {
  return (
    <div className="p-4 sm:p-6">
      <div className="grid grid-cols-7 gap-2 mb-3">
        {WEEKDAYS.map(day => (
          <div
            key={day}
            className="h-12 flex items-center justify-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2">
        {daysArray.map((day, index) => (
          <DayCell
            key={index}
            date={day}
            currentMonth={currentMonth}
            selectedRange={selectedRange}
            dateRange={dateRange}
            onDateSelect={onDateSelect}
            holiday={holidays?.[day.toISOString().split('T')[0]]}
          />
        ))}
      </div>
    </div>
  );
}
