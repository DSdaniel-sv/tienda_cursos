import messageSendContact from "./activarModalContact.js";
import cardMove from "./card_move.js";
import listaElementos from "./dashBoard_list.js";
import hamburgerPanel from "./ham.js";
import modalPago from "./modal_compra.js";
import modalBtn from "./modal_contact.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    listaElementos();
    hamburgerPanel('#btn-ham', '.nav1', '.list li a');
    cardMove();
    modalBtn();
    modalPago();
    messageSendContact();
});