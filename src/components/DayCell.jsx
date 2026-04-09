import React from 'react';
import { isToday, isSameDay, isSameMonth, format } from 'date-fns';

export default function DayCell({
  date,
  currentMonth,
  selectedRange,
  dateRange,
  onDateSelect,
  holiday,
}) {
  const isCurrentMonth = isSameMonth(date, currentMonth);
  const isTodayDate = isToday(date);
  const isStart = dateRange.start && isSameDay(date, dateRange.start);
  const isEnd = dateRange.end && isSameDay(date, dateRange.end);
  const isInRange =
    dateRange.start &&
    dateRange.end &&
    date > dateRange.start &&
    date < dateRange.end;
  const isStartOrEnd = isStart || isEnd;

  const handleClick = () => {
    if (isCurrentMonth) {
      onDateSelect(date);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={handleClick}
        disabled={!isCurrentMonth}
        className={`
          relative w-full h-14 rounded-3xl text-sm font-semibold transition-all duration-200
          ${!isCurrentMonth
            ? 'text-slate-400 dark:text-slate-600 cursor-default bg-slate-50 dark:bg-slate-950'
            : 'text-slate-900 dark:text-white cursor-pointer hover:-translate-y-0.5 hover:shadow-lg'
          }
          ${isStartOrEnd
            ? 'bg-blue-600 dark:bg-blue-400 text-white shadow-lg z-10'
            : isInRange
            ? 'bg-blue-100 dark:bg-blue-900'
            : ''
          }
          ${holiday && !isStartOrEnd
            ? 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-200 ring-1 ring-amber-300 dark:ring-amber-600'
            : ''
          }
          ${isTodayDate && !isStartOrEnd && !holiday
            ? 'ring-2 ring-rose-500 dark:ring-rose-400 bg-rose-50 dark:bg-rose-950'
            : ''
          }
          ${isCurrentMonth && !isStartOrEnd && !holiday
            ? 'hover:bg-slate-100 dark:hover:bg-slate-800'
            : ''
          }
          focus:outline-none focus:ring-2 focus:ring-slate-400 dark:focus:ring-slate-500
        `}
        title={`${format(date, 'EEEE, MMMM d, yyyy')}${holiday ? ` - ${holiday}` : ''}`}
      >
        <span className="relative z-10 block">{format(date, 'd')}</span>
        {isTodayDate && !isStartOrEnd && (
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 dark:bg-rose-400" />
        )}
      </button>
      {holiday && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-slate-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
          {holiday}
        </div>
      )}
    </div>
  );
}
