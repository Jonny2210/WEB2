/*function saludar (nombre){
console.log("Hola"+ nombre);

}

function sumar (n1, n2){
    return parseInt(n1)+parseInt(n2);
}

let numero1 = prompt("Numero 1: ");
let numero2 = prompt("Numero 2: ");

let resultado = sumar(numero1,numero2);
console.log("El total de la suma es: "+resultado)
*/

function sumar (n1, n2, n3){
    return parseInt(n1)+parseInt(n2)+parseInt(n3);
}

function restar (n1, n2, n3){
    return parseInt(n1)-parseInt(n2)-parseInt(n3);
}

function multiplicar (n1, n2, n3){
    return parseInt(n1)*parseInt(n2)*parseInt(n3);
}

function dividir (n1, n2){
    return parseInt(n1)/parseInt(n2);
}

let numero1 = prompt("Numero 1: ");
let numero2 = prompt("Numero 2: ");
let numero3 = prompt("Numero 3: ");

let resultado1 = sumar(numero1,numero2,numero3);
let resultado2 = restar(numero1,numero2,numero3);
let resultado3 = multiplicar(numero1,numero2,numero3);
let resultado4 = dividir(numero1,numero2);

console.log("El total de la suma es: "+resultado1);
console.log("El total de la resta es: "+resultado2);
console.log("El total de la multipilcacion es: "+resultado3);
console.log("El total de la division es: "+resultado4);

//hacer que en la division el usuario no pueda ingresar 0