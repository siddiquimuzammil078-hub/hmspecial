 window.onload = function () {

    // Hide loader after 2 seconds
    setTimeout(function () {

        document.getElementById("loader").style.display = "none";

    }, 2000);

    const countdown = document.getElementById("countdownSection");
    const website = document.getElementById("birthdayWebsite");

    // Hide website initially
    website.style.display = "none";
     const music = document.getElementById("bgMusic");
    const startBtn = document.getElementById("startBtn");

    startBtn.addEventListener("click", function () {
        music.play();
    });

const birthday = new Date("July 23, 2026 00:00:00").getTime();
    function updateCountdown() {

        const now = new Date().getTime();
        const distance = birthday - now;

        if (distance <= 0) {

            countdown.style.display = "none";
            website.style.display = "block";

            clearInterval(timer);

            return;
        }

        document.getElementById("days").textContent =
            Math.floor(distance / (1000 * 60 * 60 * 24));

        document.getElementById("hours").textContent =
            Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById("minutes").textContent =
            Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById("seconds").textContent =
            Math.floor((distance % (1000 * 60)) / 1000);
    }

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

};