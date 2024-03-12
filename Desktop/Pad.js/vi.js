const patricia = { nome: 'Patricia', carrinho: [] }
const Carlos = { nome: 'Carlos', carrinho: [] }
const Renato = { nome: 'Renato', carrinho: [] }
const Jose = { nome: 'Jose', carrinho: [] }
const Roberto = { nome: 'Roberto', carrinho: [] }


const tv = { nome: 'tv samsung 4k' }
const notebook = { nome: 'Notebook dell', valorcentavos: 129900 }
const mouse = { nome: 'Mouse MX Master 3', valorcentavos: 399990 }
const teclado = { none: 'Teclado Keychron k8', valorcentavos: 23000 }
const carregador = { nome: 'Carregador portatil', valorcentavos: 4590 }
const webcam = { nome: 'webcam c90s', valorcentavos: 8000 }
const Cabousb = { nome: 'Cabo USB 2 METROS', valorcentavos: 1990 }
const monitor = { nome: 'monitor LG 29 FHD', valorcentavos: 129990 }

Jose.carrinho = [
    {
        item: tv,
        quantidade: 1
    },
    {
        item: Cabousb,
        quantidade: 2

    },
    {
        item: webcam,
        quantidade: 1
    }
];

console.log(Jose);

Carlos.carrinho = [
    {
        item: notebook,
        quantidade: 2
    },

]

patricia.carrinho = [
    {
        item: teclado,
        quantidade: 1,

    },
    {
        item: Cabousb,
        quantidade: 2
    },
    {
        item: carregador,
        quantidade: 1
    },
    {
        item: mouse,
        quantidade: 1
    },
    {
        item: monitor,
        quantidade: 1
    }
]

Renato.carrinho = [
    {
        item: webcam,
        quantidade: 5
    }
]

Roberto.carrinho = [
    {
        item: webcam,
        quantidade: 1
    },
    {
        item: Cabousb,
        quantidade: 2
    },
    {
        item: monitor,
        quantidade: 1
    }
]