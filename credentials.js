// Load the user credentials from local storage or create an empty object if not found
const users = JSON.parse(localStorage.getItem('users')) || {};

function createAccount() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Check if the username already exists
    if (username in users) {
        alert('Username already exists. Please choose a different one.');
    } else {
        // Add the new user to the stored data
        users[username] = password;

        // Save the updated user data back to local storage
        localStorage.setItem('users', JSON.stringify(users));
   
        window.location.href = 'login.html';
    }
}

// Add an event listener to the account creation form
const accountCreateForm = document.getElementById('accountCreateForm');
accountCreateForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    createAccount();
});
