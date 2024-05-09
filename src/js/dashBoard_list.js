const d = document;

export default function listaElementos () {
    const $listElements = d.querySelectorAll('.list__button--click');

    $listElements.forEach(listElement => {
        listElement.addEventListener('click', (e) => {
            listElement.classList.toggle('arrow');

            let height = 0;
            let menu = listElement.nextElementSibling;

            if (menu.clientHeight == '0'){
                height = menu.scrollHeight;
            }
            menu.style.height = `${height}px`;
        });
    });
}