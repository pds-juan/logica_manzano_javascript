// a. Ler dois valores numéricos inteiros e apresentar o resultado da diferença do maior pelo menor valor.

var A = parseInt(prompt('Digite o primeiro valor:'))
var B = parseInt(prompt('Digite o segundo valor:'))

if (A > B) {
    alert('A diferença entre A e B é ' + (A - B) + '.')
} else if (B > A) {
    alert('A diferença entre B e A é ' + (B - A) + '.')
} else {
    alert('Os números são iguais.')
}