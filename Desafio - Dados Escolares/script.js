// Desafio - Dados Escolares
const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
  };

// Função Curso
function funcoes(obj) {
    function chamaPrompt() {
        let responseFuncoes = Number(prompt('1: Curso, 2: Matéria, 3: Situação de Matrícula, 4: Gerar Carteira. Qual função deseja acessar?'))
        return responseFuncoes
    }
    function getTheCurse(obj) {
        alert(obj.curso)
    }
    function getTheSubjects(obj) {
        let auxString = ''
        let i = 0
        while (i < obj.materias.length - 1) {
            auxString += obj.materias[i] + ', '
            i++
            }
        auxString += obj.materias[obj.materias.length - 1] + '.'  
        alert(auxString)
    }    
    function  registrationStatus(obj) {
        alert(obj.situacaoMatricula ? 'Ativo' : 'Inativo')
    }
    function generateStudentCard(obj) {
        let studentCard = ''
        studentCard += `nome: "${obj.nome}", `
        studentCard += `idade: "${obj.idade}", `
        studentCard += `curso: "${obj.curso}", `
        studentCard += `instituição: "${obj.instituicao}"`
        alert(studentCard)
    }

    let res = chamaPrompt()
    while (res < 1 || res > 4) {
        alert('Valor Inválido')
        res = chamaPrompt()
    }
    if (res === 1) {
        getTheCurse(obj)
    } else if (res === 2) {
        getTheSubjects(obj)
    } else if (res === 3) {
        registrationStatus(obj)
    } else {
        generateStudentCard(obj)
    }
}
funcoes(alunoCurso)
