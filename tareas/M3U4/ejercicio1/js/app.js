// Crear un documento html con 3 cuadrados que, al ser clickeados,
// cambien el color de fondo del documento. Cada cuadrado debera 
// tener un color distinto.

let cuadrado = document.querySelectorAll('#red, #yellow, #blue')

function cambiarFondo(color) {
    document.body.style = `background : ${color}`;
}

cuadrado.forEach((div)=>{
    div.addEventListener('click', ()=>{
        cambiarFondo(div.id)
    })
})
