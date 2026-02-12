// cart.js - handles cart functionality

// Retrieve cart from localStorage or initialize
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');

// Update cart count in navbar
function updateCartCount() {
    cartCount.textContent = cart.length;
}

updateCartCount();

// Add item to cart
function addToCart(name, price) {
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(name + ' added to cart');
}

// Remove item from cart
function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

// Update item quantity
function updateQuantity(name, quantity) {
    const item = cart.find(i => i.name === name);
    if (item) {
        item.quantity = quantity;
        if(item.quantity <= 0) removeFromCart(name);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}

// Calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Render cart items on cart page
function renderCartItems() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity('${item.name}', this.value)" />
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
        cartItemsContainer.appendChild(div);
    });

    const totalDiv = document.createElement('div');
    totalDiv.classList.add('cart-total');
    totalDiv.innerHTML = `<strong>Total: ₹${calculateTotal()}</strong>`;
    cartItemsContainer.appendChild(totalDiv);
}

renderCartItems();

// Payment simulation
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Payment successful! Total: ₹' + calculateTotal());
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCartItems();
    updateCartCount();
}