// Desafio - Gestão de Perguntas
let slenzie = {
    nameEvent: '',
    questions: [],
}
let question = {
    user: '',
    usarQuestion: '',
    vote: 0,
}

function createEvent(slenzie, string) {
    slenzie.nameEvent = string
    if (typeof string !== 'string') {
        return 'The input is invalid'
    } else {
        return 'Slenzie atualizado'
    }
}
console.log('Criando Evento')
console.log(createEvent(slenzie, 'OpenPerguntas'))

function addQuestion(slenzie, question) {
    question = {
        user: 'Bruno',
        userQuestion: 'Sera que vai funcionar?',
    }
    if (question.user === '' || question.user === undefined || question.user === null) {
        return "The user can't be empty"
    } else if (question.userQuestion === '' || question.userQuestion === undefined || question.userQuestion === null) {
        return "The question can't be null"
    } else {
        slenzie.questions.push(question)
        return slenzie.questions
    }
}
console.log('Adicionando Pergunta')
console.log(addQuestion(slenzie, question))
console.log(addQuestion(slenzie, question))
console.log(addQuestion(slenzie, question))

function addVoteToQuestion (n, slenzie) {    
    if (n < 0 || n >= slenzie.questions.length) {
        return "Question not found."
    } else if (n % 1 !== 0) {
        return "The value is not allowed"
    } else {
        slenzie.questions[n].vote = 10
        console.log(slenzie.questions)
        return "Vote registered successfully"
    }
}
console.log('Adicionando Vote a Question dentro de Questions')
console.log(addVoteToQuestion(1, slenzie))

function questionAnswered(n, slenzie) {
    if (n < 0 || n >= slenzie.questions.length) {
        return "Question not found."
    } else if (n % 1 !== 0) {
        return "The value is not allowed"
    } else {
        slenzie.questions[n].answered = true
        return slenzie.questions
    }
}
console.log('Adicionando Propriedado Answered')
console.log(questionAnswered(1, slenzie))

function unansweredQuestions(slenzie) {
    let output = []
    for (let i = 0; i < slenzie.questions.length; i++) {
        if (slenzie.questions[i].answered !== true) {
            output.push(slenzie.questions[i])
        }
    }
    return output
}
console.log('Mostrando Questions sem propriedade answered')
console.log(unansweredQuestions(slenzie))
