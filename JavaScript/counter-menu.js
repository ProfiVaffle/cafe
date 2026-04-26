window.addEventListener('click', function (event) {
    let counter;
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        const counterWrapper = event.target.closest('.counter'); 
        if (!counterWrapper || counterWrapper.closest('.cart-item')) return; 
        counter = counterWrapper.querySelector('[data-counter]');
    } else {
        return; 
    }
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }
    }
});