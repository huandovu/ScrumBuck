// Retrieve the credentials from localStorage
const storedCredentials = JSON.parse(localStorage.getItem('credentials'));

// Function to handle login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (storedCredentials[username] && storedCredentials[username].password === password) {
        // Successful login
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'nextPage1.html';
    } else {
        errorMessage.textContent = 'Invalid credentials. Please try again.';
    }
}

// Add an event listener for the form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    login();
});

