const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menambahkan efek parallax dengan JavaScript
window.addEventListener("scroll", function() {
    const scrollPosition = window.scrollY;
    const parallaxHeader = document.querySelector('.parallax-header');
    parallaxHeader.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
});