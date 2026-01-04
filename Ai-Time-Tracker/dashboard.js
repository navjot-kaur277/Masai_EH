import { auth, db } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc,
  getDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

let uid = null;
let currentDate = null;
let activities = []; // [{id, name, category, duration}]

// Elements
const logoutBtn = document.getElementById("logoutBtn");
const datePicker = document.getElementById("datePicker");
const loadDateBtn = document.getElementById("loadDateBtn");
const nameInput = document.getElementById("activityName");
const categorySelect = document.getElementById("activityCategory");
const durationInput = document.getElementById("activityDuration");
const addBtn = document.getElementById("addActivityBtn");
const list = document.getElementById("activityList");
const remainingEl = document.getElementById("remainingTime");
const analyseBtn = document.getElementById("analyseBtn");
const noDataEl = document.getElementById("noData");
const totalTimeEl = document.getElementById("totalTime");
const activityCountEl = document.getElementById("activityCount");
const exportBtn = document.getElementById("exportCsvBtn");

// Auth gate
onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "index.html";
    return;
  }
  uid = user.uid;
  datePicker.value = new Date().toISOString().split("T")[0];
  loadDate(datePicker.value);
});

logoutBtn.addEventListener("click", async () => {
  await signOut(auth);
  window.location.href = "index.html";
});

loadDateBtn.addEventListener("click", () => loadDate(datePicker.value));
addBtn.addEventListener("click", () => addActivity());
analyseBtn.addEventListener("click", () => analyseDay());
exportBtn.addEventListener("click", () => exportToCSV());

// Load activities by date from Firestore
async function loadDate(dateStr) {
  if (!uid) return alert("User not ready yet, try again.");
  currentDate = dateStr;

  const dayRef = doc(db, `users/${uid}/days/${currentDate}`);
  const snap = await getDoc(dayRef);

  activities = [];
  if (snap.exists()) {
    const data = snap.data();
    if (data.activities) {
      activities = Object.entries(data.activities).map(([id, obj]) => ({
        id, ...obj
      }));
    }
  }
  renderList();
  renderSummary();
  renderCharts();
}

function addActivity() {
  const name = nameInput.value.trim();
  const category = categorySelect.value;
  const duration = parseInt(durationInput.value, 10);

  if (!currentDate) return alert("Select a date first.");
  if (!name || !duration || duration <= 0) return alert("Enter a valid name and duration.");

  const newTotal = totalMinutes() + duration;
  if (newTotal > 1440) return alert("Total minutes exceed 1440 for the day.");

  const id = crypto.randomUUID();
  activities.push({ id, name, category, duration });
  nameInput.value = "";
  durationInput.value = "";

  renderList();
  renderSummary();
  toggleNoData();
}

async function editActivity(id) {
  const item = activities.find(a => a.id === id);
  if (!item) return;
  const newName = prompt("Edit name:", item.name) ?? item.name;
  const newCategory = prompt("Edit category (Work, Study, Sleep, Exercise, Entertainment, Other):", item.category) ?? item.category;
  const newDurationStr = prompt("Edit duration (minutes):", String(item.duration)) ?? String(item.duration);
  const newDuration = parseInt(newDurationStr, 10);
  if (!newName || !newCategory || !newDuration || newDuration <= 0) return alert("Invalid inputs.");

  const hypotheticalTotal = totalMinutes() - item.duration + newDuration;
  if (hypotheticalTotal > 1440) return alert("Update exceeds 1440 minutes.");

  // Update local copy
  item.name = newName;
  item.category = newCategory;
  item.duration = newDuration;

  renderList();
  renderSummary();
  toggleNoData();

  // Push update to Firestore immediately
  if (uid && currentDate) {
    const dayRef = doc(db, `users/${uid}/days/${currentDate}`);
    await setDoc(dayRef, {
      activities: {
        [id]: { name: newName, category: newCategory, duration: newDuration }
      }
    }, { merge: true });
    alert("Activity updated in Firestore!");
  }
}

function deleteActivity(id) {
  activities = activities.filter(a => a.id !== id);
  renderList();
  renderSummary();
  toggleNoData();
}

function totalMinutes() {
  return activities.reduce((sum, a) => sum + a.duration, 0);
}

function renderSummary() {
  const total = totalMinutes();
  const remaining = 1440 - total;
  remainingEl.textContent = `You have ${remaining} minutes left for this day.`;
  totalTimeEl.textContent = formatMinutesToHours(total);
  activityCountEl.textContent = String(activities.length);
  analyseBtn.disabled = total <= 0;
}

