// h. Efetuar a leitura de cinco números inteiros e identificar o maior e o menor valores.

var A = parseInt(prompt('Digite um número inteiro:'))
var B = parseInt(prompt('Digite outro número inteiro:'))
var C = parseInt(prompt('Digite outro número inteiro:'))
var D = parseInt(prompt('Digite outro número inteiro:'))
var E = parseInt(prompt('Digite o último número inteiro:'))
var maior_numero = 'Números não podem ser iguais', menor_numero = 'Números não podem ser iguais'

if (A > B && A > C && A > D && A > E) {
    maior_numero = A
} else if (A < B && A < C && A < D && A < E) {
    menor_numero = A
}

if (B > A && B > C && B > D && B > E) {
    maior_numero = B
} else if (B < A && B < C && B < D && B < E) {
    menor_numero = B
}

if (C > B && C > A && C > D && C > E) {
    maior_numero = C
} else if (C < B && C < A && C < D && C < E) {
    menor_numero = C
}

if (D > B && D > C && D > A && D > E) {
    maior_numero = D
} else if (D < B && D < C && D < A && D < E) {
    menor_numero = D
}

if (E > B && E > C && E > D && E > A) {
    maior_numero = E
} else if (E < B && E < C && E < D && E < A) {
    menor_numero = E
}

alert('Maior número: '+maior_numero+'.\nMenor número: '+menor_numero+'.')