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

// Credits animation end event
document.addEventListener('DOMContentLoaded', () => {
    const credits = document.querySelector('.credits');
    const finalMessage = document.getElementById('final-message');

    if (credits && finalMessage) {
        credits.addEventListener('animationend', () => {
            console.log('Credits animation ended'); // Debugging log

            // Apply fade-out effect to credits
            credits.style.transition = 'opacity 2s ease-in-out';
            credits.style.opacity = '0';

            // Wait for fade-out to complete, then show the final message
            setTimeout(() => {
                console.log('Credits hidden, showing final message'); // Debugging log
                credits.style.display = 'none'; // Hide credits
                finalMessage.style.display = 'block'; // Show final message
                finalMessage.style.opacity = '1'; // Apply fade-in effect
                finalMessage.style.transition = 'opacity 2s ease-in-out';
                finalMessage.style.top = '-490px'; // Move the final message higher
            }, 2000); // Match the fade-out duration
        });
    } else {
        console.error('Credits or final message element is missing'); // Debugging log
    }
});