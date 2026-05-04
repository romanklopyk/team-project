function handleModal() {
    const $modal = {
        close: document.querySelector('.modal-close-button'),
        open: document.querySelector('.burger-btn'),
        menu: document.querySelector('.modal'),
        items: document.querySelectorAll('.modal-item-link'),
        orderBtn: document.querySelector('.order-now'),
    };
    $modal.close.addEventListener('click', () => {
        $modal.menu.classList.remove('is-open');
    });
    $modal.open.addEventListener('click', () => {
        $modal.menu.classList.add('is-open');
    });
    $modal.items.forEach(item => {
        item.addEventListener('click', () => {
            $modal.menu.classList.remove('is-open');
        });
    });
    $modal.orderBtn.addEventListener('click', () => {
        $modal.menu.classList.remove('is-open');
    });
}

handleModal();