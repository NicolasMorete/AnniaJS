const botonAgregarAlCarritoCompras = document.querySelectorAll('.agregarAlCarrito');
botonAgregarAlCarritoCompras.forEach((botonAgregarAlCarrito) => {
  botonAgregarAlCarrito.addEventListener('click', agregarAlCarritoClick);
});

const comprarBoton = document.querySelector('.comprarBoton');
comprarBoton.addEventListener('click', botonComprarClick);

const contenedorCarritoProducto = document.querySelector(
  '.contenedorCarritoProducto'
);

function agregarAlCarritoClick(event) {
  const button = event.target;
  const item = button.closest('.item');

  const nombreProducto = item.querySelector('.producto-nombre').textContent;
  const precioProducto = item.querySelector('.producto-precio').textContent;
  const imagenProducto = item.querySelector('.producto-imagen').src;

  agregarItemAlCarrito(nombreProducto, precioProducto, imagenProducto);
}

function agregarItemAlCarrito(nombreProducto, precioProducto, imagenProducto) {
  const nombreDeProducto = contenedorCarritoProducto.getElementsByClassName(
    'productoEnCarritoNombre'
  );
  for (let i = 0; i < nombreDeProducto.length; i++) {
    if (nombreDeProducto[i].innerText === nombreProducto) {
      let cantidadProducto = nombreDeProducto[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.cantidadProductoEnCarrito'
      );
      cantidadProducto.value++;
      $('.toast').toast('show');
      actualizarTotalCarrito();
      return;
    }
  }

  const carritoDeComprasRow = document.createElement('div');
  const carritoDeComprasContenido = `
  <div class="row productoEnCarroDeCompras">
        <div class="col-6">
            <div class="shopping-cart-item d-flex flex-column align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${imagenProducto} class="shopping-cart-image">
                <hr>
                <h6 class="shopping-cart-item-title productoEnCarritoNombre text-truncate ml-3 mb-0">${nombreProducto}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="producto-precio mb-0 precioProductoUnitarioEnCarrito">${precioProducto}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input cantidadProductoEnCarrito" type="number"
                    value="1">
                <button class="btn btn-danger botonBorrar" type="button">X</button>
            </div>
        </div>
    </div>`;
  carritoDeComprasRow.innerHTML = carritoDeComprasContenido;
  contenedorCarritoProducto.append(carritoDeComprasRow);

  carritoDeComprasRow
    .querySelector('.botonBorrar')
    .addEventListener('click', borrarProductoDelCarrito);

  carritoDeComprasRow
    .querySelector('.cantidadProductoEnCarrito')
    .addEventListener('change', cambiarCantidad);

  actualizarTotalCarrito();
}

function actualizarTotalCarrito() {
  let total = 0;
  const totalCarritoDeCompras = document.querySelector('.totalCarritoDeCompras');

  const productosEnCarritoDeCompras = document.querySelectorAll('.productoEnCarroDeCompras');

  productosEnCarritoDeCompras.forEach((productoEnCarroDeCompras) => {
    const precioDelProductoEnCarrito = productoEnCarroDeCompras.querySelector(
      '.precioProductoUnitarioEnCarrito'
    );
    const precioProductoUnitarioEnCarrito = Number(
      precioDelProductoEnCarrito.textContent.replace('€', '')
    );
    const cantidadProductoEnCarritoMismo = productoEnCarroDeCompras.querySelector(
      '.cantidadProductoEnCarrito'
    );
    const cantidadProductoEnCarrito = Number(
      cantidadProductoEnCarritoMismo.value
    );
    total = total + precioProductoUnitarioEnCarrito * cantidadProductoEnCarrito;
  });
  totalCarritoDeCompras.innerHTML = ` ${total.toFixed(2)}$`;
}

function borrarProductoDelCarrito(event) {
  const botonClick = event.target;
  botonClick.closest('.productoEnCarroDeCompras').remove();
  actualizarTotalCarrito();
}

function cambiarCantidad(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  actualizarTotalCarrito();
}

function botonComprarClick() {
  contenedorCarritoProducto.innerHTML = '';
  actualizarTotalCarrito();
}
