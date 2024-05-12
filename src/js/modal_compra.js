const d = document;

export default function modalPago() {
    const $btnAdquirir = d.querySelectorAll('.btn-adquirir');
    const $modalCompra = d.querySelector('.modalCompra');
    const $btnClose = d.querySelector('.button__close-c');

    $btnAdquirir.forEach((btnAqui) => {
        btnAqui.addEventListener('click', (e) => {
            $modalCompra.classList.add('view');
        });
    })

    $btnClose.addEventListener('click', (e) => {
        $modalCompra.classList.remove('view');
    });
}