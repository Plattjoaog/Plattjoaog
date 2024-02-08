function verificarAcesso(idade, altura, possuiPatologiaCardiaca, estudante) {
    if (idade >= 12 && idade <= 65 && altura >= 150 && !possuiPatologiaCardiaca) {
        if (idade < 18 || estudante) {
            console.log("20 reais");
        } else {
            console.log("20 reais");
        }
    } else {
        console.log("ACESSO NEGADO");
    }
}

verificarAcesso(20, 160, false, true); // Exemplo de chamada da função