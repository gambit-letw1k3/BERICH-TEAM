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
    const logo = document.querySelector('.navbar .logo');
    const navLinks = document.querySelector('.navbar .nav-links');
    const teamName = document.getElementById('team-name');

    
    if (logo && navLinks) {
        logo.addEventListener('click', () => {
            navLinks.classList.toggle('active'); 
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

const video = document.getElementById('myVideo');
const playPauseBtn = document.getElementById('playPause');
const progress = document.getElementById('progress');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = '❚❚';
    } else {
        video.pause();
        playPauseBtn.textContent = '►';
    }
});

video.addEventListener('timeupdate', () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.value = percent;
});

progress.addEventListener('input', () => {
    const time = (progress.value / 100) * video.duration;
    video.currentTime = time;
});

const muteBtn = document.getElementById('mute');
const volumeIcon = document.getElementById('volumeIcon');

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;

    // Змінюємо іконку залежно від стану звуку
    if (video.muted) {
        volumeIcon.src = 'mute.png';
    } else {
        volumeIcon.src = 'volume.png';
    }
});
