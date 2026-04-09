# Interactive Calendar Component

A modern, fully-featured interactive calendar built with React.js and Tailwind CSS. Perfect for planning, scheduling, and note-taking.

## Features ✨

### 1. **Beautiful Calendar UI**
- Wall calendar design inspired by physical calendars
- Hero image section with gradient overlay showing current month/year
- Responsive grid layout (7 columns: Mon–Sun)
- Clean UI with rounded corners, shadows, and modern styling
- Smooth transitions and hover effects

### 2. **Calendar Navigation**
- Previous/Next month buttons with smooth navigation
- Display current month and year prominently
- Real-time display of selected date range information

### 3. **Date Range Selection**
- Click to select start date
- Click again to select end date
- Automatic handling of reversed selections
- Visual highlighting of:
  - Start date (blue gradient background)
  - End date (blue gradient background)
  - All dates between them (light blue background)
  - Today's date (red ring with dot indicator)
- Reset selection button to clear and start over

### 4. **Notes Feature**
- **General Notes**: Save notes that persist across sessions
- **Date Range Notes**: Create specific notes for selected date ranges
- Character count display for each note
- All notes saved to browser's localStorage automatically
- Statistics showing number of range notes saved

### 5. **Responsive Design**
- **Desktop**: Side-by-side layout (calendar + notes panel)
- **Mobile**: Vertically stacked sections
- Touch-friendly UI with appropriate spacing and button sizes
- Optimized for all screen sizes

### 6. **Dark Mode** 🌙
- Toggle dark mode with sun/moon button (top-right corner)
- Preference saved to localStorage
- Smooth transitions between light and dark themes
- Carefully designed color schemes for both modes

### 7. **Keyboard & Accessibility**
- Focus states on all interactive elements
- Keyboard navigation support
- ARIA labels for accessibility
- Readable color contrasts in both light and dark modes

## Component Structure 📁

```
src/
├── App.jsx              # Main app wrapper with dark mode toggle
├── components/
│   ├── Calendar.jsx         # Main calendar logic and state management
│   ├── HeaderImage.jsx       # Hero header with gradient overlay
│   ├── CalendarGrid.jsx      # Calendar grid layout component
│   ├── DayCell.jsx           # Individual day cell component
│   └── NotesPanel.jsx        # Notes sidebar component
└── index.css            # Tailwind CSS directives
```

## Installation & Setup 🚀

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

## Usage 📖

### Selecting Date Ranges

1. **Click a day** to mark it as your start date
2. **Click another day** to mark it as your end date
3. All dates between will be highlighted in light blue
4. The header shows the total number of selected days
5. Click **Reset Selection** to start over

### Adding Notes

1. **General Notes**: Type in the top notes panel and click "Save Notes"
2. **Range Notes**: Select a date range, then type in the "Range Notes" section that appears below
3. All notes are automatically saved to browser localStorage

### Dark Mode

- Click the sun/moon button (☀️/🌙) in the top-right corner
- Your preference is saved and restored on next visit

## Technical Details 🔧

### Technologies Used
- **React 18.2**: UI components and state management
- **Tailwind CSS 3.3**: Pure CSS styling (no components library)
- **date-fns 2.30**: Date manipulation and formatting
- **Vite 4.4**: Lightning-fast build tool and dev server

### Key Libraries
- `date-fns`: For calendar date calculations and formatting
- `localStorage API`: For persistent data storage (notes and theme preference)

### Browser Compatibility
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

## Styling Details 🎨

### Color Theme (Light Mode)
- Primary: Blue (#2563EB - #1D4ED8)
- Secondary: Purple (#A855F7)
- Accent: Green for notes
- Background: Gray (#F3F4F6)

### Color Theme (Dark Mode)
- Primary: Dark Blue (#1E40AF - #0C3A7B)
- Secondary: Dark Purple (#6B21A8)
- Accent: Dark Green
- Background: Dark Gray (#111827)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Features Explained 💡

### Smart Date Selection
- **Forward Selection**: Select earlier date, then later date
- **Reverse Selection**: Select later date, then earlier date - automatically reverses
- **Visual Feedback**: Real-time feedback on selected dates and range

### Today Indicator
- Current date highlighted with a red ring
- Small dot below the date number
- Works alongside selected dates

### Legend Section
- Visual guide at bottom of page
- Shows meaning of different date highlighting
- Helps new users understand the interface

## Performance Optimizations ⚡

- Lazy component rendering with React.memo (when needed)
- Efficient date calculations
- Optimized re-renders with proper dependency arrays
- Minimal re-renders on state changes

## LocalStorage Data Structure 📦

### Theme
```
Key: 'theme'
Value: 'light' | 'dark'
```

### Notes
```
Key: 'currentNotes'
Value: {
  general: "General notes text",
  byDate: {
    "2024-04-01_2024-04-10": "Notes for this range",
    "2024-04-15_2024-04-20": "Another range..."
  }
}
```

## Tips & Tricks 💭

1. **Quick Month Navigation**: Use the arrow buttons to browse through months easily
2. **Compare Ranges**: Reset and select different date ranges to compare
3. **Export Notes**: Copy your notes text to save elsewhere
4. **Multiple Ranges**: Each date range gets its own notes entry in localStorage
5. **Dark Mode for Night**: Enable dark mode for comfortable evening browsing

## Future Enhancement Ideas 🔮

- Export calendar to PDF
- Color-coded event tags
- Week view option
- Multiple calendar support (shared calendars)
- Cloud sync for notes
- Recurring events
- Calendar sharing
- Import from other calendar apps (Google Calendar, Outlook)

## Troubleshooting 🔧

### Notes not saving?
- Check if localStorage is enabled in your browser
- Clear browser cache and try again
- Check browser console for errors (F12)

### Dark mode not persisting?
- Ensure localStorage is enabled
- Clear browser cache
- Try rejecting dark mode and enabling it again

### Calendar not displaying correctly?
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache
- Check browser console for errors

## License 📄

This project is created for the SWE Summer Intern Task.

## Support 📧

For issues or questions, please refer to the component documentation or check the browser console for error messages.

---

**Happy Planning! 📅✨**
