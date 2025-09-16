const frutas = [];

const fruta =prompt("HOLAA QUE FRUTAS DESEAR AGREGAR A TU CARRITO :)  : ");


frutas.push(fruta); //se inserta al final del array

while( confirm("¿Quieres agregar otra fruta a tu carrito?") ){


      const fruta =prompt("¿Que fruta deseas agregar a tu carrito?  : ");
      frutas.push(fruta); //se inserta al final del array
}

console.log("Tu carrito tiene: ");
for( let fruta of frutas ){
    console.log(fruta);
}