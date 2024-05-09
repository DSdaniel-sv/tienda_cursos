const d = document;

export default function cardMove () {
    const $card = d.querySelector('.card');
    $card.addEventListener('touchstart', (e) => {
        $card.classList.add('hover');
    });
    
    $card.addEventListener('touchend', (e) => {
        $card.classList.remove('hover');
    });
}