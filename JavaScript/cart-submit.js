const submitBtn = document.querySelector('.form-submit-button');

if (submitBtn) {
    submitBtn.addEventListener('click', function() {
        const phoneInput = document.getElementById('phone-input') || document.querySelector('.form-input[placeholder*="Телефон"]');
        const phone = phoneInput && phoneInput.value.trim() !== '' ? phoneInput.value : 'Не вказано';
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        
        if (cartItems && cartItems.length > 0) {
            let itemsTotal = 0;
            const formattedItems = cartItems.map(item => {
                const itemPrice = parseInt(item.price);
                const itemCount = parseInt(item.counter || item.count || 1);
                itemsTotal += itemPrice * itemCount;
                return {
                    name: item.title || item.name,
                    price: itemPrice,
                    count: itemCount
                };
            });

            const deliveryPrice = itemsTotal >= 300 ? 0 : 50;
            const finalTotal = itemsTotal + deliveryPrice;

            const orders = JSON.parse(localStorage.getItem('cafe_orders')) || [];
            orders.push({
                id: Math.floor(1000 + Math.random() * 9000),
                phone: phone,
                items: formattedItems,
                delivery: deliveryPrice,
                total: finalTotal,
                status: 'Нове'
            });
            localStorage.setItem('cafe_orders', JSON.stringify(orders));
        }
    });
}