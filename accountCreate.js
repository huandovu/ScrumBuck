// Function to create a user account
function createAccount() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Retrieve the stored user data from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || {};

    // Check if the username already exists
    if (username in existingUsers) {
        alert('Username already exists. Please choose a different one.');
    } else {
        // Add the new user to the stored data
        existingUsers[username] = password;

        // Save the updated user data back to local storage
        localStorage.setItem('users', JSON.stringify(existingUsers));

        
    }
}

// Add an event listener to the account creation form
const accountCreateForm = document.getElementById('accountCreateForm');
accountCreateForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission
    createAccount();
});
