// d. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 7. Se o valor da média for menor que 7, solicitar a nota de exame, somar com o valor da média e obter nova média. Se a nova média for maior ou igual a 5, apresentar uma mensagem dizendo que o aluno foi aprovado em exame. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar com as mensagens o valor da média do aluno, para qualquer condição.

var nota_A = parseFloat(prompt('Digite a primeira nota do aluno:'))
var nota_B = parseFloat(prompt('Digite a segunda nota do aluno:'))
var nota_C = parseFloat(prompt('Digite a terceira nota do aluno:'))
var nota_D = parseFloat(prompt('Digite a quarta nota do aluno:'))
var media = (nota_A + nota_B + nota_C + nota_D) / 4

if (media >= 7) {
    alert('Aluno aprovado!\nMédia: '+media+'.')
} else {
    alert('Média: '+media+'.')
    var exame = parseFloat(prompt('Digite a nota do exame:'))
    media = (media + exame) / 2
    if (media >= 5) {
        alert('Aluno aprovado em exame.\nMédia: '+media+'.')
    } else {
        alert('Aluno reprovado!\nMédia: '+media+'.')
    }
}