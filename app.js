const age = document.getElementById("age");
document.getElementById("blow").addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelectorAll(".fire").forEach(function (el) {
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
let musicStarted = false;

document.getElementById("music").addEventListener("click", () => {
    if (!musicStarted) {
        const audio = new Audio("hbd.mp3");
        audio.loop = true;
        audio.play().catch(err => console.log(err));

        musicStarted = true;
    }
});

function openCard() {
    let frame = document.getElementById("fullFrame");

    frame.src = "card.html";

    frame.style.display = "block";
};
function closeCard() {
    window.parent.postMessage("closeCard", "*");
};
window.addEventListener("message", (e) => {
    if (e.data === "closeCard") {
        document.getElementById("fullFrame").style.display = "none";
    }
});
const successAudio = new Audio("success.mp3");
function playSuccess() {
    successAudio.currentTime = 0;
    successAudio.play();
}