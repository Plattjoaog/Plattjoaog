const rendaMensalEmCentavos = 300000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos <= 60) {
    const rendaMensalEmReais = rendaMensalEmCentavos / 100;
    const valorParcela = rendaMensalEmReais > 2000 ? (rendaMensalEmReais * 0.18).toFixed(2) : 0;

    if (valorParcela !== 0) {
        console.log(`O valor da parcela desse mês é R$ ${valorParcela} reais`);
    } else {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
    }
} else {
    console.log("O aluno não deve mais nada, pois já se passaram 60 meses.");
}