// c. Ler quatro valores referentes a quatro notas escolares de um aluno e imprimir uma mensagem dizendo que o aluno foi aprovado, se o valor da média escolar for maior ou igual a 5. Se o aluno não foi aprovado, indicar uma mensagem informando esta condição. Apresentar junto das mensagens o valor da média do aluno para qualquer condição.

var nota_A = parseFloat(prompt('Digite a primeira nota do aluno:'))
var nota_B = parseFloat(prompt('Digite a segunda nota do aluno:'))
var nota_C = parseFloat(prompt('Digite a terceira nota do aluno:'))
var nota_D = parseFloat(prompt('Digite a quarta nota do aluno:'))
var media = (nota_A + nota_B + nota_C + nota_D) / 4

if (media >= 5) {
    alert('Aluno aprovado!\nMédia: '+media+'.')
} else {
    alert('Aluno reprovado!\nMédia: '+media+'.')
}