const numeros = [8, 11, 4, 1];
numeros.sort((a, b) => a - b); // Ordena o array em ordem crescente
const maiorDiferenca = numeros[numeros.length - 1] - numeros[0]; // Calcula a maior diferença

console.log(maiorDiferenca); // Imprime a maior diferença no console