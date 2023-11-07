// Function to attempt a login
function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve the stored user credentials from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    if (storedUsers) {
        if (username in storedUsers && storedUsers[username] === password) {
            window.location.href = 'homepage.html';
        } else {
            document.getElementById('loginMessage').textContent = 'Invalid username or password';
        }
    } else {
        document.getElementById('loginMessage').textContent = 'No user credentials found';
    }
}



