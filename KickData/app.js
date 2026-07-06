const form = document.getElementById("formulario-contactar");
const inputNombre = document.getElementById("nombres");
const inputApellido = document.getElementById("apellidos");
const inputFecha = document.getElementById("fecha");
const selectPais = document.getElementById("pais");
const inputTel = document.getElementById("tel");
const inputEmail = document.getElementById("mail");
const inputDireccion = document.getElementById("direccion");
const textMotivo = document.getElementById("motivo");
const inputsRadios =  document.querySelectorAll(".radios"); //Inputs radios
const divDatosBox = document.getElementById("datos-container");


form.addEventListener("submit", function(event){
    event.preventDefault();
    let inputRadioSelect;

    for(let i = 0; i < inputsRadios.length; i++){
        if(inputsRadios[i].checked){
            inputRadioSelect =  inputsRadios[i].value;
            inputsRadios[i].checked = false;
        }
    }

    divDatosBox.style.display = "block";

    divDatosBox.innerHTML = `
        <h6 id = "titulo-datos">Bienvenido ${inputNombre.value}!</h6>
        <p>Sus datos cargados son:</p>
        <div id = "datos-box">
            <p>Nombres: <br> <span class = "datos">${inputNombre.value}</span></p>
            <p>Apellidos: <br> <span class = "datos">${inputApellido.value}</span></p>
            <p>Fecha de nacimiento: <br> <span class = "datos">${inputFecha.value}</span></p>
            <p>País: <br> <span class = "datos">${selectPais.value}</span></p>
            <p>Telefóno: <br> <span class = "datos">${inputTel.value}</span></p>
            <p>Correo electrónico: <br> <span class = "datos">${inputEmail.value}</span></p>
            <p>Dirección de residencia: <br> <span class = "datos">${inputDireccion.value}</span></p>
            <p>Género: <br> <span class = "datos">${(inputRadioSelect === "M")? "Masculino": "Femenino"}</span></p>
        </div>
        <p id = "texto-motivo">Motivo de contacto: <br> <span class = "datos">${textMotivo.value}</span></p>
        `;

    inputNombre.value = "";
    inputApellido.value = "";
    inputFecha.value = "";
    selectPais.value = "";
    inputTel.value = "";
    inputEmail.value = "";
    inputDireccion.value = "";
    inputRadioSelect = "";
    textMotivo.value = "";
    
});

form.addEventListener("reset", function(event){
    divDatosBox.innerHTML = "";
    divDatosBox.style.display = "none";
})


