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

  const leafContainer = document.querySelector(".falling-leaves");
  const emojis = ["🌸", "🌼", "🍁", "🌺", "🍂", "🌹"];

  for (let i = 0; i < 30; i++) {
    const leaf = document.createElement("span");
    leaf.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = 5 + Math.random() * 5 + "s";
    leaf.style.fontSize = 16 + Math.random() * 24 + "px";
    leafContainer.appendChild(leaf);
  }
});
