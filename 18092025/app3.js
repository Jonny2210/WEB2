/*
var miCarro = new Object();
miCarro.marca = "Toyota";
miCarro.modelo = "Corolla";
miCarro.color = "Rojo";

console.log(miCarro);
*/

//Ejemplo de arreglo, no es lo mismo que un objeto
// let frutas = ["Manzana", "Banana", "Cereza"];
// console.log(frutas);

/*
    var miCarro = {
        marca: "Toyota",
        modelo: "Corolla",
        color: "Rojo",
    }
    console.log(miCarro);
    */

var perro = {
    nombre: "Shayla",
    color: "Sal pimienta",
    edad: 28,
    talla: "Grande",
    enemigos: ["Gatos", "Otro perro", "baños"],
}

console.log(perro);
// console.log(perro.color);
// console.log(perro.enemigos[2]);
// console.log(perro.nombre);
perro.raza = "Schnautzer";

console.log(perro);

//leer
console.log(perro.raza);

//actualizar
perro.edad = 35;
console.log(perro.edad);

//eliminar
delete perro.talla;
console.log(perro);