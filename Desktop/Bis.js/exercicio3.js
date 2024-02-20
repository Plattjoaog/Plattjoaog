const numeros = [54, 22, 14, 10, 284];
let posicao = -1;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === 10) {
        posicao = i;
        break; // encerra o loop assim que encontra o número 10
    }
}

console.log(posicao);