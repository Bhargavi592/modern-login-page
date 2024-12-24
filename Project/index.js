const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const popupMessage = document.getElementById('popup-message');

// Toggle form
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Form submission with popup
document.querySelector('.sign-up form').addEventListener('submit', (e) => {
    e.preventDefault();
    showPopup("Sign Up submitted successfully!");
});

document.querySelector('.sign-in form').addEventListener('submit', (e) => {
    e.preventDefault();
    showPopup("Sign In submitted successfully!");
});

// Show popup message function
function showPopup(message) {
    popupMessage.textContent = message;
    popupMessage.classList.remove('hidden');
    popupMessage.classList.add('show');

    setTimeout(() => {
        popupMessage.classList.remove('show');
        popupMessage.classList.add('hidden');
    }, 3000); // Hide after 3 seconds
}
