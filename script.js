// ================================
// ARUM SETIA AYU - PORTFOLIO JS
// ================================

// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Back to top button
const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }
});

backTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Small reveal animation when sections enter viewport
const revealItems = document.querySelectorAll(
    ".about-card, .fact-card, .skill-group, .project-card, .timeline-content, .certificate-card, .contact-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealItems.forEach(item => {
    item.classList.add("reveal");
    observer.observe(item);
});
