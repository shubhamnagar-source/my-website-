function startWebsite() {
    const message = document.getElementById("message");
    const button = document.querySelector("button");

    message.innerText = "🎉 Welcome! Your website is working perfectly!";
    button.innerText = "Started ✓";
}

/* Typing Effect */
const typingText = document.getElementById("typing-text");

const words = [
    "BCA Data Science Student",
    "Web Developer",
    "AI Explorer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1500;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();
/* Scroll Reveal */
const revealElements = document.querySelectorAll(
    "#about, #services, #projects, #contact"
);

function revealOnScroll() {
    revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("reveal", "active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
