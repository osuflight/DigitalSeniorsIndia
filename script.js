// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const phone = document.querySelector('input[name="phone"]');
    const message = document.querySelector('textarea[name="message"]');
    
    if (!name.value || !email.value || !phone.value || !message.value) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!validateEmail(email.value)) {
        alert('Please enter a valid email address');
        return;
    }
    
    if (!validatePhone(phone.value)) {
        alert('Please enter a valid phone number');
        return;
    }
    
    this.submit();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/;
    return re.test(String(phone));
}

// Toggle menu for mobile navigation
const nav = document.querySelector('nav ul');
const toggleBtn = document.createElement('button');
toggleBtn.innerHTML = 'Menu';
toggleBtn.classList.add('menu-toggle');

document.querySelector('header').insertBefore(toggleBtn, nav);

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('show-menu');
});
