let calculadora = require('./calculadora');

let process = require('process');

/*console.log(process.argv);*/

let operacion = process.argv[2];
let numero1 = Number(process.argv[3]);
let numero2 = Number(process.argv[4]);

switch (operacion) {
    case "sumar":
        console.log(calculadora.sumar(numero1,numero2));
        break;
    case "restar":
        console.log(calculadora.restar(numero1,numero2));
        break;
    case "multiplicar":
         console.log(calculadora.multiplicar(numero1,numero2));
         break;
    default:
        break;
}