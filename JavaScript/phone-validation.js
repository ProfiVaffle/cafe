document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById('phone-input');
    const orderForm = document.getElementById('order-form-element');
    const phoneError = document.getElementById('phone-error');
    const cartWrapper = document.querySelector('.cart-wrapper');

    phoneInput.addEventListener('input', function (e) {
        let value = e.target.value;
        let digits = value.replace(/\D/g, '');
        if (!digits) {
            e.target.value = '';
            return;
        }
        if (!digits.startsWith('38')) {
            if (digits.startsWith('0')) {
                digits = '38' + digits; 
            } else {
                digits = '380' + digits; 
            }
        }
        let formattedValue = '+' + digits.substring(0, 12);
        e.target.value = formattedValue;
        
        if (phoneError.textContent) {
             phoneError.textContent = '';
        }
    });

    orderForm.addEventListener('submit', function (e) {
        e.preventDefault(); 
        const phoneNumber = phoneInput.value;
        const expectedLength = 13; 
        
        if (phoneNumber.length !== expectedLength || !phoneNumber.startsWith('+380')) {
            phoneError.textContent = 'Номер має бути у форматі +380XXXXXXXXX (13 символів).';
        } else {
            phoneError.textContent = ''; 

            localStorage.removeItem('cart');
            if (cartWrapper) {
                cartWrapper.innerHTML = '';
            }
            if (typeof toggleCartStatus === 'function') {
                toggleCartStatus();
            }
            if (typeof cartPricePlusDelivery === 'function') {
                cartPricePlusDelivery();
            }
        }
    });
});