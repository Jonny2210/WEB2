const frutas = ["Banana"];

frutas.push("Sandia"); //se inserta al final del array
frutas.unshift("mango");//se inserta al inicio del array
frutas.push("pera");
frutas.unshift("fresa");



console.log(frutas);

//arreglo completo
for( let fruta of frutas ){
    console.log(fruta);
}

//elimina shift el principio del array


//eliminar arreglo
console.log("------------------------------");
frutas.pop();//elimina pop el final del array
for( let fruta of frutas ){
    console.log(fruta);
}

console.log("------------------------------");
frutas.shift();
for( let fruta of frutas ){
    console.log(fruta);
}


/*
    const puerto = 3306;
    puerto = 3308;
    console.log(puerto);
*/

