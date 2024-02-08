// b) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

var numero = 1, soma = 0

do {
    if (numero % 2 == 0) {
        soma = numero + soma
    }
    numero++
} while (numero <= 500);

alert('A soma dos números pares entre 1 e 500 é '+soma+'.')