
const productos = [
    {
        id: 1,
        nombre: "Producto 1",
        img: "./img/notebook.webp",
        precio: 1000,
        descripcion: "lorem insump 1",
        stock: 10,
        categoria: "electrodomesticos"
    },
    {
        id: 2,
        nombre: "Producto 2",
        img: "./img/notebook.webp",
        precio: 2000,
        descripcion: "lorem insump 2",
        stock: 20,
        categoria: "electrodomesticos"
    },
    {
        id: 3,
        nombre: "Producto 3",
        img: "./img/notebook.webp",
        precio: 3000,
        descripcion: "lorem insump 3",
        stock: 30,
        categoria: "electrodomesticos"
    },
    {
        id: 4,
        nombre: "Producto 4",
        img: "./img/notebook.webp",
        precio: 4000,
        descripcion: "lorem insump 4",
        stock: 40,
        categoria: "electrodomesticos"
    },
    {
        id: 5,
        nombre: "Producto 5",
        img: "./img/notebook.webp",
        precio: 5000,
        descripcion: "lorem insump 5",
        stock: 50,
        categoria: "electrodomesticos"
    }
];

// Convertimos el array de objetos en un formato tipo JSON
const productosEnStorage = JSON.stringify(productos);

// Guardamos en el localstorage el array JSON convertido de productos en String
localStorage.setItem("productos", productosEnStorage);


let productosObtenidosDelStorage = JSON.parse(localStorage.getItem("productos"));

// Creamos un array (carrito)
let carrito = [];

const generarCards = (productos) => {
    // Obtenemos el div que contendra las cards de productos
    let cards = document.getElementById("products");
    // Guardar el valor total de la lista de productos
    let total = 0;

    // Metodos de los Array

    // ForEach: Recorrer el array, y por cada elemento (element)
    productos.forEach( producto => {
        
        total += producto.precio;  // total = total + producto.precio;

        // Creamos la etiqueta Card
        let cardProductos = document.createElement("div");
        cardProductos.className = "card m-3";

        let card = `
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h4 class="card-title">${producto.nombre}</h4>
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
                <a class="btn btn-primary" id="cart${producto.id}">Agregar al Carrito</a>
            </div>
        `;
    
        // Escribimos el contenido de la plantilla card en la etiqueta div que creamos (Texto - String)
        cardProductos.innerHTML = card;

        // Append Child nos permite agregar una etiqueta hija dentro de una etiqueta padre
        cards.appendChild(cardProductos);

        let productCard = document.getElementById("cart" + producto.id);

        productCard.addEventListener("click", (evento)=>{
            evento.preventDefault();
            // Agregamos el producto al carrito
            carrito.push(producto);
        });


    });
    guardarEnStorage("precioTotal", total);
    
}


function guardarEnStorage (clave,valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}


generarCards(productos);


const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
});


