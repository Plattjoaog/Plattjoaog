const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = nomes.filter((nome) => {
    return nome[0].toLowerCase() === 'a';
});

console.log(nomesComA); 