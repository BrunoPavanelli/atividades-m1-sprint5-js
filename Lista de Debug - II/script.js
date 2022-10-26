// Função Insere Produto

//Função⁠
function insereProduto(produto){
    const produtosCotacao = []
    produtosCotacao.push(produto)

    return produtosCotacao 
}


//Chamada da função
console.log('Mostra lista de produtos com novo item inserido')
console.log(insereProduto({
    preco: 100,
    quantidade: 10, 
    nome: "Soja 25kg"
}))

// Função de Criar Produto

//Função⁠
function criaProduto(preco, quantidade, nome){
    let produto = {
        preco: preco,
        quantidade: quantidade,
        nome: nome
    }

    return produto
}

//chamada da função
console.log('Mostra produto criado')
console.log(criaProduto(200, 150, "Feijão 25kg"))

// Função Renderiza Produto


//função⁠
function renderizaProdutos(todosProdutos){
    let arrayDePrecos = []
    for (let i = 0; i < todosProdutos.length; i++){
        arrayDePrecos.push(todosProdutos[i].preco)
    }
    return arrayDePrecos
}
//chamada da função
let produto = {
    preco: 200,
    quantidade: 20,
    nome: 'Terra 25kg'
}
let todosProdutos = insereProduto(produto)
// console.log(todosProdutos.preco)
console.log('Mostra o preço de cada item')
console.log(renderizaProdutos(todosProdutos))

// Função Cadastra Serviços

//função⁠

function cadastraServicos(servico){
    let listServico = []
    listServico.push(servico)
    return listServico
}
//chamada da função
console.log('Retorna nova lista de serviços')
console.log(cadastraServicos({servico: "Pulverização", tipo: "Gafanhotos", valor: 50}))

//Função Calcular Valor do Serviço

//função⁠
function calculaValorServico(clienteServicos){
    // let valorServico = clienteServicos.servicos[0].preco * clienteServicos.servicos[0].qtd
    let aux = clienteServicos.servico
    let valorServico = 0
    for (let i = 0; i < aux.length; i++) {
       valorServico += (Number(aux[i].preco) * Number(aux[i].quantidade)) 
    }
 
     return `R$ ${valorServico.toFixed(2)}`
 }
 
 //Chamada da função
 console.log('Mostrando valor Total do pedido de Serviço')
 console.log(calculaValorServico({cliente: "Rafael", servico:[
     pulverizacao = {
        preco: 50,
        quantidade: 10
     },
     capina = {
         preco: 5,
         quantidade: 10
     },
     aragem = {
         preco: 200,
         quantidade: 10
     }
 
 ]}))
 
