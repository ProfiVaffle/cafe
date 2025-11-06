function cartPricePlusDelivery() {
    const cartItems = document.querySelectorAll('.cart-wrapper .cart-item');
    const totalPriceElement = document.querySelector('.cart-summary__total-price');
    const deliveryCost = document.querySelector('.cart-summary__delivery-cost');
    if (!totalPriceElement) return; 
    const cartDeliveryElement = document.querySelector('[data-cart-delivery]');
    
    let itemsTotalPrice = 0;
    cartItems.forEach(function (item) {
        const amountElement = item.querySelector('[data-counter]');
        const priceElement = item.querySelector('.cart-item__price'); 
        
        const priceText = priceElement.innerText.replace(' UAH', '');
        
        const currentPrice = parseInt(amountElement.innerText) * parseInt(priceText);
        itemsTotalPrice += currentPrice;
    });
    let deliveryPriceValue = 0;

    if (itemsTotalPrice > 0) {
        cartDeliveryElement.classList.remove('hidden'); 
        
        if (itemsTotalPrice >= 300) {
            deliveryCost.classList.add('free');
            deliveryCost.innerText = 'безкоштовно';
            deliveryPriceValue = 0;
        } else {
            deliveryCost.classList.remove('free');
            deliveryCost.innerText = '50 ₴';
            deliveryPriceValue = 50;
        }
    } else {
        cartDeliveryElement.classList.add('hidden'); 
        deliveryPriceValue = 0;
    }
    const finalTotalPrice = itemsTotalPrice + deliveryPriceValue;
    totalPriceElement.innerText = finalTotalPrice;
}