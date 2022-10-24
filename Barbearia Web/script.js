const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  
  
function buscaCortePorId(id) {
    let buscador = barbearia.cortes
    let resultado
    for (let i = 0; i <buscador.length; i++) {
        if (i === id) {
            if (i === 0) {
                return 'Corte não encontrado'
            }
            return buscador[i - 1]
        } else {
            resultado = 'Corte não encontrado'
        }
    }  
    return resultado
}
console.log(`Busca por Corte`)
console.log(buscaCortePorId(2))
  
function buscaBarbaPorId(id) {
    let buscador = barbearia.barbas
    let resultado
    for (let i = 0; i <buscador.length; i++) {
        if (i === id) {
            if (i === 0) {
                return 'Barba não encontrado'
            }
            return buscador[i - 1]
        } else {
            resultado = 'Barba não encontrado'
        }
    }  
    return resultado
}
console.log(`Busca por Barba`)
console.log(buscaBarbaPorId(3))
  
function verificaStatusBarbearia() {
    let buscador = barbearia.estaAberto
    return buscador === true ?  'Estamos abertos' : 'Estamos fechados'
}
console.log('Verificar se Barbaearia está aberta')
console.log(verificaStatusBarbearia())
  
function retornaTodosCortes() {
    return barbearia.cortes
}
console.log('Todos os Cortes')
console.log(retornaTodosCortes())
  
function retornaTodasBarbas() {
    return barbearia.barbas
}
console.log('Todos as Barbas')
console.log(retornaTodasBarbas())
  
function criaPedido(nomeCliente, corteId, barbaId) {
    //verficar se os id's são válidos:
        if (corteId === 0) {
            return 'id de Corte Inválido'
        } else if (corteId > barbearia.cortes.length) {
            return 'id de Corte Inválido'
        }     
        if (barbaId === 0) {
            return 'id de Barba Inválido'  
        }  else if (barbaId > barbearia.cortes.length) {
            return 'id de Barba Inválido'
        } 
        
        let pedidoCorte =  buscaCortePorId(corteId) 
        let pedidoBarba =  buscaBarbaPorId(barbaId)
        
        if (corteId === undefined && barbaId === undefined) {
            return 'É necessário escolher ao menos um Corte ou Barba'
        }

        let pedido = {}
        if (barbaId === undefined) {
            pedido = {
                nome: nomeCliente,
                pedidoCorteTipo: pedidoCorte.tipo,
                pedidoCortePreco: pedidoCorte.valor,
            }
        } else if (corteId === undefined) {
            pedido = {
                nome: nomeCliente,
                pedidoBarbaTipo: pedidoBarba.tipo,
                pedidoBarbaPreco: pedidoBarba.valor
            }
        } else {
            pedido = {
                nome: nomeCliente,
                pedidoCorteTipo: pedidoCorte.tipo,
                pedidoCortePreco: pedidoCorte.valor,
                pedidoBarbaTipo: pedidoBarba.tipo,
                pedidoBarbaPreco: pedidoBarba.valor
            }

    }
        return pedido
}
console.log('Pedido escolhido')
console.log(criaPedido('Bruno', 3, 3))
  
function atualizaPedido(lista, id, novoPreco, novoTipo) {
    if (id === 0 || id > barbearia.cortes.length || id > barbearia.barbas.length || (novoPreco === undefined && novoTipo === undefined)) {
        return 'Entrada de valores inválidos'
    }

    if (novoPreco === undefined) {
        lista[id - 1].tipo = novoTipo
    } else if (novoTipo === undefined) {
        lista[id - 1].valor = novoPreco
    } else {
        lista[id - 1].tipo = novoTipo
        lista[id - 1].valor = novoPreco
    }
    console.log(lista[id - 1])
    return 'Item atualizaco com sucesso'
}
console.log('Item de lista atualizado')
console.log(atualizaPedido(barbearia.cortes, 1, 30, 'Hawaino'))

let orcamento = criaPedido('Bruno', 3 ,3)
function calculaTotal(pedido) {
    let somaPreco = 0
    if (pedido === 'id de Corte Inválido') {
        return 'Pedido Inválido'
    }
    if (pedido.pedidoBarbaPreco === undefined) {
        return pedido.pedidoCortePreco
    } else if (pedido.pedidoCortePreco === undefined) {
        return pedido.pedidoBarbaPreco
    } else {
        somaPreco = pedido.pedidoBarbaPreco + pedido.pedidoCortePreco
    }
    return `${pedido.nome}. O valor total do seu pedido foi de R$${somaPreco.toFixed(1)}.`
}
console.log('Mostrar valor total do pedido')
console.log(calculaTotal(orcamento))
