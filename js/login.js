const d = document
const userInput = d.querySelector("#usuarioForm")
const passInput = d.querySelector("#contraForm")
const btnLogin = d.querySelector(".btnLogin")

//evento click del boton del formulario 

btnLogin.addEventListener("click", ()=>{
    // alert (`Usuario: ${userInput.value}     contraseña: ${passInput.value}`)
   let userData=  getData();
   sendData(userData);
})

// Funcion Validar formulario y obtener la info del usuario y contraseña

let getData = ()=>{
    let userInfo;
    if(userInput.value && passInput.value){
        userInfo = {
            usuario: userInput.value,
            contrasena: passInput.value
        }
        userInput.value = ""
        passInput.value = ""
        console.log("UserInfo: ", userInfo)
    }else if(userInfo.value){
        alert("No escribiste nada o te falta algo")
        passInput.value = ""
    }
    return userInfo;
}

let sendData = async (data)=>{
    let url = "http://localhost/backend-apiCrud/login"
    try {
        let respuesta = await fetch( url,{
            method:"POST", 
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        });
        if(respuesta.status == 401){
            alert ("El usuario o la contraseña son incorrectos")
        }else{
            let datos = await respuesta.json();
            alert("Bienvenido: " + datos.nombre)
            location.href = "../index.html"
            localStorage.setItem("usuario", JSON.stringify(datos))
            
        }

    } catch (error) {
        console.log("error: ",error)
    }
    
}


