// f. Efetuar a leitura de três valores (variáveis A, B e C) e apresentá-los dispostos em ordem crescente.

var A = parseFloat(prompt('Digite o valor de A:'))
var B = parseFloat(prompt('Digite o valor de B:'))
var C = parseFloat(prompt('Digite o valor de C:'))

if (A > B && B > C) {
    alert('Ordem crescente:\nC = '+C+'\nB = '+B+'\nA = '+A)
} else if (A > C && C > B) {
    alert('Ordem crescente:\nB = '+B+'\nC = '+C+'\nA = '+A)
} else if (B > A && A > C) {
    alert('Ordem crescente:\nC = '+C+'\nA = '+A+'\nB = '+B)
} else if (B > C && C > A) {
    alert('Ordem crescente:\nA = '+A+'\nC = '+C+'\nB = '+B)
} else if (C > A && A > B) {
    alert('Ordem crescente:\nB = '+B+'\nA = '+A+'\nC = '+C)
} else if (C > B && B > A) {
    alert('Ordem crescente:\nA = '+A+'\nB = '+B+'\nC = '+C)
} else {
    alert('Nenhum número pode ser igual a outro!')
}