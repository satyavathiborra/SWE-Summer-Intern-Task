import React from 'react';
import { format } from 'date-fns';

export default function HeaderImage({ currentMonth, heroImage, onImageUpload }) {
  return (
    <div className="relative overflow-hidden rounded-t-[2rem] h-72 bg-slate-900">
      <div className="absolute inset-0 bg-slate-950/95" />
      {heroImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-slate-950/55" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950" />
      )}

      <div className="absolute inset-x-0 top-0 flex justify-center pt-6">
        <div className="flex items-center gap-2">
          <div className="w-12 h-3 rounded-full bg-slate-200/80 dark:bg-slate-700/80" />
          <div className="w-12 h-3 rounded-full bg-slate-200/80 dark:bg-slate-700/80" />
          <div className="w-12 h-3 rounded-full bg-slate-200/80 dark:bg-slate-700/80" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
      <div className="relative h-full p-8 flex flex-col justify-end">
        <p className="text-xs uppercase tracking-[0.45em] text-slate-300 mb-3">
          Wall calendar
        </p>
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight">
            {format(currentMonth, 'MMMM')}
          </h1>
          <p className="mt-2 text-base text-slate-300">
            {format(currentMonth, 'yyyy')} · Date range planner with notes and holiday markers.
          </p>
        </div>
      </div>

      <label className="absolute top-6 right-6 z-20 cursor-pointer">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 shadow-sm transition hover:bg-white">
          <span>📸</span>
          <span>Change cover</span>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
          aria-label="Upload calendar header image"
        />
      </label>
    </div>
  );
}
