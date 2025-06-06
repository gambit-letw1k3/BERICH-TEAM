
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.navbar .logo');
    const navLinks = document.querySelector('.navbar .nav-links');

    if (logo && navLinks) {
        logo.addEventListener('click', () => {
            navLinks.classList.toggle('active'); 
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const teamName = document.getElementById('team-name');

    if (teamName) {
        teamName.addEventListener('click', () => {
            window.location.href = 'main.html'; 
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const cardInfo = document.querySelector('.card-info');

    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.id === 'credit-card') {
                cardInfo.style.display = 'block';
            } else {
                cardInfo.style.display = 'none';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.kaka .logo'); // Логотип
    const navLinks = document.querySelector('.kaka .nav-links'); // Список посилань
    const teamName = document.getElementById('team-name');

    if (logo && navLinks) {
        logo.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Додає або видаляє клас "active"
        });
    }

    
    if (teamName) {
        teamName.addEventListener('click', () => {
            window.location.href = 'main.html';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.navbar .logo');
    const navLinks = document.querySelector('.navbar .nav-links');

    if (logo && navLinks) {
        logo.addEventListener('click', () => {
            navLinks.classList.toggle('active'); 
        });
    }
});





document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const revealSections = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Викликати при завантаженні сторінки
});