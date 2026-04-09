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
- Data persisted using **localStorage**

### 📱 Fully Responsive
- **Desktop**: Side-by-side layout (image + calendar + notes)
- **Mobile**: Stacked layout for smooth usability
- Touch-friendly interactions

---

## 🚀 Extra Features

- 🌙 Dark mode toggle
- 📌 Holiday markers (optional)
- 🖼 Hero image support
- 💾 Persistent data using localStorage

---

## 📁 Project Structure

src/
├── App.jsx
├── components/
│ ├── Calendar.jsx
│ ├── HeaderImage.jsx
│ ├── CalendarGrid.jsx
│ ├── DayCell.jsx
│ ├── NotesPanel.jsx


---

## 🛠 Tech Stack

- React 18  
- Vite  
- Tailwind CSS  
- date-fns  
- localStorage  

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
Built to replicate a wall calendar aesthetic
Focused on clean UI and smooth UX
Supports:
General notes
Date-range notes
Fully frontend (no backend)


📌 Data Persistence
Notes saved using localStorage
Date-range notes mapped to selected ranges
Theme preference persists across refresh
🎥 Demo
🎬 Video Walkthrough: YOUR_VIDEO_LINK
🌐 Live Demo: YOUR_LIVE_URL
📌 Submission Notes


Demonstrates:
Date range selection
Notes functionality
Responsive design
Built as per frontend-only requirement