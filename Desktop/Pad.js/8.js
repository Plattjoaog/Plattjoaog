const participantes = [
    { nome: 'João' },
    { nome: 'Ana' },
    { nome: 'Beatriz' },
    { nome: 'Maria' },
    { nome: 'Ana Clara' },
    { nome: 'Joana' },
    { nome: 'Augusto' },
    { nome: 'Renan' },
    { nome: 'Patricia' },
    { nome: 'Carlos' },
    { nome: 'Jose' },
    { nome: 'Roberto' },
    { nome: 'Sara' },
    { nome: 'Junior' },
    { nome: 'Pedro' },
    { nome: 'Vitor' },
    { nome: 'Antonio' },

];

for (let posicao = 0; posicao < participantes.length; posicao++) {
    if (participantes[posicao].nome === 'Carlos') {
        console.log(`Galera ... O Carlos está na posição ${posicao}`)
    }
}