const btn = document.getElementById("bukaUndangan");
const musik = document.getElementById("music");
const splash = document.getElementById("splash");
const card = document.getElementById("card");

btn.addEventListener("click", () => {
  splash.style.display = "none";
  musik.muted = false;
  musik.play().catch((e) => {
    console.log("Gagal memutar musik:", e);
  });
});
