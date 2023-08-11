const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // You should replace these with your actual authentication logic
    if (username === 'yourUsername' && password === 'yourPassword') {
        // Successful login, redirect to a new page or perform desired action
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
