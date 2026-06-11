const colors = [
  { bg: "#e91e63", shadow: "rgba(233,30,99,0.4)",  label: "Pink" },
  { bg: "#ff9800", shadow: "rgba(255,152,0,0.4)",   label: "Orange" },
  { bg: "#4caf50", shadow: "rgba(76,175,80,0.4)",   label: "Green" },
  { bg: "#9c27b0", shadow: "rgba(156,39,176,0.4)",  label: "Purple" },
  { bg: "#f44336", shadow: "rgba(244,67,54,0.4)",   label: "Red" },
  { bg: "#00bcd4", shadow: "rgba(0,188,212,0.4)",   label: "Cyan" },
  { bg: "#5c6bc0", shadow: "rgba(92,107,192,0.4)",  label: "Indigo" },
];

let currentIndex = 0;

const btn = document.getElementById("colorBtn");

btn.addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % colors.length;
  const selected = colors[currentIndex];

  btn.style.background  = selected.bg;
  btn.style.boxShadow   = `0 4px 14px ${selected.shadow}`;
  btn.textContent       = `Color: ${selected.label}`;
});