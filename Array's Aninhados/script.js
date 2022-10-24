//ex Caixa de Suprimentos
let caixaDeSuprimento = []
let secaoHigiene = ['Papel Higiênico', 'Sabonete', 'Escovas de Dentes', 'Pasta de Dentes', 'Toalha']
let secaoAlimentacao = ['Pão de Forma', 'Frutas', 'Água', 'Frios', 'Cerais']
let secaoMedicamentos = ['Band-aid', 'Pomada', 'Protetor Solar', 'Dorflex', 'Estomazil']
let secaoLazer = ['Livros', 'Baralho', 'Dominó', 'Video Game', 'Bola de Futebol']
caixaDeSuprimento = [secaoHigiene, secaoAlimentacao, secaoMedicamentos, secaoLazer]

function confereCaixaDeSuprimento(lista) {
    if (lista.length < 4) {
        return 'Algum amigo ainda não retornou com os itens'
    } else if (lista.length > 4) {
        return 'Acho que temos um intruso'
    } else {
        let resposta = '' 
        for (let i = 0; i < lista.length; i++) {
            for (let c = 0; c < lista[i].length; c++) {
                if (lista[i].length === 5) {
                    resposta = 'Podemos acampar'
                } else if (lista[i].length < 5) {
                    return 'Precisamos de mais itens dessa seção!'
                } else {
                    return 'Tem itens demais dessa seção'
                }
            }
        }
        return console.log(resposta)
    }
}
confereCaixaDeSuprimento(caixaDeSuprimento)