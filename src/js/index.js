import listaElementos from "./dashBoard_list.js";
import hamburgerPanel from "./ham.js";

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    listaElementos();
    hamburgerPanel('#btn-ham', '.nav1', '.list li a');
});