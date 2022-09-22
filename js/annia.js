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
const corpiñoLoto = new Producto (1, "loto", "negro", 2500, 2);
const corpiñoCatalina = new Producto (2, "catalina", "negro", 2400, 2);
const corpiñoMagnolia = new Producto (3, "magnolia", "negro", 3000, 2);

const corpiños = [corpiñoLoto, corpiñoCatalina, corpiñoMagnolia];


const agregaralcarritoloto = document.getElementById("agregaralcarritoloto");
agregaralcarritoloto.addEventListener("click", () => {
        agregarAlCarrito(id);
    })
const carrito = [];

const agregarAlCarrito = (id) => {
    const producto = corpiños.find(producto => producto.id === id);
    const carritoDeProducto = carrito.find(producto => producto.id === id);
    if(carritoDeProducto) {
        carritoDeProducto.cantidad++;
    }else {
        carrito.push(producto);
    }
    actualizarCarrito();
}

const verCarrito = document.getElementById("carritodecompra")
verCarrito.addEventListener("click", actualizarCarrito);
function actualizarCarrito() {
    let aux="";
    carrito.forEach(producto => {
        aux += `
                    <img src="img/${producto.id}.jpg">
                    <div>
                        <h3 class="card-title"> ${producto.nombre} </h3>
                        <p class="card-text"> ${producto.precio} </p>
                        <button onClick = "eliminarDelCarrito(${producto.id})" class="btn btn-primary"> Eliminar del Carrito </button>
                    </div>
                `
    })

    contenedorCarrito.innerHTML = aux;
    calcularTotalCompra();
}

const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
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
        total += producto.precio * producto.cantidad;
    });
    totalCarrito.innerHTML = total;
}




// // SE MUESTRA PRODUCTOS Y MODIFICAMOS DOM
// const contenedorProductos = document.getElementById("contenedorProductos");

// // BUTTON id="boton${producto.id}"
// contenedorProductos.appendChild(spanProducto)

// const boton = document.getElementById('boton$producto.id');
// boton.addEventListener("click" , () =>{
//     agregarAlCarrito(Producto.id);
// }
// )
// // VERSIÓN SIMPLE
// // const carrito =[];
// // const agregarAlCarrito = (id) =>{
// //     const Producto = corpiños.find(Producto => Producto.id === id);
// //     carrito.push(Producto);
// // }

// const contenedorCarrito = document.getElementById("contenedorProductos");
// const verCarrito = document.getElementById("verCarrito");

// verCarrito.addEventListener("click", actualizarCarrito);
// function actualizarCarrito () {
//     let aux="";
//     carrito.forEach(Producto=>{
//         aux += ' todoo el html a mostrar producto'
//     })
//     contenedorCarrito.innerHTML = aux;
// }

// const agregarAlCarrito = (id) => {
//     const producto = producto.find(producto => producto.id === id);
//     const productoEnCarrito = 
// }

// const eliminarDelCarrito = (id) => {
//     const producto = carito.find(producto => producto.id === id);
//     carrito.splice(carrito.indexOf(producto),1);
//     actualizarCarrito();
// }

// const vaciarCarrito = document.getElementById("vaciarCarrito");
// verCarrito.addEventListener("click",() =>{
// carrito.splice(0, carrito.length);
// actualizarCarrito();
// } )

// const totalCompra = document.getElementById("totalCompra");

// const calcularTotalCompra = () => {
//     let total =0;
//     carrito.forEach(producto=>{
//         total += producto.precio * producto.cantidad;
//         totalCompra.innerHTML
//     })
// }