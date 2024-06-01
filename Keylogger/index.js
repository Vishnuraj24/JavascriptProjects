const logdiv = document.getElementById("log-div");
const statediv = document.getElementById("state-div");
const startbtn = document.getElementById("start");
const stopbtn = document.getElementById("stop");
const header = document.getElementById("header");

startbtn.addEventListener("click", () => {
  document.addEventListener("keydown", handledown);
  document.addEventListener("keyup", handleup);
  startbtn.disabled = true;
  stopbtn.disabled = false;
});

stopbtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handledown);
  document.removeEventListener("keyup", handleup);
  logdiv.textContent = "";
  statediv.textContent = "";
  startbtn.disabled = false;
  stopbtn.disabled = true;
});

function handledown(e) {
  logdiv.textContent = `Key ${e.key} pressed down`;
  statediv.textContent = "Key pressed down";
}

function handleup(e) {
  logdiv.textContent = `Key ${e.key} pressed up`;
  statediv.textContent = "Key pressed up";
}

var colors = ["red", "blue", "green", "purple", "orange"];

// Function to change the color
function changeColor() {
  // Pick a random color from the list
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  var randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  // Set the text color
  header.style.color = randomColor;
  header.style.borderColor = randomColor1;
}

// Set up the timer to change the color every 1000 milliseconds (1 second)
setInterval(changeColor, 200);
