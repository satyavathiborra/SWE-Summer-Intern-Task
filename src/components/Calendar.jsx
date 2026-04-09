import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, startOfWeek, endOfWeek, isToday, isSameMonth } from 'date-fns';
import HeaderImage from './HeaderImage';
import CalendarGrid from './CalendarGrid';
import WeekView from './WeekView';
import NotesPanel from './NotesPanel';

// US Holidays for 2026
const HOLIDAYS_2026 = {
  '2026-01-01': 'New Year\'s Day',
  '2026-01-19': 'MLK Jr. Day',
  '2026-02-16': 'Presidents Day',
  '2026-03-17': 'St. Patrick\'s Day',
  '2026-04-05': 'Easter',
  '2026-05-25': 'Memorial Day',
  '2026-07-04': 'Independence Day',
  '2026-09-07': 'Labor Day',
  '2026-10-12': 'Columbus Day',
  '2026-10-31': 'Halloween',
  '2026-11-26': 'Thanksgiving',
  '2026-12-25': 'Christmas',
};

export default function Calendar() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today);
  const [dateRange, setDateRange] = useState({ start: null, end: null });
  const [selectedRange, setSelectedRange] = useState({ start: null, end: null });
  const [viewMode, setViewMode] = useState('month'); // 'month' or 'week'
  const [heroImage, setHeroImage] = useState(() => {
    const saved = localStorage.getItem('heroImage');
    return saved || null;
  });
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('currentNotes');
    return saved ? JSON.parse(saved) : { general: '', byDate: {}, tags: [] };
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setHeroImage(base64);
        localStorage.setItem('heroImage', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };

  const handleDateSelect = (date) => {
    if (!dateRange.start) {
      setDateRange({ start: date, end: null });
      setSelectedRange({ start: date, end: null });
    } else if (!dateRange.end) {
      if (date < dateRange.start) {
        // Reverse selection
        setDateRange({ start: date, end: dateRange.start });
        setSelectedRange({ start: date, end: dateRange.start });
      } else {
        setDateRange({ start: dateRange.start, end: date });
        setSelectedRange({ start: dateRange.start, end: date });
      }
    } else {
      // Reset and start new selection
      setDateRange({ start: date, end: null });
      setSelectedRange({ start: date, end: null });
    }
  };

  const handleResetSelection = () => {
    setDateRange({ start: null, end: null });
    setSelectedRange({ start: null, end: null });
  };

  const saveNotes = (updatedNotes) => {
    setNotes(updatedNotes);
    localStorage.setItem('currentNotes', JSON.stringify(updatedNotes));
  };

  // Get all days to display in calendar grid
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 }); // Monday
  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const daysArray = eachDayOfInterval({ start: calendarStart, end: calendarEnd });

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Notes Panel */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <NotesPanel
              notes={notes}
              dateRange={dateRange}
              onSaveNotes={saveNotes}
            />
          </div>

          {/* Calendar Area */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="rounded-[2rem] overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-[0_48px_80px_-40px_rgba(15,23,42,0.35)]">
              <HeaderImage
                currentMonth={currentMonth}
                heroImage={heroImage}
                onImageUpload={handleImageUpload}
              />

              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 mb-2">
                      planner overview
                    </p>
                    <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                      {format(currentMonth, 'MMMM yyyy')}
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={handlePrevMonth}
                      className="inline-flex items-center justify-center h-11 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition"
                      aria-label="Previous month"
                    >
                      ← Previous
                    </button>
                    <button
                      onClick={handleNextMonth}
                      className="inline-flex items-center justify-center h-11 px-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition"
                      aria-label="Next month"
                    >
                      Next →
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-400 mb-4">
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2">
                    View: <span className="font-semibold text-slate-900 dark:text-white">{viewMode}</span>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-4 py-2 flex gap-2">
                    <button
                      onClick={() => setViewMode('month')}
                      className={`px-3 py-1 rounded-full transition ${viewMode === 'month' ? 'bg-slate-900 text-white' : 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                      Month
                    </button>
                    <button
                      onClick={() => setViewMode('week')}
                      className={`px-3 py-1 rounded-full transition ${viewMode === 'week' ? 'bg-slate-900 text-white' : 'bg-transparent text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                    >
                      Week
                    </button>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                  {viewMode === 'month' ? (
                    <CalendarGrid
                      daysArray={daysArray}
                      currentMonth={currentMonth}
                      selectedRange={selectedRange}
                      dateRange={dateRange}
                      onDateSelect={handleDateSelect}
                      holidays={HOLIDAYS_2026}
                    />
                  ) : (
                    <WeekView
                      currentMonth={currentMonth}
                      selectedRange={selectedRange}
                      dateRange={dateRange}
                      onDateSelect={handleDateSelect}
                      holidays={HOLIDAYS_2026}
                    />
                  )}
                </div>

                {dateRange.start && (
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-4">
                    <div className="text-sm text-slate-700 dark:text-slate-300">
                      {dateRange.end ? (
                        <>Selected <span className="font-semibold text-slate-900 dark:text-white">{format(dateRange.start, 'MMM dd')}</span> to <span className="font-semibold text-slate-900 dark:text-white">{format(dateRange.end, 'MMM dd')}</span> ({Math.floor((dateRange.end - dateRange.start) / (1000 * 60 * 60 * 24)) + 1} days)</>
                      ) : (
                        <>Start date selected: <span className="font-semibold text-slate-900 dark:text-white">{format(dateRange.start, 'MMM dd, yyyy')}</span></>
                      )}
                    </div>
                    <button
                      onClick={handleResetSelection}
                      className="inline-flex items-center justify-center h-11 px-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-100 hover:border-slate-300 dark:hover:border-slate-600 transition"
                    >
                      Reset selection
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Legend</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-red-500" /> Today
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-blue-600" /> Selected
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-blue-100 dark:bg-blue-700" /> Range
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-amber-400" /> Holiday
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Pro tips</h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Use the week view for quick scheduling.</li>
                  <li>• Add notes with tags for better context.</li>
                  <li>• Upload a hero image to personalize the calendar.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
