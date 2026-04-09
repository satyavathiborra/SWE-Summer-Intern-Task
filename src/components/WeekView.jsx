import React from 'react';
import { startOfWeek, addDays, format, isSameDay, isToday } from 'date-fns';

export default function WeekView({
  currentMonth,
  dateRange,
  onDateSelect,
  holidays,
}) {
  const weekStart = startOfWeek(currentMonth, { weekStartsOn: 1 });
  const weekDays = [0, 1, 2, 3, 4, 5, 6].map(i => addDays(weekStart, i));

  return (
    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-950">
      <div className="mb-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
        <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 text-center">
          Week overview
        </h3>
        <p className="mt-3 text-center text-base text-slate-700 dark:text-slate-200">
          {format(weekStart, 'MMMM d')} – {format(addDays(weekStart, 6), 'MMMM d, yyyy')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {weekDays.map((day, index) => {
          const isStart = dateRange.start && isSameDay(day, dateRange.start);
          const isEnd = dateRange.end && isSameDay(day, dateRange.end);
          const inRange = dateRange.start && dateRange.end && day > dateRange.start && day < dateRange.end;

          return (
            <div key={index} className="flex flex-col rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
              <div className="px-4 py-3 text-center border-b border-slate-200 dark:border-slate-800">
                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">{format(day, 'EEE')}</p>
                <p className={`mt-2 text-2xl font-semibold ${isToday(day) ? 'text-rose-600 dark:text-rose-400' : 'text-slate-900 dark:text-white'}`}>
                  {format(day, 'd')}
                </p>
              </div>

              <div className="flex-1 p-4 flex flex-col justify-between gap-3">
                <button
                  onClick={() => onDateSelect(day)}
                  className={`w-full rounded-3xl h-14 transition duration-200 font-semibold ${
                    isStart || isEnd
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                      : inRange
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white'
                      : isToday(day)
                      ? 'ring-2 ring-rose-500 bg-rose-50 dark:bg-rose-950 text-slate-900 dark:text-white'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  Select
                </button>

                {holidays?.[day.toISOString().split('T')[0]] && (
                  <div className="mt-auto rounded-2xl bg-amber-100 dark:bg-amber-900 px-3 py-2 text-center text-xs font-semibold text-amber-900 dark:text-amber-100">
                    🎉 {holidays[day.toISOString().split('T')[0]]}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
