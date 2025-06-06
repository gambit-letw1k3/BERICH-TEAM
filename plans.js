document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card'); // Визначення карток
    const contentArea = document.querySelector('.content-area');
    const overlay = document.querySelector('.overlay');
    let expandedCard = null;

    // Додавання обробника подій для кожної картки
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            if (expandedCard) return; // Якщо картка вже розгорнута, нічого не робимо
            expandedCard = card;

            const clone = card.cloneNode(true); // Клонування картки
            clone.classList.add('expanded', 'start');
            overlay.appendChild(clone);
            contentArea.classList.add('blurred');
            overlay.classList.add('active');

            // Зміна тексту після трансформації
            const cardTitle = clone.querySelector('.card-title'); // Знайдіть елемент із текстом
            if (cardTitle) {
                const newTitle = card.getAttribute('data-title') || 'Новий текст'; // Отримайте текст із атрибута data-title
                cardTitle.textContent = newTitle; // Встановіть новий текст
            }

            setTimeout(() => {
                clone.classList.remove('start');
            }, 10);

            // Додавання кнопки "Перейти"
            const button = document.createElement('button');
            button.classList.add('card-button');
            button.textContent = card.getAttribute('data-button-text') || 'Купити'; // Унікальний текст кнопки
            clone.appendChild(button);

            button.addEventListener('click', () => {
                const link = card.getAttribute('data-button-link') || 'buy lite.html'; // Унікальний шлях
                window.location.href = link;
            });
        });
    });

    // Закриття розгорнутої картки при кліку поза нею
    document.addEventListener('click', (e) => {
        if (expandedCard && !e.target.closest('.card.expanded')) {
            overlay.innerHTML = '';
            contentArea.classList.remove('blurred');
            overlay.classList.remove('active');
            expandedCard = null;
        }
    });
});

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