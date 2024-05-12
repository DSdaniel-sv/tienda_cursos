const d = document;

export default function modalBtn () {
    const $btnModal = d.querySelector('.button__close');
    const $modalBox = d.querySelector('.modal');

    $btnModal.addEventListener('click', (e) => {
        $modalBox.classList.remove('modalView');
    });
}