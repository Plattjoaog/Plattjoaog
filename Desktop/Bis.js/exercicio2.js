const letras = ["A", "a", "B", "C", "L", "z"];
let qtdLetrasEncontradas = 0;

for (let letra of letras) {
    if (letra === 'E' || letra === 'e') {
        qtdLetrasEncontradas++;
    }
}

if (qtdLetrasEncontradas === 0) {
    console.log('Nenhuma letra "E" ou "e" foi encontrada');
} else {
    console.log(`Foram encontradas ${qtdLetrasEncontradas} letras "E" ou "e"`);
}

const jletras = ["A", "e", "B", "C", "E", "z"];
let qualetras = 0;

for (let jletra of jletras) {
    if (jletras === 'E' || jletras === 'e'); {
        qualetras++;
    }
    if (qualetras === 0) {
        console.log('Foram encontradas 2 letras "E" ou "e" ')
    } else {
        console.log(`Foram encontradas letras "E" ou "e"`)
    }
}

