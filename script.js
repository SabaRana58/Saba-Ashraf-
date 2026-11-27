
/* Typing Animation */

let words = [
    "Programming",
    "Web Development",
    "Web Designing",
    "Technology"
];

let wordIndex = 0;
let letterIndex = 0;

function typeEffect() {

    let currentWord = words[wordIndex];

    document.getElementById("typing").textContent =
        currentWord.substring(0, letterIndex + 1);

    letterIndex++;

    if (letterIndex === currentWord.length) {

        wordIndex++;
        letterIndex = 0;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        setTimeout(typeEffect, 1200);

    } else {
        setTimeout(typeEffect, 120);
    }
}

typeEffect();


/* Contact Button */

function showMessage() {

    document.getElementById("message").textContent =
        "Thank you for visiting my portfolio! Have a great day.";

}


/* Scroll Animation */

let sections = document.querySelectorAll(".reveal");

function revealSections() {

    sections.forEach(function(section) {

        let position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();
