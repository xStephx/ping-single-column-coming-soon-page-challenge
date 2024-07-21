// DOM elements
const emailInput = document.getElementById('email-input')
const errorMessage = document.getElementById('error-message')
const submitBtn = document.getElementById('submit-btn')

// Interacting with submit button and email input element
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const email = emailInput.value.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    
    if (!email) {
        errorMessage.textContent = 'Please enter an email!';
        errorMessage.classList.remove('text-lime-600');
        errorMessage.classList.add('text-LightRed');
        emailInput.classList.add('border-LightRed');
    } else if (!isValidEmail) {
        errorMessage.textContent = 'Please provide a valid email!';
        errorMessage.classList.remove('text-lime-600');
        errorMessage.classList.add('text-LightRed');
        emailInput.classList.add('border-LightRed');
    } else {
        errorMessage.textContent = 'Email sent!';
        errorMessage.classList.remove('text-LightRed');
        errorMessage.classList.add('text-lime-600');
        emailInput.classList.remove('border-LightRed');
        emailInput.value = '';
    }
});
