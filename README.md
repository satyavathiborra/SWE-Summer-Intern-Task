# SWE-Summer-Intern-Task
Interactive Wall Calendar built with React + Tailwind featuring date range selection, notes, and responsive design.
# 📅 Interactive Wall Calendar

A polished **React + Tailwind CSS** interactive calendar component inspired by a physical wall calendar layout.  
It combines a modern UI with powerful features like date range selection, notes management, and responsive design.

---

## ✨ Features

### 🎨 Wall Calendar Aesthetic
- Hero image paired with monthly calendar
- Clean layout with strong visual hierarchy
- Premium wall-calendar inspired UI

### 📆 Date Range Selection
- Select **start date** and **end date**
- Highlights:
  - Start date
  - End date
  - Dates in between
- Handles edge cases (reverse selection, reset)

### 📝 Notes System
- Add **general monthly notes**
- Attach notes to **selected date ranges**
- Optional category tags for better organization
- Data persisted using **localStorage**

### 📱 Fully Responsive
- **Desktop**: Side-by-side layout (image + calendar + notes)
- **Mobile**: Stacked layout for smooth usability
- Touch-friendly interactions

---

## 🚀 Extra Features

- 🌙 Dark mode toggle
- 📌 Holiday markers with tooltips
- 🖼 Hero image upload support
- 💾 Persistent data using localStorage (notes + theme)
- 📅 Optional week-view mode

---

## 📁 Project Structure
src/
├── App.jsx # App shell and theme management
├── components/
│ ├── Calendar.jsx # Main calendar logic and state
│ ├── HeaderImage.jsx # Hero image and month display
│ ├── CalendarGrid.jsx # Calendar layout grid
│ ├── DayCell.jsx # Individual day cell
│ ├── NotesPanel.jsx # Notes UI and logic
│ ├── WeekView.jsx # Optional weekly view


---

## 🛠 Tech Stack

- React 18
- Vite
- Tailwind CSS
- date-fns
- Browser localStorage

---

## ⚙️ Getting Started

### 📦 Installation

```bash
npm install

▶️ Run Locally

npm run dev

Open:

http://localhost:5173

📦 Build

npm run build
npm run preview

💡 Design Decisions
Built to replicate a physical wall calendar aesthetic
Focused on clean UI and smooth UX
Supports both:
General notes
Date-range specific notes
Fully client-side (no backend required)
Modular component structure for scalability

📌 Data Persistence
Notes are saved per month
Range notes are attached to selected date ranges
Theme (dark/light mode) persists across refresh
Implemented using localStorage


🎥 Demo
🎬 Video Walkthrough: YOUR_VIDEO_LINK
🌐 Live Demo: YOUR_LIVE_URL

📌 Submission Notes
Demonstrates:
Date range selection
Notes functionality
Responsive design (mobile + desktop)
Built as a frontend-only solution as required
Focused on usability, performance, and clean architecture
