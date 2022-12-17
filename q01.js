const readlineSync = require('readline-sync');

const num = readlineSync.question('Digite um numero: ', {
    defaultInput: 0});

let par_impar;
if (num % 2 == 0) {
    par_impar = 'par';
} else {
    par_impar = 'ímpar';
}

let pos_neg;
if (num >= 0) {
    pos_neg = 'positivo';
} else {
    pos_neg = 'negativo';
}

console.log(`O número ${num} é ${pos_neg} e ${par_impar}`);