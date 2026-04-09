// tournaments.js

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: 'smooth'
        });
        if(navLinks.classList.contains('active')){
            navLinks.classList.remove('active');
        }
    });
});

// Contact form submission simulation
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate sending message
    contactForm.reset();
    successMessage.style.display = 'block';
    setTimeout(() => successMessage.style.display = 'none', 5000);
});