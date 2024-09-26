const container = document.getElementById("container");
const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71", "rgb(6, 6, 255)"];
const SQUARES = 6000;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mousemove", () => setColor(square));
  square.addEventListener("mouseout", () => resetColor(square));
  container.appendChild(square)
}

function setColor(element) {
  const color = etRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 ${color}`;
}

function resetColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function etRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}