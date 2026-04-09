import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';

const TAG_COLORS = {
  work: 'bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-200',
  personal: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200',
  important: 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200',
  meeting: 'bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200',
  deadline: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
  travel: 'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-200',
};

const AVAILABLE_TAGS = ['work', 'personal', 'important', 'meeting', 'deadline', 'travel'];

export default function NotesPanel({ notes, dateRange, onSaveNotes }) {
  const [generalNote, setGeneralNote] = useState(notes.general);
  const [rangeNote, setRangeNote] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (dateRange.start && dateRange.end) {
      const rangeKey = `${format(dateRange.start, 'yyyy-MM-dd')}_${format(
        dateRange.end,
        'yyyy-MM-dd'
      )}`;
      const rangeNoteData = notes.byDate[rangeKey];
      setRangeNote(rangeNoteData?.text || '');
      setSelectedTags(rangeNoteData?.tags || []);
    } else {
      setRangeNote('');
      setSelectedTags([]);
    }
  }, [dateRange, notes]);

  useEffect(() => {
    setGeneralNote(notes.general);
  }, [notes.general]);

  const handleSaveGeneral = () => {
    setIsSaving(true);
    setTimeout(() => {
      onSaveNotes({
        ...notes,
        general: generalNote,
      });
      setIsSaving(false);
    }, 300);
  };

  const handleSaveRange = () => {
    if (!dateRange.start || !dateRange.end) return;

    setIsSaving(true);
    const rangeKey = `${format(dateRange.start, 'yyyy-MM-dd')}_${format(
      dateRange.end,
      'yyyy-MM-dd'
    )}`;
    setTimeout(() => {
      onSaveNotes({
        ...notes,
        byDate: {
          ...notes.byDate,
          [rangeKey]: {
            text: rangeNote,
            tags: selectedTags,
          },
        },
      });
      setIsSaving(false);
    }, 300);
  };

  const toggleTag = (tag) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="space-y-6 h-fit sticky top-6">
      <div className="rounded-[1.75rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_90px_-48px_rgba(15,23,42,0.25)] overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Notes</p>
          <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Monthly journal</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Keep quick memos or attach ideas to selected date ranges.
          </p>
        </div>
        <div className="p-6 space-y-4">
          <textarea
            value={generalNote}
            onChange={e => setGeneralNote(e.target.value)}
            placeholder="Write your general notes here..."
            style={{
              backgroundImage: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px)',
              backgroundSize: '100% 1.75rem',
            }}
            className="w-full min-h-[10rem] rounded-3xl border border-slate-200 dark:border-slate-800 px-4 py-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 resize-none"
          />
          <button
            onClick={handleSaveGeneral}
            disabled={isSaving}
            className="w-full inline-flex items-center justify-center gap-2 rounded-3xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-4 py-3 font-semibold transition hover:shadow-lg disabled:opacity-60"
          >
            {isSaving ? 'Saving...' : 'Save general note'}
          </button>
        </div>
      </div>

      {dateRange.start && dateRange.end && (
        <div className="rounded-[1.75rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_90px_-48px_rgba(15,23,42,0.25)] overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Range notes</p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              {format(dateRange.start, 'MMM d')} – {format(dateRange.end, 'MMM d')}
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">Category tags</p>
              <div className="flex flex-wrap gap-2">
                {AVAILABLE_TAGS.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${selectedTags.includes(tag) ? TAG_COLORS[tag] + ' ring-1 ring-slate-200 dark:ring-slate-700' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <textarea
              value={rangeNote}
              onChange={e => setRangeNote(e.target.value)}
              placeholder="Add notes for this selected range..."
              style={{
                backgroundImage: 'linear-gradient(rgba(148,163,184,0.08) 1px, transparent 1px)',
                backgroundSize: '100% 1.75rem',
              }}
              className="w-full min-h-[10rem] rounded-3xl border border-slate-200 dark:border-slate-800 px-4 py-4 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:focus:ring-slate-700 resize-none"
            />
            <button
              onClick={handleSaveRange}
              disabled={isSaving}
              className="w-full inline-flex items-center justify-center gap-2 rounded-3xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 px-4 py-3 font-semibold transition hover:shadow-lg disabled:opacity-60"
            >
              {isSaving ? 'Saving...' : 'Save range note'}
            </button>
          </div>
        </div>
      )}

      <div className="rounded-[1.75rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_90px_-48px_rgba(15,23,42,0.25)] p-6">
        <div className="flex items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">Note metrics</p>
            <p className="mt-2">Track your general and range note usage.</p>
          </div>
          <div className="space-y-2 text-right">
            <p><span className="font-semibold text-slate-900 dark:text-white">{generalNote.length}</span> chars</p>
            <p><span className="font-semibold text-slate-900 dark:text-white">{Object.keys(notes.byDate).length}</span> saved ranges</p>
          </div>
        </div>
      </div>
    </div>
  );
}
