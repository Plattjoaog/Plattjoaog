const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

const valorTotalAPagar = valorDoProduto / quantidadeDoParcelamento;
const valorRestante = (valorDoProduto - valorPago);
const parcelasRestantes = quantidadeDoParcelamento - Math.ceil(valorPago / valorTotalAPagar);

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorTotalAPagar}`);