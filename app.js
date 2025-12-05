const age = document.getElementById("age");
document.getElementById("blow").addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelectorAll(".fire").forEach(function(el) {
        el.style.display = "none";
    });
    age.textContent = "18";
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
