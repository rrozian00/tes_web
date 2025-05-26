document.getElementById("bukaUndangan").addEventListener("click", function () {
  // Sembunyikan splash
  document.getElementById("splash").style.display = "none";

  // Play music
  const music = document.getElementById("music");
  music.play().catch(() => {
    console.log("Autoplay diblokir, harus interaksi user.");
  });

  // Tampilkan dan animasikan card
  const card = document.querySelector(".card");
  card.style.opacity = "1";
  card.style.transform = "translateY(0)";
});
