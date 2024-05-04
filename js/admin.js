// variables globales 
let d = document
let userName = document.querySelector(".user-name")
let btnLogout = d.querySelector(".btn-logout")

// evento click al boton 

btnLogout.addEventListener("click", ()=>{
    // alert("salir "+ userName.textContent);
    let confirmar = confirm("¿Desea cerrar sesion?")
    if(confirmar){
        localStorage.removeItem("usuario")
        location.href = "../login.html";
    }

});

// eventos para el navegador 
document.addEventListener("DOMContentLoaded", ()=>{
    getUserName();
})

let getUserName = () =>{
    let user = JSON.parse(localStorage.getItem("usuario"));
    userName.textContent = user.nombre
}