// ----------------------------
// CONTACT FORM SUBMIT
// ----------------------------
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// ----------------------------
// SMOOTH SCROLL
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ----------------------------
// DARK MODE TOGGLE
// ----------------------------
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");
const navLinks = document.querySelectorAll('nav a');

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    // ICON SWITCH
    if (body.classList.contains("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }

    // NAV LINKS COLOR TRANSITION
    navLinks.forEach(link => {
        link.style.transition = 'color 0.3s';
        link.style.color = body.classList.contains("dark") ? '#f5f5f5' : '#1a2a3a';
    });

    // TOGGLE ICON COLOR
    icon.style.transition = 'color 0.3s';
    icon.style.color = body.classList.contains("dark") ? '#f5f5f5' : '#1a2a3a';
});

// ----------------------------
// REVEAL ON SCROLL
// ----------------------------
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    { threshold: 0.15 }
);

reveals.forEach(el => observer.observe(el));

// ----------------------------
// OPTIONAL: Set initial nav link color on page load
// ----------------------------
window.addEventListener('load', () => {
    navLinks.forEach(link => {
        link.style.color = body.classList.contains("dark") ? '#f5f5f5' : '#1a2a3a';
    });
});
