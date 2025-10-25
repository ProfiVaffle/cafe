const cart = {
    "1": 1,
    "2": 3
};

const cartItems = {
    "1": {
        "id": 1,
        "title": "Бургер",
        "price": 1,
        "image": "images/menu-item.png"
    },
    "2": {
        "id": 2,
        "title": "Пицца",
        "price": 2,
    },
};

function showCart() {
    let out = '<table>';
    let total = 0;

    out += `<tr><th></th><th>Зображення</th><th>Назва</th><th>Кількість</th><th>Ціна</th></tr>`;

    for (const id in cart) {
        out += `<tr>
                    <td><button class="cart-remove" data-id=${id}>x</button></td>
                    <td><img src="${cartItems[id].image}" width="50"></td>
                    <td>${cartItems[id].title}</td>
                    <td>${cart[id]}<button class="cart-plus" data-id=${id}>+</button><button class="cart-minus" data-id=${id}>-</button></td>
                    <td>${cartItems[id].price*cart[id]} ₴</td>
                </tr>`;
        total += cartItems[id].price * cart[id];
    }
    out += `<tr><td colspan="4">До оплати:</td><td>${total} ₴<td></tr>`
    out += '</table>';

    document.querySelector('.cart-field').innerHTML = out;
}

document.querySelector(`.cart-field`).addEventListener('click', (event)=> {
    console.log(event.target);
    const item = event.target; 
    if (item.classList.contains('cart-remove')) cartRemove(item.dataset.id);
    if (item.classList.contains('cart-plus')) cartPlus(item.dataset.id);
    if (item.classList.contains('cart-minus')) cartMinus(item.dataset.id);
});

function cartRemove(id) {
    console.log(id);
    delete cart[id];
    showCart();
}
function cartPlus(id) {
    console.log(id);
    cart[id]++;
    showCart();
}

function cartMinus(id) {
    console.log(id);
    if (cart[id]>1) {
        cart[id]--;
    } else {
        delete cart[id];
    }
    showCart();
}

showCart();