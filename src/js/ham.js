const d = document;


export default function hamburgerPanel(btnHam, nav, nav_list) {
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnHam) || e.target.matches(`${btnHam} *`)) {
            d.querySelector(nav).classList.toggle('is-active');
            d.querySelector(btnHam).classList.toggle('is-active');
        }
        if (e.target.matches(nav_list)) {
            d.querySelector(nav).classList.remove('is-active');
            d.querySelector(btnHam).classList.remove('is-active');
        }
    });

    const $li = d.querySelectorAll('.list__item--clic');
    $li.forEach((el) => {
        console.log(el);
    });
}