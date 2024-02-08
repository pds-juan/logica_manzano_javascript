// g. Efetuar a leitura de quatro números inteiros e apresentar os números que são divisíveis por 2 e 3.

var A = parseInt(prompt('Digite um número inteiro:'))
var B = parseInt(prompt('Digite outro número inteiro:'))
var C = parseInt(prompt('Digite outro número inteiro:'))
var D = parseInt(prompt('Digite o último número inteiro:'))

if (A % 2 == 0 && A % 3 == 0) {
    alert('O primeiro número: '+A+' é divisível por 2 e 3.')
}

if (B % 2 == 0 && B % 3 == 0) {
    alert('O segundo número: '+B+' é divisível por 2 e 3.')
}

if (C % 2 == 0 && C % 3 == 0) {
    alert('O terceiro número: '+C+' é divisível por 2 e 3.')
}

if (D % 2 == 0 && D % 3 == 0) {
    alert('O quarto número: '+D+' é divisível por 2 e 3.')
}