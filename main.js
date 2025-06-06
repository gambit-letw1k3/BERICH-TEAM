function showMainPage() {
    const intro = document.querySelector('.intro');
    const mainPage = document.querySelector('.main-page');

    
    intro.classList.add('hidden');

    
    setTimeout(() => {
        intro.style.display = 'none'; 
        mainPage.style.display = 'block'; 
        setTimeout(() => {
            mainPage.classList.add('visible'); 
        }, 50); 
    }, 1000); 
}


const backToTopButton = document.getElementById('back-to-top');

backToTopButton.addEventListener('mousemove', (e) => {
    const rect = backToTopButton.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotateX = -y / 2; 
    const rotateY = x / 2;  

    backToTopButton.style.setProperty('--rotateX', `${rotateX}deg`);
    backToTopButton.style.setProperty('--rotateY', `${rotateY}deg`);
});

backToTopButton.addEventListener('mouseleave', () => {
    backToTopButton.style.setProperty('--rotateX', '0deg');
    backToTopButton.style.setProperty('--rotateY', '0deg');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function showInfo(text) {
    const infoBar = document.getElementById('info-bar');
    const infoText = document.getElementById('info-text');

    infoText.textContent = text; 
    infoBar.classList.add('show'); 

    
    document.addEventListener('click', hideInfoBar);
}


function hideInfoBar(event) {
    const infoBar = document.getElementById('info-bar');

    
    if (!infoBar.contains(event.target) && !event.target.classList.contains('card')) {
        infoBar.classList.remove('show'); 
        document.removeEventListener('click', hideInfoBar); 
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.navbar .logo');
    const navLinks = document.querySelector('.navbar .nav-links');

    if (logo && navLinks) {
        // Додаємо обробник події для відкриття/закриття меню
        logo.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Перемикаємо клас active
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const teamName = document.getElementById('team-name');

    if (teamName) {
        teamName.addEventListener('click', () => {
            window.location.href = 'main.html'; // Перенаправлення на головну сторінку
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    // Плавне відкриття головної сторінки
    const intro = document.querySelector('.intro');
    const mainPage = document.querySelector('.main-page');
    const button = document.querySelector('.intro-content button');

    if (button) {
        button.addEventListener('click', () => {
            intro.classList.add('hidden'); // Приховуємо інтро
            setTimeout(() => {
                intro.style.display = 'none'; // Видаляємо з DOM
                mainPage.style.display = 'block'; // Показуємо головну сторінку
                setTimeout(() => {
                    mainPage.classList.add('visible'); // Додаємо плавну появу
                }, 50);
            }, 500); // Час збігається з transition у CSS
        });
    }

    // Плавне повернення до початку сторінки
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
function showInfo(message) {
    const infoBar = document.getElementById('info-bar');
    const infoText = document.getElementById('info-text');

    if (!infoBar || !infoText) {
        console.error('info-bar or info-text element is missing in the HTML.');
        return;
    }

    console.log('showInfo triggered with message:', message); // Debugging log
    infoText.textContent = message;
    infoBar.classList.add('show');
    console.log('Class "show" added to info-bar'); // Debugging log

    // Add event listener to close the info-bar when clicking outside
    const hideInfoBar = (event) => {
        if (!infoBar.contains(event.target) && !event.target.classList.contains('card')) {
            infoBar.classList.remove('show');
            document.removeEventListener('click', hideInfoBar); // Remove listener after closing
        }
    };

    document.addEventListener('click', hideInfoBar);
}