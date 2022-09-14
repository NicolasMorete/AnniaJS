const iniciarJuegoSaw = document.getElementById("iniciarJuegoSaw");{
    let iniciarJuego = prompt("Para jugar ingrese su nombre");
console.log (iniciarJuego);
console.log("Que inicie el juego")
{
    alert ("Bienvenido " + iniciarJuego + ", este juego consiste en responder incorrectamente las preguntas (menos la última), sino, entrarás en un bucle infinito xd")
}
const arraySaw = [2,4,10,20,25,50,100,10000,]
let primera = prompt ("Cuánto es 2 + 2? Opciones: " + arraySaw);
let resultado = arraySaw [1];
if(primera == resultado) {
    let infinito = true;
    while(infinito){
        console.log ("TURIP")
    }
} else{
    primera = alert ("MUY BIEN, QUE SIGA EL JUEGO") ;
}
console.log("Cuánto es 2 + 2?");
console.log("Opciones:");
console.log(arraySaw.join("--"));
console.log("Su respuesta es:");
console.log (arraySaw.some((primera) => primera.rta!=resultado));

let segunda = prompt ("Cuánto es 5 x 5? Opciones: " + arraySaw);
let resultado2 = arraySaw [4];
if(segunda == resultado2) {
    let infinito = true;
    while(infinito){
        console.log ("TURIP")
    }
} else{
    segunda = alert ("MUY BIEN, QUE SIGA EL JUEGO") ;
}
console.log("Cuánto es 5 x 5?");
console.log("Opciones: ");
console.log(arraySaw.join("--"));
console.log("Su respuesta es:");
console.log (arraySaw.some((segunda) => segunda.rta!=resultado2));

let tercera = prompt ("Cuánto es 100 x 100? Opciones: " + arraySaw);
let resultado3 = arraySaw [7];
if(tercera == resultado3) {
    let infinito = true;
    while(infinito){
        console.log ("TURIP")
    }
} else{
    tercera = alert ("MUY BIEN, QUE SIGA EL JUEGO") ;
}
console.log("Cuánto es 100 x 100?");
console.log("Opciones: ");
console.log(arraySaw.join("--"));
console.log("Su respuesta es:");
console.log (arraySaw.some((tercera) => tercera.rta!=resultado3));

let cuarta = prompt ("Cuánto es 50000 / 1000? Opciones: " + arraySaw);
let resultado4 = arraySaw [5];
if(cuarta == resultado4) {
    let infinito = true;
    while(infinito){
        console.log ("TURIP")
    }
} else{
    cuarta = alert ("MUY BIEN, EN LA PRÓXIMA PREGUNTA DEBERÁS ESCRIBIR LA RESPUESTA CORRECTA") ;
}
console.log("Cuánto es 50000 / 1000?");
console.log("Opciones: ");
console.log(arraySaw.join("--"));
console.log("Su respuesta es:");
console.log (arraySaw.some((cuarta) => cuarta.rta!=resultado4));

arraySaw.splice(0,8)
arraySaw.push(0,1,2,"infinito")
let ultima = prompt ("Cuál es el límite de un número dividido por 0?" + arraySaw);
ultima = ultima.toLowerCase();
let ultimoresultado = arraySaw [3];
console.log("Cuál es el límite de un número dividido por 0?")
console.log("Opciones: ")
console.log(arraySaw.join("--"))
console.log("Su respuesta es:");
console.log (arraySaw.some((ultima) => ultima.rta=ultimoresultado));
if (ultima != ultimoresultado){
    let infinito = true;
    ultima = ultima.toLowerCase();
        while(infinito){
            console.log ("TURIP")}
        }else {
            ultima == ultimoresultado
            let = alert ("CONGRATULATION");
            console.log ("FELICITACIONES, SUPERASTE LA PRUEBA")
        }ultima = ultima.toLowerCase ();
}
