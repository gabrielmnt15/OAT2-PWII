const readlineSync = require('readline-sync');

let notas = []
for(let i = 0; i < 3; i++){
    notas[i] = Number(readlineSync.question(`Nota ${i+1}: `));
}

const media = (notas[0] + notas[1] + notas[2]) / 3;

if(media > 60) {
    console.log(`Média: ${media} - Aluno Aprovado`);
} else if(media < 40) {
    console.log(`Média: ${media} - Aluno Reprovado`);
} else {
    console.log(`Média: ${media} - Aluno Poderá fazer VF`);
}