function formatMinutesToHours(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function renderList() {
  list.innerHTML = "";
  activities.forEach(a => {
    const li = document.createElement("li");
    li.className = "list-item";
    const left = document.createElement("div");
    const right = document.createElement("div");

    left.innerHTML = `
      <div class="item-title">${a.name}</div>
      <div class="item-meta">${a.category} • ${a.duration} min</div>
    `;
    right.className = "item-actions";
    const editBtn = document.createElement("button");
    editBtn.className = "btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => editActivity(a.id));

    const delBtn = document.createElement("button");
    delBtn.className = "btn danger";
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteActivity(a.id));

    right.appendChild(editBtn);
    right.appendChild(delBtn);
    li.appendChild(left);
    li.appendChild(right);
    list.appendChild(li);
  });
  toggleNoData();
}

function toggleNoData() {
  noDataEl.style.display = activities.length ? "none" : "block";
}

async function analyseDay() {
  if (!uid || !currentDate) return alert("Select a date first.");
  if (activities.length === 0) return alert("No data to analyse.");

  const mapped = {};
  activities.forEach(a => {
    mapped[a.id] = { name: a.name, category: a.category, duration: a.duration };
  });

  const dayRef = doc(db, `users/${uid}/days/${currentDate}`);
  await setDoc(dayRef, { activities: mapped, analysedAt: new Date().toISOString() }, { merge: true });

  renderCharts();

  // Scroll to chart section after analysis
  const chartSection = document.getElementById("chartSection");
  if (chartSection) {
    chartSection.scrollIntoView({ behavior: "smooth" });
  }

  alert("Analysis updated for this date.");
}

function groupedByCategory() {
  const map = new Map();
  activities.forEach(a => {
    map.set(a.category, (map.get(a.category) || 0) + a.duration);
  });
  const labels = Array.from(map.keys());
  const values = Array.from(map.values());
  return { labels, values };
}

let pieInstance = null;
let barInstance = null;

function renderCharts() {
  const { labels, values } = groupedByCategory();

  const pieCanvas = document.getElementById("pieChart");
  const barCanvas = document.getElementById("barChart");
  const pieCtx = pieCanvas.getContext("2d");
  const barCtx = barCanvas.getContext("2d");

  if (pieInstance) pieInstance.destroy();
  if (barInstance) barInstance.destroy();

  // Gradient fills for pie slices (light -> dark for depth)
  const gradients = [
    pieCtx.createLinearGradient(0, 0, 0, 200),
    pieCtx.createLinearGradient(0, 0, 0, 200),
    pieCtx.createLinearGradient(0, 0, 0, 200),
    pieCtx.createLinearGradient(0, 0, 0, 200),
    pieCtx.createLinearGradient(0, 0, 0, 200),
    pieCtx.createLinearGradient(0, 0, 0, 200)
  ];
  gradients[0].addColorStop(0, "#a5b4fc"); gradients[0].addColorStop(1, "#6366f1"); // indigo
  gradients[1].addColorStop(0, "#67e8f9"); gradients[1].addColorStop(1, "#22d3ee"); // cyan
  gradients[2].addColorStop(0, "#6ee7b7"); gradients[2].addColorStop(1, "#10b981"); // green
  gradients[3].addColorStop(0, "#fcd34d"); gradients[3].addColorStop(1, "#f59e0b"); // amber
  gradients[4].addColorStop(0, "#fca5a5"); gradients[4].addColorStop(1, "#ef4444"); // red
  gradients[5].addColorStop(0, "#c4b5fd"); gradients[5].addColorStop(1, "#8b5cf6"); // violet

  // Pie chart
  pieInstance = new Chart(pieCtx, {
    type: "pie",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: gradients,
        borderColor: "#ffffff",
        borderWidth: 2
      }]
    },
    options: {
      plugins: {
        legend: { position: "bottom" },
        tooltip: { enabled: true }
      },
      animation: { animateRotate: true, animateScale: true }
    }
  });

  // Vertical gradient for bar chart (gives depth)
  const barGradient = barCtx.createLinearGradient(0, 0, 0, 400);
  barGradient.addColorStop(0, "#22d3ee");
  barGradient.addColorStop(1, "#0ea5e9");

  // Bar chart
  barInstance = new Chart(barCtx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Minutes",
        data: values,
        backgroundColor: barGradient,
        borderColor: "#0ea5e9",
        borderWidth: 2,
        borderRadius: 6
      }]
    },
    options: {
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 60 } },
        x: { ticks: { autoSkip: false } }
      },
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      animation: { duration: 800, easing: "easeOutBounce" }
    }
  });
}

// Export to CSV
function exportToCSV() {
  if (activities.length === 0) return alert("No data to export.");

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Activity,Category,Duration (minutes)\n";
  activities.forEach(a => {
    csvContent += `${a.name},${a.category},${a.duration}\n`;
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `activities_${currentDate}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
