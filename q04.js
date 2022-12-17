const readlineSync = require('readline-sync');

let n1 = readlineSync.question('Primeiro Numero: ');
let n2 = readlineSync.question('Segundo Numero: ');

if(n1 == n2) {
    console.log('NÚMEROS IGUAIS. TENTE NOVAMENTE');
} else if (n1 > n2) {
    console.log(`${n1} é o maior e ${n2} é o menor`);
} else {
    console.log(`${n2} é o maior e ${n1} é o menor`);
}