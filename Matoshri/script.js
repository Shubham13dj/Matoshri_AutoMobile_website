function validateLogin() {
    // Get values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Dummy authentication (replace with server-side validation)
    if (username === 'user' && password === 'password') {
        // Successful login, redirect or perform necessary actions
        alert('Login successful!');
        } else {
        // Display error message
       document.getElementById('errorMessage').innerText = 'Invalid username or password.';
    }
}
    