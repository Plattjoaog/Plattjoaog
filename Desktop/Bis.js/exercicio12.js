const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

// Enquanto houver pessoas na fila de fora e espaço disponível na fila de dentro
while (filaDeFora.length > 0 && filaDeDentro.length < 5) {
    const pessoa = filaDeFora.shift(); // Remove a primeira pessoa da fila de fora
    filaDeDentro.push(pessoa); // Adiciona a pessoa removida à fila de dentro
}
console.log("Fila de Dentro:", filaDeDentro);
console.log("Fila de Fora:", filaDeFora);
