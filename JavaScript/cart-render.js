document.addEventListener('DOMContentLoaded', function () {
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartItems.length > 0) {
        cartItems.forEach(item => {
const cartItemHTML = 
            `<div class="cart-item" data-id="${item.id}">
                    <img src="${item.imgSrc}" alt="${item.title}" class="cart-item__image">
                    <div class="cart-item__details">
                        <h4 class="cart-item__title">${item.title}</h4>
                        <div class="cart-item__price">${item.price} UAH</div>
                    </div>
                    
                <div class="counter cart-item__counter"> 
                    <div class="counter__button" data-action="minus">-</div> 
                    <div class="counter__value" data-counter>${item.counter}</div> 
                    <div class="counter__button" data-action="plus">+</div> 
                </div>
            </div>`;
            cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
        });
    }
    toggleCartStatus();
    cartPricePlusDelivery();
});