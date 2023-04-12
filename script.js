// Timers data structure
let timers = {
  timer1: {
    time: 0,
    intervalId: null
  },

  timer2: {
    time: 0,
    intervalId: null
  },

  timer3: {
    time: 0,
    intervalId: null
  },

  timer4: {
    time: 0,
    intervalId: null
  },

  timer5: {
    time: 0,
    intervalId: null
  },

  timer6: {
    time: 0,
    intervalId: null
  },

};

// Start Timer function
function startTimer(timerId) {
  const timer = timers[timerId];
  if (!timer.intervalId) {
    timer.intervalId = setInterval(() => {
      timer.time++;
      document.getElementById(timerId).textContent = formatTime(timer.time);
    }, 1000);
  }
}

// Stop Timer function
function stopTimer(timerId) {
  const timer = timers[timerId];
  if (timer.intervalId) {
    clearInterval(timer.intervalId);
    timer.intervalId = null;
  }
}

// Reset Timer function
function resetTimer(timerId) {
  const timer = timers[timerId];
  stopTimer(timerId);
  timer.time = 0;
  document.getElementById(timerId).textContent = formatTime(timer.time);
}

// Global Reset function
function globalReset() {
  for (const timerId in timers) {
    resetTimer(timerId);
  }
}

// Download Data function
function downloadData() {
  const csvContent = generateCSV();
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'timers_data.csv';
  link.click();
}

// Generate CSV content
function generateCSV() {
  let csvContent = 'Entreprise,Temps de travail (hh:mm:ss)\n';
  for (const timerId in timers) {
    const timer = timers[timerId];
    const timerName = document.getElementById(timerId).previousElementSibling.textContent;
    const timeFormatted = formatTime(timer.time);
    csvContent += `${timerName},${timeFormatted}\n`;
  }

  return csvContent;
}

// Format Time function
function formatTime(time) {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

// Pad function
function pad(num) {
  return String(num).padStart(2, '0');
}

// Event listeners for buttons
document.getElementById('start1').addEventListener('click', () => startTimer('timer1'));
document.getElementById('stop1').addEventListener('click', () => stopTimer('timer1'));
document.getElementById('reset1').addEventListener('click', () => resetTimer('timer1'));

document.getElementById('start2').addEventListener('click', () => startTimer('timer2'));
document.getElementById('stop2').addEventListener('click', () => stopTimer('timer2'));
document.getElementById('reset2').addEventListener('click', () => resetTimer('timer2'));

document.getElementById('start3').addEventListener('click', () => startTimer('timer3'));
document.getElementById('stop3').addEventListener('click', () => stopTimer('timer3'));
document.getElementById('reset3').addEventListener('click', () => resetTimer('timer3'));

document.getElementById('start4').addEventListener('click', () => startTimer('timer4'));
document.getElementById('stop4').addEventListener('click', () => stopTimer('timer4'));
document.getElementById('reset4').addEventListener('click', () => resetTimer('timer4'));

document.getElementById('start5').addEventListener('click', () => startTimer('timer5'));
document.getElementById('stop5').addEventListener('click', () => stopTimer('timer5'));
document.getElementById('reset5').addEventListener('click', () => resetTimer('timer5'));

document.getElementById('start6').addEventListener('click', () => startTimer('timer6'));
document.getElementById('stop6').addEventListener('click', () => stopTimer('timer6'));
document.getElementById('reset6').addEventListener('click', () => resetTimer('timer6'));



document.getElementById('globalReset').addEventListener('click', globalReset);
document.getElementById('downloadData').addEventListener('click', downloadData);
