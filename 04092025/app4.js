/*
let nombre = "Jonny";
console.log("Tu nombre es : "+nombre);
console.log(` Tu nombre es ${nombre}`);

console.log(`
    Hola como estas :
    ${nombre}

    `);
*/

//${}----es un if, no ocuparlos para calculos

console.log(`Hola como estas : ${nombre.toLocaleUppercase()}`);
var nombreUsuario = "Jonny";
let estado = true;

console.log(`
    ${estado ? `Todo bien `:`Adios `} ${nombreUsuario}
    `);


//${} en forma de if
var nombre = "Jonny";
let bandera = true;
if(bandera){
    console.log("Todo bien "+nombre);
}else{
    console.log("Adios "+nombre);

}