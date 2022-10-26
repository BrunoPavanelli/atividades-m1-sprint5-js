// Desafio - Caixa Eletrônico
const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
    ],
    makeWithDrawal: function() {
        let responseWithDraw = prompt('1: Poupança, 2: Crédito')

        if (responseWithDraw == 1) {
            let withdrawlAmount = Number(prompt(`Poupança: Saldo: R$${this.savingsBalance.toFixed(2)}. Quanto deseja sacar?`))
            while (withdrawlAmount % 1 !== 0 ||withdrawlAmount <=5 || withdrawlAmount >= 500) {
                alert('Valor inválido')
                withdrawlAmount = Number(prompt(`Poupança: Saldo: R$${this.savingsBalance.toFixed(2)}. Quanto deseja sacar?`))
            }
            this.savingsBalance = this.savingsBalance - withdrawlAmount
            alert(`Saque realizado. Saldo atual: R$ ${this.savingsBalance.toFixed(2)}`)           
        } else if (responseWithDraw == 2) {
            let withdrawlAmount = Number(prompt(`Poupança: Saldo: R$${this.cardsInformation[0].creditBalance.toFixed(2)}. Quanto deseja sacar?`))
            while (withdrawlAmount % 1 !== 0 ||withdrawlAmount <=5 || withdrawlAmount >= 1000) {
                alert('Valor inválido')
                withdrawlAmount = Number(prompt(`Poupança: Saldo: R$${this.cardsInformation[0].creditBalance.toFixed(2)}. Quanto deseja sacar?`))
            }
            this.cardsInformation[0].creditBalance = this.cardsInformation[0].creditBalance - withdrawlAmount
            alert(`Saque realizado. Saldo atual: R$ ${this.cardsInformation[0].creditBalance.toFixed(2)}`)
        }
    },
    getBalance: function() {
        let responseBalance = Number(prompt(`1: Poupança. 2: Crédito. Qual saldo deseja visualizar?`))
        if (responseBalance == 1) {
            alert(`O seu saldo em Poupança é de: R${this.savingsBalance.toFixed(2)}`)
        } else if (responseBalance == 2) {
            alert(`O seu saldo em Crédito é de: R$${this.cardsInformation[0].creditBalance.toFixed(2)}`)
        } else {
            alert('Valor inválido')
        }
    },
    makeDeposit: function() {
        let valueForDeposit = Number(prompt(`Qual deseja depositar na sua Poupança? Saldo atual: R$${this.savingsBalance.toFixed(2)}`))
        while (valueForDeposit % 1 !== 0 || valueForDeposit <= 5 || valueForDeposit >= 500) {
            alert('Valor inválido')
            valueForDeposit = Number(prompt(`Qual deseja depositar na sua Poupança? Saldo atual: R$${this.savingsBalance.toFixed(2)}`))
        }
        this.savingsBalance += valueForDeposit
        alert(`Depósito efetuado com sucesso. Saldo atual R$${this.savingsBalance.toFixed(2)}`)
    }
}

// Função Saque
user.makeWithDrawal()

// Função Saldo
user.getBalance()

// Função Depósito
user.makeDeposit()

// Função Saldo
user.getBalance()

