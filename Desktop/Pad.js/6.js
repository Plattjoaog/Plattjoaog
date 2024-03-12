const livro = {
    nome: 'O poder do habito',
    capitulos: [
        {
            nome: 'O loop do habito',
        },
        {
            nome: 'A regra dde ouro da mudança de habito',
        },
        {
            nome: 'Habitos angulares, ou a balada de Paul O` Neill',
        },
        {
            nome: 'Starbucks e o habito do sucesso',
        },
        {
            nome: 'O poder de uma crise',
        },
        {
            nome: 'Como a target sabe o que você quer antes saiba',
        },
        {
            nome: 'A Saddleback church e o boicote aos onibus de Montgomery',
        },
        {
            nome: 'A neorologia do livre-arbitrio'
        }
    ]
}

for (let i = 0; i < livro.capitulos.length; i++) {
    livro.capitulos[i].numero = i;
}

console.log(livro);