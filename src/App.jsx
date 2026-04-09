import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-slate-100 dark:bg-slate-950 transition-colors duration-500`}>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-2xl bg-white dark:bg-slate-900 shadow-lg hover:shadow-xl transition-shadow duration-200 text-slate-700 dark:text-slate-100"
          aria-label="Toggle dark mode"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 opacity-20 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 text-center lg:text-left">
            <p className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400 mb-3">
              SWE Summer Intern Task
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 dark:text-white">
              Wall Calendar Planner
            </h1>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0">
              A clean, professional wall calendar experience with smart date range selection, notes, holidays, and responsive desktop/mobile support.
            </p>
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  );
}
