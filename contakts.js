// Navbar functionality
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.navbar .logo');
    const navLinks = document.querySelector('.navbar .nav-links');

    if (logo && navLinks) {
        // Toggle menu visibility
        logo.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Toggle the "active" class
        });
    }
});

// Redirect functionality for team name
document.addEventListener('DOMContentLoaded', () => {
    const teamName = document.getElementById('team-name');

    if (teamName) {
        teamName.addEventListener('click', () => {
            window.location.href = 'main.html'; // Redirect to the main page
        });
    }
});


// Redirect functionality for team name
document.addEventListener('DOMContentLoaded', () => {
    const teamName = document.getElementById('team-name');

    if (teamName) {
        teamName.addEventListener('click', () => {
            window.location.href = 'main.html'; // Redirect to the main page
        });
    }
});




// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            e.preventDefault(); // Prevent default only for internal links
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission alert
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Дякуємо за ваше повідомлення! Ми зв’яжемося з вами найближчим часом.');
    this.reset();
});