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

// const precioloto = document.getElementById("precioloto");
// const preciocorpiñoloto = document.createElement ("p")
// preciocorpiñoloto.innerText = "2500$";
// precioloto.appendChild(preciocorpiñoloto);

// const preciolirio = document.getElementById("preciolirio");
// const preciocorsetlirio = document.createElement ("p");
// preciocorsetlirio.innerText = "5700$";
// preciolirio.appendChild(preciocorsetlirio);

// const agregarloto = document.getElementById("agregarloto")
// agregarloto.addEventListener("click", () =>{
//     console.log("Agregaste al carrito el producto Corpiño Loto");
//     console.log("Su valor es de : " + preciocorpiñoloto.innerText );
// })

// const agregarlirio = document.getElementById("agregarlirio")
// agregarlirio.addEventListener("click", () =>{
//     console.log("Agregaste al carrito el producto Corset Lirio");
//     console.log("Su valor es de : " + preciocorsetlirio.innerText );
// })

// AGREGUÉ SOLO 2 PRODUCTOS YA QUE VOY A ESPERAR PARA PODER MODIFICAR MASIVAMENTE YA QUE CON LO VISTO HASTA AHORA NO PUEDO MODIFICAR CON ID TODOS LOS PRODUCTOS A LA VEZ

class Producto {
    constructor (id, nombre,color, precio, cantidad){
        this.id = id;
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
// CREANDO PRODUCTOS
const corpiñoLoto = new Producto (1, "Corpiño Loto", "negro", "$2500", 2);
const corpiñoCatalina = new Producto (2, "Corpiño Catalina", "negro", "$2400", 2);
const corpiñoMagnolia = new Producto (3, "Corpiño Magnolia", "negro", "$3000", 2);

const corpiños = [corpiñoLoto, corpiñoCatalina, corpiñoMagnolia];


const agregaralcarritoloto = document.getElementById("agregaralcarritoloto");
agregaralcarritoloto.addEventListener("click", () => {
        agregarAlCarrito(corpiñoLoto);
    })

    const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = corpiños.find(producto => Producto.id === id);
    const carritoDeProducto = carrito.find(producto => Producto.id === id);
    if(carritoDeProducto) {
        carritoDeProducto.cantidad ++;
    }else {
        carrito.push(Producto);
    }
    actualizarCarrito();
}

const verCarrito = document.getElementById("offcanvasRight")
verCarrito.addEventListener("click", actualizarCarrito);
const corpiño = JSON.parse(localStorage.getItem("Producto"));
function actualizarCarrito() {
    let aux="";
    carrito.forEach(corpiños => {
        aux += `
        <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Tu carrito de compras</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="card">
            <img class="imgcarrito" src="../img/nuevasesion/braletteloto2.jpg">
            <div class="">
                <h3 class="card-title"> ${corpiñoLoto.nombre} </h3>
                <p class="card-text"> ${corpiñoLoto.precio} </p>
                <button onClick = "eliminarDelCarrito(${Producto.id})" class="btn btn-primary boton"> Eliminar del Carrito </button>
            </div>
        </div>
        <div>
      <h5 id="totalCarrito">Total: </h5>
    </div>
        <div class="offcanvas-body">
      <button class="btn boton" id="vaciarCarrito">Vaciar Carrito</button>
        </div>
        `;   
    })
    offcanvasRight.innerHTML = aux;
    calcularTotalCarrito();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => Producto.id === id);
    carrito.splice(carrito.indexOf(producto),1);
    actualizarCarrito();
}
const vaciarCarrito = document.getElementById("vaciarCarrito");
vaciarCarrito.addEventListener("click", () => {
    carrito.splice(0, carrito.length);
    actualizarCarrito();
});

const totalCarrito = document.getElementById("totalCarrito");

const calcularTotalCarrito = () => {
    let total = 0; 
    carrito.forEach( producto => {
        total += Producto.precio * Producto.cantidad;
    });
    totalCarrito.innerHTML = total;
}

// verCarrito.addEventListener("click",() =>{
//     const corpi = JSON.parse(localStorage.getItem("Producto"));
//     let aux ="";
//     corpi.forEach(Producto => {
//         aux+= `
//         <div class="offcanvas-header">
//       <h5 class="offcanvas-title" id="offcanvasRightLabel">Tu carrito de compras</h5>
//       <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div class="card">
//             <img class="imgcarrito" src="../img/nuevasesion/braletteloto2.jpg">
//             <div class="">
//                 <h3 class="card-title"> ${corpiñoLoto.nombre} </h3>
//                 <p class="card-text"> ${corpiñoLoto.precio} </p>
//                 <button onClick = "eliminarDelCarrito(${Producto.id})" class="btn btn-primary boton"> Eliminar del Carrito </button>
//             </div>
//         </div>
//         <div>
//       <h5 id="totalCarrito">Total: </h5>
//     </div>
//         <div class="offcanvas-body">
//       <button class="btn boton" id="vaciarCarrito">Vaciar Carrito</button>
//         </div>
//         `;
//         offcanvasRight.innerHTML = aux;
//         calcularTotalCarrito();
//     })
// })
// const agregaralcarritolirio = document.getElementById("agregaralcarritolirio");
// agregaralcarritolirio.addEventListener("click", () => {
//         agregarAlCarrito(corpiñoCatalina);
//         verCarrito.addEventListener("click", actualizarCarrito);
// function actualizarCarrito() {
//     let aux="";
//     carrito.forEach(corpiños => {
//         aux += `
//         <div class="offcanvas-header">
//         <h5 class="offcanvas-title" id="offcanvasRightLabel">Tu carrito de compras</h5>
//         <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
//         </div>
//         <div class="card">
//             <img class="imgcarrito" src="../img/nuevasesion/corset.jpg">
//             <div class="">
//                 <h3 class="card-title"> ${corpiñoCatalina.nombre} </h3>
//                 <p class="card-text"> ${corpiñoCatalina.precio} </p>
//                 <button onClick = "eliminarDelCarrito(${Producto.id})" class="btn btn-primary boton"> Eliminar del Carrito </button>
//             </div>
//         </div>
//         <div>
//         <h5 id="totalCarrito">Total: </h5>
//     </div>
//         <div class="offcanvas-body">
//         <button class="btn boton" id="vaciarCarrito">Vaciar Carrito</button>
//         </div>
//         `;   
//     })
//     offcanvasRight.innerHTML = aux;
//     calcularTotalCarrito();
// }
//     })
