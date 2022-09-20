// BARRA BÚSQUEDA
const buscar = document.getElementById ("buscar");
buscar.addEventListener("input", ()=>{
    console.log(buscar.value)
});
// FORMULARIO DE CONTACTO
let formulario = document.getElementById("formulario");
if(formulario){
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const correoe = document.getElementById("correoe");
    const consulta = document.getElementById("consulta");
    console.log("Su nombre es: " + nombre.value);
    console.log("Su apellido es: " + apellido.value);
    console.log("Su Email es: " + correoe.value);
    console.log("Formulario enviado, en breve nos contactaremos contigo.");
    formulario.reset();
})};

// const arrayLenceria = ["loto", "lirio"];
// const arrayPijama = ["amapola", "aleli", "dalia", "girasol"];
// const arrayAccesorios = ["vincha", "scrunchie", "antifaz", "cofia", "funda"];

const precioloto = document.getElementById("precioloto");
const preciocorpiñoloto = document.createElement ("p")
preciocorpiñoloto.innerText = "2500$";
precioloto.appendChild(preciocorpiñoloto);

const preciolirio = document.getElementById("preciolirio");
const preciocorsetlirio = document.createElement ("p");
preciocorsetlirio.innerText = "5700$";
preciolirio.appendChild(preciocorsetlirio);

const agregarloto = document.getElementById("agregarloto")
agregarloto.addEventListener("click", () =>{
    console.log("Agregaste al carrito el producto Corpiño Loto");
    console.log("Su valor es de : " + preciocorpiñoloto.innerText );
})

const agregarlirio = document.getElementById("agregarlirio")
agregarlirio.addEventListener("click", () =>{
    console.log("Agregaste al carrito el producto Corset Lirio");
    console.log("Su valor es de : " + preciocorsetlirio.innerText );
})

// AGREGUÉ SOLO 2 PRODUCTOS YA QUE VOY A ESPERAR PARA PODER MODIFICAR MASIVAMENTE YA QUE CON LO VISTO HASTA AHORA NO PUEDO MODIFICAR CON ID TODOS LOS PRODUCTOS A LA VEZ