const usuarios = [
    {
        nome: 'João',
        idade: 25,

    },
    {
        nome: 'Isabelle',
        idade: 15,

    },
    {
        nome: 'Alonso',
        idade: 16,

    },
    {
        nome: 'Matteo',
        idade: 32,
    },

];
for (const usuario of usuarios) {
    if (usuario.idade > 17) {
        usuario.maior_idade = true;

    } else {
        usuario.maior_idade = false;
    }
}
console.log(usuarios);