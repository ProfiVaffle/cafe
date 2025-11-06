window.addEventListener('click', function (event) {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter'); 
        if (!counterWrapper) return; 
        counter = counterWrapper.querySelector('[data-counter]');
    } else {
        return; 
    }
    const card = event.target.closest('.cart-item'); 
    if (!card) return; 
    const id = card.dataset.id;
    const cartItems = JSON.parse(localStorage.getItem('cart'));
    const itemInCart = cartItems.find(item => item.id === id);
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
        if (itemInCart) itemInCart.counter++; 
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
            if (itemInCart) itemInCart.counter--; 
        } else if (parseInt(counter.innerText) === 1) {
            card.remove(); 
            
            const itemIndex = cartItems.findIndex(item => item.id === id);
            if (itemIndex !== -1) {
                cartItems.splice(itemIndex, 1); 
            }
            toggleCartStatus(); 
        }
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));
    cartPricePlusDelivery();
});