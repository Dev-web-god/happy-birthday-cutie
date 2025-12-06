document.getElementById("blow").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".fire").forEach(function (el) {
        el.style.display = "none";
    });
    confetti({
        particleCount: 800,
        spread: 60,
        origin: { x: 0, y: 0.6 }
    });
    confetti({
        particleCount: 800,
        spread: 60,
        origin: { x: 1, y: 0.6 }
    });
    confetti({
        particleCount: 800,
        spread: 60,
        startVelocity: 40,
        gravity: 2,
        origin: { x: 0.5, y: 0 }
    });
});
function openCard() {
    let frame = document.getElementById("mainFrame");

    frame.style.display = "block";

    frame.src = "card.html";

    document.querySelector("svg").style.display = "none";
    document.querySelector(".candle").style.display = "none";
    document.querySelector(".text").style.display = "none";
}

window.onload = () => {
  const bg = document.getElementById("bgmusic");
  bg.play();
  setTimeout(() => {
    bg.muted = false;
  }, 150);
});

