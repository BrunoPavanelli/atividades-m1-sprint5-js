// Lista de Lógica
let escola = {
    nome: 'Escola Novo Estudo',
    status: false,
    nivel: 'Fundamental',
    nota: 3
  }

//ex 1
function alterarStatus(escola) {
    escola.status ? escola.status = false : escola.status = true
    return escola
}
console.log('Aletra Stauts')
console.log(alterarStatus(escola))

//ex 2
function alteraNivel(escola, valor) {
    valor = valor[0].toUpperCase() + valor.substring(1, valor.length).toLowerCase()
    if (valor != 'Fundamental' && valor !== 'Ensino medio' && valor != 'Primario') {
        return 'Valor Inválido'
    } else {
        escola.nivel = valor
    }
    return escola
}
console.log('Altera Nivel')
console.log(alteraNivel(escola, 'primariO'))

//ex 3
function alteraNome(escola, name) {
    if (typeof name !== 'string') {
        return 'Nome inválido'
    } else {
        escola.nome = name
    }
    return escola
}
console.log('Alera Nome')
console.log(alteraNome(escola, 'Kenzie Academy'))

//ex 4
function classificaEscola(escola, valor) {
    if (typeof valor === 'string' || valor < 1 || valor > 5) {
        return 'Valor Inválido'
    } else {
        escola.nota = valor
    }
    return escola
}
console.log('Altera Nota')
console.log(classificaEscola(escola, 4))

//ex 5
function verificaStatus(escola) {
    console.log(escola.status)
    return escola.status ? 'Escola Aberta' : 'Escola Fechada'
}
console.log('Verifica Status')
console.log(verificaStatus(escola))

//ex 6
function verificaQualidadeDeEnsino(escola) {
    if (escola.nivel <= 2) {
        return 'Essa escola não é boa'
    } else if (escola.nivel <= 4) {
        return 'Esta é uma boa escola'
    } else {
        return 'Uma escola excelente'
    }
}
console.log('Verifica Qualidade de Ensino')
console.log(verificaQualidadeDeEnsino(escola))