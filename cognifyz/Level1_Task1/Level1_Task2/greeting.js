const btn         = document.getElementById("greetBtn");
const greetingBox = document.getElementById("greetingBox");

btn.addEventListener("click", function () {
  const hour = new Date().getHours();

  let message = "";
  let emoji   = "";

  if (hour >= 5 && hour < 12) {
    message = "Good Morning! Rise and shine ☀️";
    emoji   = "🌅";
  } else if (hour >= 12 && hour < 17) {
    message = "Good Afternoon! Hope your day is going well 😊";
    emoji   = "🌤️";
  } else if (hour >= 17 && hour < 21) {
    message = "Good Evening! Time to relax 🌆";
    emoji   = "🌇";
  } else {
    message = "Good Night! Don't stay up too late 🌙";
    emoji   = "🌙";
  }

  greetingBox.textContent = `${emoji}  ${message}`;
  greetingBox.classList.remove("hidden");
});