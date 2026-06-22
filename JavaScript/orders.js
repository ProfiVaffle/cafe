function loadOrders() {
    const container = document.getElementById('orders-container');
    container.innerHTML = '';
    const orders = JSON.parse(localStorage.getItem('cafe_orders')) || [];
    
    if (orders.length === 0) {
        container.innerHTML = '<div class="no-orders">Наразі немає активних замовлень</div>';
        return;
    }
    
    orders.slice().reverse().forEach((order, reversedIndex) => {
        const index = orders.length - 1 - reversedIndex;
        const card = document.createElement('div');
        card.className = 'order-card';
        let itemsHtml = '';
        
        order.items.forEach(item => {
            itemsHtml += `
                <li class="order-item">
                    <span>${item.name} x${item.count}</span>
                    <span>${item.price * item.count} UAH</span>
                </li>
            `;
        });

        const deliveryCost = order.delivery || 0;
        let deliveryStatusText = '';

        if (deliveryCost > 0) {
            deliveryStatusText = `<span style="font-weight:700;">${deliveryCost} UAH</span>`;
            itemsHtml += `
                <li class="order-item">
                    <strong>Доставка</strong>
                    <strong>${deliveryCost} UAH</strong>
                </li>
            `;
        } else {
            deliveryStatusText = `<span class="free" style="font-weight: 700;">безкоштовна</span>`;
        }
        
        card.innerHTML = `
            <div class="order-header">
                <span class="order-id">Замовлення №${order.id}</span>
                <span class="order-status ${order.status === 'Виконано' ? 'status-completed' : 'status-new'}">${order.status}</span>
            </div>
            <div class="order-info">
                <strong>Телефон:</strong> ${order.phone}<br>
                <strong>Доставка:</strong> ${deliveryStatusText}<br>
                <strong>Сума замовлення:</strong> <span class="total-price" style="font-weight:700;">${order.total} UAH</span>
            </div>
            <ul class="order-items">
                ${itemsHtml}
            </ul>
            <div class="order-actions">
                ${order.status !== 'Виконано' ? `<button class="orders-btn btn-complete" onclick="completeOrder(${index})">ВИКОНАНО</button>` : ''}
                <button class="orders-btn btn-delete" onclick="deleteOrder(${index})">ВИДАЛИТИ</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function completeOrder(index) {
    const orders = JSON.parse(localStorage.getItem('cafe_orders')) || [];
    orders[index].status = 'Виконано';
    localStorage.setItem('cafe_orders', JSON.stringify(orders));
    loadOrders();
}

function deleteOrder(index) {
    const orders = JSON.parse(localStorage.getItem('cafe_orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('cafe_orders', JSON.stringify(orders));
    loadOrders();
}

document.addEventListener('DOMContentLoaded', loadOrders);