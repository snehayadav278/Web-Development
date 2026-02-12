// payment.js - simulate payment functionality

function makePayment() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Simulate payment process
    const paymentConfirmed = confirm('Confirm payment of ₹' + totalAmount + '?');
    if(paymentConfirmed) {
        alert('Payment successful!');
        localStorage.setItem('cart', JSON.stringify([])); // clear cart
        window.location.href = 'index.html';
    } else {
        alert('Payment cancelled.');
    }
}