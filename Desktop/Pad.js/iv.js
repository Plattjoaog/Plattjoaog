function imprimirResumoDoCarrinho(carrinho5) {
    // lógica para imprimir resumo do carrinho
}
function imprimirResumoDoCarrinho(carrinho) {
    let totalItens = carrinho2.produtos.reduce((acc, produto) => acc + produto.qtd, 0);
    let totalPagar = carrinho2.produtos.reduce((acc, produto) => acc + (produto.qtd * produto.precoUnit) / 100, 0).toFixed(2);

    console.log(`Cliente: ${carrinho.nomeDoCliente}`);
    console.log(`Total de itens: ${totalItens} itens`);
    console.log(`Total a pagar: R$ ${totalPagar}`);
}

const carrinho2 = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        { id: 1, nome: "Camisa", qtd: 3, precoUnit: 3000 },
        { id: 2, nome: "Bermuda", qtd: 2, precoUnit: 5000 }
    ]
};

imprimirResumoDoCarrinho(carrinho2);


const carrinho4 = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        // ...
    ],
    imprimirResumo: function () {
        let totalItens = this.produtos.reduce((acc, produto) => acc + produto.qtd, 0);
        let totalPagar = this.produtos.reduce((acc, produto) => acc + (produto.qtd * produto.precoUnit) / 100, 0).toFixed(2);

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${totalItens} itens`);
        console.log(`Total a pagar: R$ ${totalPagar}`);
    }
};
carrinho4.imprimirResumo();


function addProdutoAoCarrinho(carrinho, produto) {
    // lógica para adicionar produto ao carrinho
}


function addProdutoAoCarrinho(carrinho, produto) {
    const index = carrinho.produtos.findIndex(item => item.id === produto.id);
    if (index !== -1) {
        carrinho4.produtos[index].qtd += produto.qtd;
    } else {
        carrinho4.produtos.push(produto);
    }
}

const novaBermuda = { id: 2, nome: "Bermuda", qtd: 3, precoUnit: 5000 };
addProdutoAoCarrinho(carrinho4, novaBermuda);
carrinho4.imprimirResumo();


const carrinho1 = {
    // ...
    addProduto: function (produto) {
        const index = this.produtos.findIndex(item => item.id === produto.id);
        if (index !== -1) {
            this.produtos[index].qtd += produto.qtd;
        } else {
            this.produtos.push(produto);
        }
    },
    imprimirResumo: function () {
        // ...
    }
};
const novoTenis = { id: 3, nome: "Tenis", qtd: 1, precoUnit: 10000 };
carrinho1.addProduto(novoTenis);
carrinho1.imprimirResumo();

const carrinho5 = {
    // ...
    imprimirDetalhes: function () {
        console.log(`Cliente: ${this.nomeDoCliente}`);
        this.produtos.forEach((produto, index) => {
            console.log(`Item ${index + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)}`);
        });
        // inserir lógica para calcular e imprimir total de itens e total a pagar
    }
};
carrinho5.imprimirDetalhes();