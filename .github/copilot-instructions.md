# Interactive Calendar Component - Project Instructions

## Project Overview
A modern, fully-featured interactive calendar built with React.js and Tailwind CSS. Features include month navigation, date range selection, notes management with localStorage, responsive design, and dark mode support.

## Technology Stack
- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 4.4
- **Styling**: Tailwind CSS 3.3
- **Date Utilities**: date-fns 2.30
- **Storage**: Browser localStorage API

## Project Structure
```
src/
├── App.jsx                    - Main app with dark mode toggle
├── components/
│   ├── Calendar.jsx           - Core calendar logic
│   ├── HeaderImage.jsx        - Hero section
│   ├── CalendarGrid.jsx       - Grid layout
│   ├── DayCell.jsx            - Individual day
│   └── NotesPanel.jsx         - Notes management
├── main.jsx                   - Entry point
└── index.css                  - Tailwind directives
```

## Features Implemented
- Wall calendar design with hero image and gradient overlay
- 7-column calendar grid (Mon-Sun) with correct day alignment
- Month navigation (Previous/Next buttons)
- Date range selection with visual highlighting
- Start date, end date, and date range highlighting
- Edge case handling (reset selection, reverse selection)
- Notes feature with general and date-range-specific notes
- localStorage integration for persistent notes and theme
- Fully responsive design (desktop/mobile stacking)
- Dark mode toggle with preference persistence
- Smooth animations and transitions
- Today's date highlighting
- Touch-friendly UI

## Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
Server: http://localhost:5173/

### Build for Production
```bash
npm run build
npm run preview
```

## Key Component Details

### App.jsx
- Manages dark mode state
- Persists theme to localStorage
- Global style wrapper

### Calendar.jsx (Main Logic)
- Manages: currentMonth, dateRange, selectedRange, notes
- Handles month navigation
- Manages date range selection logic
- Coordinates with child components

### CalendarGrid.jsx & DayCell.jsx
- Displays calendar grid
- Handles day highlighting based on state
- Today's date indicator
- Click handlers for date selection

### NotesPanel.jsx
- General notes with auto-save
- Date-range-specific notes
- Character count display
- localStorage sync

## Styling Approach
- 100% Tailwind CSS utilities
- No external component libraries
- Dark mode via Tailwind class strategy
- Responsive mobile-first design
- Blue theme for selections, red for today, green/purple for notes

## Data Persistence (localStorage)
- **'currentNotes'**: Stores all notes (general + by-date)
- **'theme'**: Stores user's theme preference

## Design Principles
- Single responsibility per component
- Props flow down, events bubble up
- Reusable, testable components
- Minimal prop drilling
- Clean code structure

## Performance Considerations
- Calendar recalculates only on month change
- Notes update with 300ms debounce
- Optimized re-renders
- No unnecessary component renders

## Browser Support
- Chrome/Chromium: ✅
- Firefox: ✅
- Safari: ✅
- Edge: ✅
- Mobile browsers: ✅

## Responsive Breakpoints
- Mobile: < 768px (vertical stack)
- Tablet: 768px - 1024px
- Desktop: > 1024px (side-by-side)

## Testing Checklist
- Month navigation functional
- Date range selection works correctly
- Notes persist after refresh
- Dark mode persists after refresh
- Responsive on mobile/tablet/desktop
- Today's date highlighted
- Reset selection clears dates
- Reverse selection handles correctly

## Available Commands
```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run preview   # Preview build
npm run lint      # Run ESLint
```

## Troubleshooting

### States not updating
- Check browser console
- Verify localhost:5173 is accessible
- Clear cache and refresh (Ctrl+Shift+R)

### Notes not saving
- Check localStorage is enabled
- Verify browser storage quota not exceeded
- Clear cache and retry

### Styling issues
- Check tailwind.config.js paths
- Verify index.css has Tailwind directives
- Rebuild with npm run build

## Code Quality Standards
- ES6+ functional components
- React hooks (useState, useEffect)
- Consistent formatting
- No console warnings
- Accessible UI (focus states, ARIA labels)

## Dependencies
- react@18.2.0
- react-dom@18.2.0
- date-fns@2.30.0
- tailwindcss@3.3.3
- vite@4.4.5

## Project Status
✅ All requirements implemented
✅ All bonus features included
✅ Fully responsive and tested
✅ Production-ready
✅ Comprehensive documentation

## Additional Resources
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- date-fns: https://date-fns.org
- Vite: https://vitejs.dev