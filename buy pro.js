
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
document.addEventListener('DOMContentLoaded', () => {
    const paypalButton = document.querySelector('.paypal-button');
    const paypalPreloader = document.getElementById('paypal-preloader');
    const paypalModal = document.getElementById('paypal-modal');
    const modalContent = document.querySelector('.modal-content');
    const paypalCancelButton = document.getElementById('paypal-cancel-button');

    
    if (!paypalButton || !paypalPreloader || !paypalModal || !modalContent) {
        console.error('Один або більше елементів не знайдено в DOM.');
        return;
    }

    
    paypalButton.addEventListener('click', () => {
        paypalPreloader.style.display = 'flex';

        setTimeout(() => {
            paypalPreloader.style.display = 'none';
            paypalModal.style.display = 'flex';
            modalContent.style.display = 'block';
        }, 2000);
    });

    
    if (paypalCancelButton) {
        paypalCancelButton.addEventListener('click', () => {
            paypalModal.style.display = 'none';
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const paypalContainer = document.getElementById('paypal-button-container');
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');

    
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.id === 'paypal') {
                paypalContainer.style.display = 'block'; 
            } else {
                paypalContainer.style.display = 'none'; 
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('input[name="payment-method"]');
    const cardInfo = document.querySelector('.card-info');
    const paypalContainer = document.getElementById('paypal-button-container');

    
    cardInfo.style.display = 'none';
    paypalContainer.style.display = 'none';

    
    paymentMethods.forEach(method => {
        method.addEventListener('change', () => {
            if (method.id === 'credit-card') {
                cardInfo.style.display = 'block'; 
                paypalContainer.style.display = 'none'; 
            } else if (method.id === 'paypal') {
                cardInfo.style.display = 'none'; 
                paypalContainer.style.display = 'block'; 
            }
        });
    });
});


  document.getElementById("paypal-close-button").addEventListener("click", function() {
    document.getElementById("paypal-modal").style.display = "none";
  });

  document.addEventListener("DOMContentLoaded", function() {
    const modalContent = document.querySelector('#paypal-modal .modal-content');

    function showErrorContent() {
        modalContent.innerHTML = `
            <h2 style="color: red;">Error</h2>
            <p>Something went wrong. Please try again later.</p>
            <button id="paypal-close-button">Close</button>
        `;
        
        
        document.getElementById("paypal-close-button").addEventListener("click", () => {
            document.getElementById("paypal-modal").style.display = "none";
        });
    }

    
    document.querySelectorAll('#paypal-modal button').forEach(button => {
        if (button.id !== "paypal-close-button") {
            button.addEventListener("click", showErrorContent);
        }
    });

    
    document.getElementById("paypal-close-button").addEventListener("click", () => {
        document.getElementById("paypal-modal").style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("paypal-modal");
    const modalContent = modal.querySelector(".modal-content");

    
    const originalContent = modalContent.innerHTML;

    function showErrorContent() {
    modalContent.innerHTML = `
        <h2 style="color: red;">Error 517</h2>
        <p>Погане з'єднання з сервером</p>
        <a href="http://send.monobank.ua/jar/7KZ9BrSTcc" target="_blank" style="color: blue; text-decoration: underline;">
            Ми можемо виправити це за 50 грн
        </a>
        <br><br>
        <button id="paypal-close-button">Close</button>
    `;

    document.getElementById("paypal-close-button").addEventListener("click", () => {
        modal.style.display = "none";
    });
}


    function restoreOriginalContent() {
        modalContent.innerHTML = originalContent;

        
        initEventListeners();
    }

    function initEventListeners() {
       
        modal.querySelectorAll("button").forEach(button => {
            if (button.id !== "paypal-close-button") {
                button.addEventListener("click", showErrorContent);
            }
        });

       
        const closeBtn = modal.querySelector("#paypal-close-button");
        if (closeBtn) {
            closeBtn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }
    }

    
    const paypalBtnContainer = document.getElementById("paypal-button-container");
    paypalBtnContainer.addEventListener("click", restoreOriginalContent);

    
    initEventListeners();
})
document.getElementById('card-number').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    value = value.match(/.{1,4}/g)?.join(' ') || value; 
    e.target.value = value;
});

document.getElementById('card-expiry').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4); 
    }
    e.target.value = value;
});

document.getElementById('card-cvv').addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4); 
});