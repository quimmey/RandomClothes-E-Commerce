Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@quimmey 
quimmey
/
ProyectoG8
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
ProyectoG8/js/index.js /

lekri75 Commit Leandro
Latest commit 6e872a6 2 days ago
 History
 1 contributor
116 lines (112 sloc)  2.5 KB
   
const productos = [
    {
        id: 01,
        nombre: "Producto 01",
        img: "../images/p1.png",
        precio: 75,
        descripcion: "lorem insump 01",
        stock: 10,
        categoria: "buzos deportivos"
    },
    {
        id: 02,
        nombre: "Producto 02",
        img: "../images/p2.png",
        precio: 80,
        descripcion: "lorem insump 02",
        stock: 10,
        categoria: "buzos deportivos"
    },
    {
        id: 03,
        nombre: "Producto 03",
        img: "../images/p3.png",
        precio: 68,
        descripcion: "lorem insump 03",
        stock: 10,
        categoria: "camisas"
    },
    {
        id: 04,
        nombre: "Producto 04",
        img: "../images/p4.png",
        precio: 70,
        descripcion: "lorem insump 04",
        stock: 10,
        categoria: "remeras"
    },
    {
        id: 05,
        nombre: "Producto 05",
        img: "../images/p5.png",
        precio: 75,
        descripcion: "lorem insump 05",
        stock: 10,
        categoria: "jeans"
    },
    {
        id: 06,
        nombre: "Producto 06",
        img: "../images/p6.png",
        precio: 58,
        descripcion: "lorem insump 06",
        stock: 10,
        categoria: "pantalones"
    },
    {
        id: 07,
        nombre: "Producto 07",
        img: "../images/p7.png",
        precio: 80,
        descripcion: "lorem insump 07",
        stock: 10,
        categoria: "remeras"
    },
    {
        id: 08,
        nombre: "Producto 08",
        img: "../images/p8.png",
        precio: 65,
        descripcion: "lorem insump 08",
        stock: 10,
        categoria: "buzos deportivos"
    },
    {
        id: 09,
        nombre: "Producto 09",
        img: "../images/p9.png",
        precio: 65,
        descripcion: "lorem insump 09",
        stock: 10,
        categoria: "remeras"
    },
    {
        id: 10,
        nombre: "Producto 10",
        img: "../images/p10.png",
        precio: 65,
        descripcion: "lorem insump 10",
        stock: 10,
        categoria: "zapatillas"
    },
    {
        id: 11,
        nombre: "Producto 11",
        img: "../images/p11.png",
        precio: 10,
        descripcion: "lorem insump 11",
        stock: 10,
        categoria: "zapatillas"
    },
    {
        id: 12,
        nombre: "Producto 12",
        img: "../images/p12.png",
        precio: 65,
        descripcion: "lorem insump 12",
        stock: 10,
        categoria: "zapatillas"
    }
];

const carrito = JSON.stringify(productos);

localStorage.setItem("productos", carrito);

© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete