document.addEventListener("DOMContentLoaded", function () {
  // Display current time with seconds
  function updateCurrentTime() {
    const currentTimeElement = document.getElementById("currentTime");
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    currentTimeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
  setInterval(updateCurrentTime, 1000);

  // Timer functionality
  let timer;
  let startTime;
  let elapsedTime = 0;
  const timerDisplay = document.getElementById("timerDisplay");

  function startTimer() {
    if (!timer) {
      startTime = Date.now() - elapsedTime;
      timer = setInterval(updateTimer, 1000);
    }
  }

  function stopTimer() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00";
  }

  function updateTimer() {
    elapsedTime = Date.now() - startTime;
    const totalSeconds = Math.floor(elapsedTime / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    timerDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  }

  document.getElementById("startTimer").addEventListener("click", startTimer);
  document.getElementById("stopTimer").addEventListener("click", stopTimer);
  document.getElementById("resetTimer").addEventListener("click", resetTimer);
});
