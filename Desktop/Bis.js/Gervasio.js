const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = original.filter(numero => numero % 2 === 0);
const impares = original.filter(numero => numero % 2 !== 0);

console.log(pares);   // Resultado: [2, 4, 6, 8, 10]
console.log(impares); // Resultado: [1, 3, 5, 7, 9]