let secoesMercado = {
hortifruti: ['banana', 'pera', 'laranja'],
acougue: ['carne', 'frango', 'porco'],
padaria: ['pão francês', 'pão de forma', 'sonho'],
adegaEBebidas: ['cerveja', 'whisky', 'vodka'],
laticiniosEFrios: ['muzzarela', 'presunto', 'salame'],
}

function adicionarSecaoAoMercado(secao){
    secoesMercado[secao] = []
    return secoesMercado
}
console.log('Retorna Obejto secoesMercado com nova seção adicionada')
console.log(adicionarSecaoAoMercado(`medicamentos`))

function adicionarItemASecao(novoItem, secao){
    secao.push(novoItem)
    return secao;
}
console.log('Retorna seção com novo item adicionado')
console.log(adicionarItemASecao('pomada', secoesMercado.medicamentos))

function retornaUtlimoItemDaSecao(secao){
    ultimoItem = secao[secao.length -1]

    return ultimoItem
}
console.log('Retorna último item sa sessão')
console.log(retornaUtlimoItemDaSecao(secoesMercado.acougue))

function consultaSecoesMercado(secao){    
        return secoesMercado[secao]   
}
console.log('Retorna os itens de um determinado elemento')
console.log(secoesMercado.hortifruti)

function somaItens(totalA, totalB){
    if(totalA != 0 && totalB != 0){
        return Number(totalA) + Number(totalB)
    }
}
console.log('Retorna o resultado da soma')
console.log(somaItens('1','1'))

function baterPonto(nome, numeroFicha){
    const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"]
    if(nome == funcionarios[numeroFicha]){
        return "Turno processado"
    }else{
        return "Funcionario não cadastrado"
    }
}
console.log(baterPonto('Sônia', 0))

function loginSistema(nomeUsuario, senhaUsuario){
    
    const listaUsuarios = ["luffy123", "acer321", "nami"]

    
        if(nomeUsuario == 'luffy123'){
            if(senhaUsuario === "326541"){
                return "Acesso liberado"
            }
        }if(nomeUsuario == 'acer321'){
            if(senhaUsuario === "741258"){
                return "Acesso liberado"
            }
        }if(nomeUsuario == 'nami'){
            if(senhaUsuario === "963258"){
                return "Acesso liberado"
            }
        }

     return 'Acesso Negado'
}
console.log(loginSistema("luffy123", 326541))