// auth.js - handles login and signup functionality

// Sample users database (for demo purposes)
let users = JSON.parse(localStorage.getItem('users')) || [];

// Login function
function login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.email === email && u.password === password);
    if(user) {
        alert('Login successful!');
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
}

// Signup function
function signup(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    const existingUser = users.find(u => u.email === email);
    if(existingUser) {
        alert('User already exists');
        return;
    }

    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! You can now login.');
    document.getElementById('signup-form').reset();
}