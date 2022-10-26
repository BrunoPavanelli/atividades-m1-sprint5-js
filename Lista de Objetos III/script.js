// Pessoa
let pessoa = {
    nome: '',
    anoDeNascimento: undefined,
    cidade: '',
}
function criarPessoa(nome, anoDeNascimento, cidade) {
    nome
    anoDeNascimento 
    cidade
    pessoa = {
        nome: nome,
        anoDeNascimento: anoDeNascimento,
        cidade: cidade,
    }
    return pessoa
}
console.log(criarPessoa('Bruno', 1996, 'São Paulo'))

function apresentar(pessoa) {
    let idade = 2022 - pessoa.anoDeNascimento
    return `${pessoa.nome} possui ${idade} anos de idade e atualemnte está morando em ${pessoa.cidade}`
}
console.log(apresentar(pessoa))

// Elevador
let elevador = {
    andarAtual: 4,
    comecoAndares: 0,
    totalDeAndares: 10,
    capacidadeDoElevador: 10,
    ocupacaoAtual: 6,
    minOcupacaoAtual: 0,
    entrar: function() {
        if (this.ocupacaoAtual === this.capacidadeDoElevador) {
            return 'Elevador lotado'
        } else {
            this.ocupacaoAtual++
            return `Ocupação atual em ${this.ocupacaoAtual}`
        }
    },
    sair: function() {
        if (this.ocupacaoAtual === this.minOcupacaoAtual) {
            return 'Não há ninguém para sair do elevador'
        } else {
            this.ocupacaoAtual--
            return `Ocupação atual em ${this.ocupacaoAtual}`
        }
    },
    subir: function() {
        if (this.andarAtual === this.totalDeAndares) {
            return "O elevador já se encontra no último andar"
        } else {
            this.andarAtual++
            return `Estamos no andar: ${this.andarAtual}`
        }
    },
    descer: function() {
        if (this.andarAtual === this.comecoAndares) {
            return "O elevador já se encontra no térreo"
        } else {
            this.andarAtual--
            return `Estamos no andar: ${this.andarAtual}`
        }
    }
}
console.log(elevador.entrar())
console.log(elevador.sair())
console.log(elevador.subir())
console.log(elevador.descer())

// Televisão
let televisao = {
    canalMax: 100,
    canalMin: 0,
    canalAtual: 0,
    volumeMin: 0,
    volumeMax: 100,
    volume: 99,
    aumentarVolume: function() {
        if (this.volume === this.volumeMax) {
            return 'Volume já está no máximo'
        } else {
            this.volume++
            if (this.volume === this.volumeMax) {
                return 'Volume no máximo'
            } else {
            return `O volume está em: ${this.volume}`
            }
        }
    },
    diminuirVolume: function() {
        if (this.volume === this.volumeMin) {
            return 'Volume já está no mínimo'
        } else {
            this.volume--
            if (this.volume === this.volumeMin) {
                return 'Volume no mínimo'
            } else {
            return `O volume está em: ${this.volume}`
            }
        }
    },
    mudarParaCanalCima: function() {
        if (this.canalAtual === this.canalMax) {
            return 'Este é o último canal'
        } else {
            this.canalAtual++
            return `O canal atual é: ${this.canalAtual}`
        }
    },
    mudarParaCanalBaixo: function() {
        if (this.canalAtual === this.canalMin) {
            return 'Este é o primeiro canal'
        } else {
            this.canalAtual--
            return `O canal atual é: ${this.canalAtual}`
        }
    },
    consultarCanal: function() {
        return `O canal atual é: ${this.canalAtual}`
    },
    consultarVolume: function() {
        return `O volume está em: ${this.volume}` 
    }
}
console.log(televisao.aumentarVolume())
console.log(televisao.diminuirVolume())
console.log(televisao.diminuirVolume())
console.log(televisao.mudarParaCanalCima())
console.log(televisao.mudarParaCanalBaixo())
console.log(televisao.consultarCanal())
console.log(televisao.consultarVolume())