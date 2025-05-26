// Countdown logic
const countdownElement = document.getElementById("countdown");
const weddingDate = new Date("2025-09-07T09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days} Hari ${hrs} Jam ${mins} Menit ${secs} Detik`;

  if (distance < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "Acara telah berlangsung";
  }
}

const timer = setInterval(updateCountdown, 1000);
