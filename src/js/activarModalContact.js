const d = document;

export default function messageSendContact() {
    const $form = d.querySelector('.formulario');
    const $btnEnviarC = d.querySelector('.enviar-btn');
    const $modalC = d.querySelector('.modal');
    const $btnModal = d.querySelector('.button__close');

    $btnEnviarC.addEventListener('click', (e) => {
        $form.addEventListener('submit', handleSubmit);
        async function handleSubmit(e) {
            e.preventDefault();
            const form = new FormData(this);
            const response = await fetch(this.action, {
                method: this.method,
                body: form,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                $modalC.classList.add('modalView');
                $form.reset();
            }
        }
    });
}