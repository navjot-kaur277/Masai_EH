# 🎥 React Video Player (useRef Implementation)

A custom video player application built with React, demonstrating the difference between **State-driven UI** and **Ref-driven behavior**.

This project solves the assignment requirements by controlling HTML5 video elements using the `useRef` hook for playback controls, while using `useState` solely for managing the playlist logic.

## 🚀 Features

### ✅ Mandatory Part (Ref Implementation)
* **Direct DOM Manipulation:** Uses `useRef` to access the `<video>` tag directly.
* **Custom Controls:**
    * ▶ **Play:** Starts video playback.
    * ⏸ **Pause:** Pauses video playback.
    * ⏩ **Forward:** Skips ahead by 5 seconds.
    * ⏪ **Rewind:** Goes back by 5 seconds.
* **Performance:** Playback controls do **not** trigger component re-renders.

### ✨ Optional Part (Advanced Enhancement)
* **Playlist Support:** Handles an array of multiple video sources.
* **Navigation:** `Next` and `Previous` buttons to switch between videos.
* **State Management:** Uses `useState` strictly for tracking the `currentVideoIndex`.

---

## 💡 Important Observation (Learning Focus)

> **"Clicking Play / Pause / Forward / Rewind DOES NOT change React State."**

1.  **Behavior:** When you click the control buttons, the video plays or pauses immediately, but the React component does **not** re-render.
2.  **Why?** We are using `useRef` to store a reference to the DOM node (`videoRef.current`). Changing properties on a ref (like calling `.play()`) does not trigger a React state update.
3.  **Conclusion:** This proves that not all UI interactions require React State. For imperative APIs like Media Players, `useRef` is more efficient than `useState`.

---

## 🛠️ Tech Stack

* **Framework:** React (Vite)
* **Language:** JavaScript (ES6+)
* **Styling:** CSS3 (Glassmorphism / Dark Mode)
* **Tooling:** VS Code, Git Bash

---

## 📂 Project Structure

```text
react-ref-video-player/
├── src/
│   ├── components/
│   │   └── VideoPlayer.jsx   # Handles useRef logic (Play/Pause/Seek)
│   ├── App.jsx               # Handles useState logic (Playlist navigation)
│   ├── App.css               # Advanced creative styling
│   └── main.jsx              # Entry point
└── README.md