/**************************************
 ADD TO CART – LOCAL STORAGE BASED
***************************************/

// Get cart from localStorage or initialize
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add item to cart
function addToCart(name, price) {
  const product = {
    name: name,
    price: price,
    quantity: 1
  };

  // Check if product already exists
  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push(product);
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();

  alert(name + ' added to cart');
}

// Update cart count in navbar
function updateCartCount() {
  let count = 0;
  cart.forEach(item => count += item.quantity);

  const cartCountElement = document.getElementById('cart-count');
  if (cartCountElement) {
    cartCountElement.innerText = count;
  }
}

// Run on page load
updateCartCount();


/**************************************
 SIMPLE LOGIN / SIGNUP LOGIC
***************************************/

function signup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  if (!email || !password) {
    alert('Please fill all fields');
    return;
  }

  localStorage.setItem('user', JSON.stringify({ email, password }));
  alert('Signup successful! Please login.');
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    alert('No user found. Please signup first.');
    return;
  }

  if (email === user.email && password === user.password) {
    alert('Login successful');
    localStorage.setItem('loggedIn', true);
    window.location.href = 'index.html';
  } else {
    alert('Invalid credentials');
  }
}


/**************************************
 PAYMENT (DEMO CHECKOUT)
***************************************/

function placeOrder() {
  if (cart.length === 0) {
    alert('Your cart is empty');
    return;
  }

  alert('Order placed successfully! (Demo Payment)');
  localStorage.removeItem('cart');
  updateCartCount();
  window.location.href = 'index.html';
}

