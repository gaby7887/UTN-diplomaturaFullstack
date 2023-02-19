//Ejericio 1
//Crear el código que dada una distancia determine el medio de transporte apropiado de acuerdo a las siguientes reglas:
//0 a 1000 metros = pie
//1000 a 10000 metros = bicicleta
//10000 a 30000 metros = colectivo
//30000 a 100000 metros = auto
//+100000 = avion

let distancia= parseInt(prompt('Ingrese la distancia a recorrer'));

if(distancia > 0 && distancia < 1000) {
    console.log(`La distancia de ${distancia} metros la podes recorrer a pie`);
} else if(distancia >= 1000 && distancia < 10000) {
        console.log(`La distancia de ${distancia} metros la podes recorrer en bicicleta`);
    } else if(distancia >= 10000 && distancia < 30000) {
            console.log(`La distancia de ${distancia} metros la podes recorrer en colectivo`);
        } else if(distancia >= 30000 && distancia < 100000) {
                console.log(`la distancia de ${distancia} metros la podes recorrer en auto`);
            } else if(distancia >= 100000){
                    console.log(`La distancia de ${distancia} metros la podes recorrer en avion`);
                }

//Ejericio 2
//Crear el código que reciba como parámetro un array de números y devuelva el mayor.

let numeros = [1, 5, 18, 6, 9];

console.log(Math.max(...numeros))





