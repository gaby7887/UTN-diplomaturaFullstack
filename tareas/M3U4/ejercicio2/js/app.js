// Programar un contador de caracteres para un textarea.
let mensaje = document.querySelector("#mensaje");
let span = document.querySelector("#counter");

mensaje.addEventListener("input", () =>{
    let caracteres = mensaje.value;
    span.innerText = caracteres.length;

})