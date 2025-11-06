function toggleCartStatus() {
    const cartWrapper = document.querySelector('.cart-wrapper');
    if (!cartWrapper) return;
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('#order-form');
    if (cartWrapper.children.length > 0) {
        cartEmptyBadge.classList.add('hidden'); 
        orderForm.classList.remove('hidden'); 
    } else { 
        cartEmptyBadge.classList.remove('hidden');
        orderForm.classList.add('hidden');
    }
}