window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.menu-item');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.menu-img').getAttribute('src'),
            title: card.querySelector('.menu-text').innerText,
            price: card.querySelector('.price__currency').innerText.replace(' UAH', ''), 
            counter: parseInt(card.querySelector('[data-counter]').innerText),
        };
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        let itemFound = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === productInfo.id) {
                cartItems[i].counter += productInfo.counter;
                itemFound = true;
                break; 
            }
        }
        if (!itemFound) {
            cartItems.push(productInfo);
        }
        localStorage.setItem('cart', JSON.stringify(cartItems));
        card.querySelector(`[data-counter]`).innerText = '1'; 
    }
});
