# Countdown Timer

A robust, web-based countdown timer featuring a modern "Neo-Brutalist" (boxy) design. This project demonstrates advanced state management in vanilla JavaScript, handling timer logic, audio looping, and browser notifications.

![Project Screenshot](placeholder_image_screenshot.png)
*(Add a screenshot of your timer here)*

## ✨ Features

* **Custom Input:** Set duration in Minutes and Seconds.
* **Smart Controls:** Start, Pause, Resume, and Cancel functionality.
* **State Management:** The timer remembers exactly where it paused.
* **Audio Alarm:** plays a looping beep sound when the timer hits zero.
* **Auto-Stop:** Alarm automatically silences after 10 seconds if not dismissed.
* **Browser Notifications:** Sends a desktop alert when the timer finishes.
* **Minimalist Design:** High-contrast, outline-style UI using pure CSS.

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox for layout, custom shadows for the "Boxy" look, and CSS transitions.
* **JavaScript (ES6+):** `setInterval` logic, `Audio` API, and `Notification` API.

## 📂 Project Structure

```text
/
├── index.html   # The structure and UI elements
├── style.css    # Neo-brutalist styling (borders, shadows, animations)
└── script.js    # Logic for timer, audio, and state management
