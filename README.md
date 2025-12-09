# AI Time Tracker

AI Time Tracker is a web application that helps users log, analyze, and visualize their daily activities.  
It uses **Firebase Authentication** for secure login, **Firestore** for data storage, and **Chart.js** for analytics visualization.

---

## 🚀 Features

- **User Authentication**  
  Secure login/logout using Firebase Authentication.

- **Daily Activity Logging**  
  Add activities with name, category, and duration (minutes).

- **Validation**  
  Prevents exceeding 1440 minutes per day.

- **Edit & Delete Activities**  
  Update or remove activities directly from the dashboard.

- **Analytics Dashboard**  
  Pie chart and bar chart breakdown of time spent per category.

- **Export to CSV** *(optional feature)*  
  Download your daily activities as a `.csv` file for external analysis.

---

## 📂 Project Structure

project-root/ 
 │
 ├── index.html # Login / signup page 
 ├── dashboard.html # Main dashboard UI 
 ├── styles.css # Styling 
 ├── firebase.js # Firebase config & initialization 
 ├── dashboard.js # Dashboard logic (activities, charts, Firestore) 
 |── README.md # Documentation

 
---

## ⚙️ Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/navjot-kaur277/AI-Powered-Daily-Time-Tracking-Analytics-Dashboard.git
   cd AI-Powered-Daily-Time-Tracking-Analytics-Dashboard

##📊 Usage
  Sign up / Log in with your email and password.

  Select a date and load activities.

  Add activities with name, category, and duration.

  Click Analyse to save and visualize your day.

  Edit/Delete activities as needed (updates Firestore immediately).

  Export to CSV to download your activity log.

##🛠️ Technologies Used
  HTML5 / CSS3 / JavaScript (ES6+)

  Firebase Authentication & Firestore

  Chart.js for analytics visualization

##✅ Assignment Notes
  All required features implemented:

  Authentication

  Activity logging

  Analytics visualization

Optional features added:

  Edit saved data (Firestore updates instantly)

  Export to CSV (download daily logs)

  Professional UI with validation and error handling.

##📌 Future Improvements
  📅 Weekly/monthly analytics view

  🎨 Category customization

  🌗 Dark/light theme toggle

  📱 Mobile‑friendly responsive design

  ## 🎥 Video Walkthrough

    Google Drive link: 
    (veiw on Google drive) (https://drive.google.com/file/d/1oYgjkO2BagalmJ7lHUMihbQKYlzcVoZN/view?usp=sharing)

 ##👨‍💻 Author

   Developed by
   Navjot Kaur
   Bathinda, Punjab, India
   December 2025