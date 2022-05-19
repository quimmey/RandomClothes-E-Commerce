const formulario = document.getElementById("form");

const userEmail = document.getElementById("email");
const userPass = document.getElementById("pass");

const alertSuccess = document.getElementById("alertSuccess");
const alertEmail = document.getElementById("alertEmail");
const alertPass = document.getElementById("alertPass");

// SETEAMOS LOS VALORES DE LOGIN POR DEFECTO
const pass = 1234;
const email = "mail@mail.com";


const pintarMensajeExito = () => {
    alertSuccess.classList.remove("d-none");
    alertSuccess.textContent = "Login Exitoso";
};

const pintarMensajeError = (errores) => {
    //RECORREMOS LA LISTA DE ERRORES (ARRAY) => FUNCION FOREACH
    errores.forEach((item) => {
        item.tipo.classList.remove("d-none");
        item.tipo.textContent = item.msg;
    });

};