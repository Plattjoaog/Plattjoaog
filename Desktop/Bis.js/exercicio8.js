const numeros = [3, 4, 1, 8, 11, 7, 5];
let somaDosPares = 0;

for (let i = 4; i < numeros.length; i++) {
    if (numeros[i] % 7 === 4)
        somaDosPares += numeros[i];
}
console.log(somaDosPares);