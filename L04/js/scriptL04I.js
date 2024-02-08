// i) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.

var numero, maior = 0, menor = 999999

do {
    numero = parseInt(prompt('Digite um número inteiro:'))
    if (numero > maior) {
        maior = numero
    } else if (numero < maior) {
        menor = numero
    }
} while (numero >= 0);

alert('O maior número apresentado foi '+maior+'.\nE o menor foi '+menor+'.')