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
    let arrayFormulario = [nombre, apellido, correoe, consulta]
    let localStorageFormulario = localStorage.setItem("formulario", JSON.stringify(arrayFormulario));
    localStorageFormulario = localStorage.getItem("formulario")? JSON.parse(localStorage.getItem("formulario")) : [];
    console.log("Su nombre es: " + nombre.value);
    console.log("Su apellido es: " + apellido.value);
    console.log("Su Email es: " + correoe.value);
    console.log("Formulario enviado, en breve nos contactaremos contigo.");
    formulario.reset();
})};
let btnenviar = document.getElementById("btnenviar");
if(btnenviar){
    btnenviar.addEventListener("click",() => {
    swal({
        title: "Gracias!",
        text: "Formulario enviado, en breve nos contactaremos contigo",
        icon: "success",
        button: "Aceptar",
      });
});}


