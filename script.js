let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;

function startStop() {
  if (isRunning) {
    clearInterval(timer);
    document.getElementById("startStop").textContent = "Start";
  } else {
    timer = setInterval(updateDisplay, 10);
    document.getElementById("startStop").textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timer);
  document.getElementById("seconds").textContent = "00";
  document.getElementById("milliseconds").textContent = "00";
  milliseconds = 0;
  seconds = 0;
  isRunning = false;
  document.getElementById("startStop").textContent = "Start";
}

function updateDisplay() {
  milliseconds++;
  if (milliseconds === 100) {
    milliseconds = 0;
    seconds++;
    document.getElementById("seconds").textContent = padZero(seconds);
  }
  document.getElementById("milliseconds").textContent = padMilliseconds(milliseconds);
}

function padZero(number) {
  return (number < 10 ? "0" : "") + number;
}

function padMilliseconds(milliseconds) {
  return (milliseconds < 10 ? "0" : "") + milliseconds;
}
