let num1 = parseInt(prompt("Ingresa el num1:"));
let num2 = parseInt(prompt("Ingresa el num2:"));
let num3 = parseInt(prompt("Ingresa el num3:"));

if(num1 > num2){
    if(num1 > num3){
        console.log("Tu Numero 1 es mayor: "+ num1);
    }else{
        if (num3 > num2) {
            console.log("Tu numero 3 es mayor: "+num3 );   
        }
    }
 };