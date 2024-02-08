// c) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

var contador = 1, soma = 0

while (contador <= 500) {
    if (contador % 2 == 0) {
        soma = soma + contador
    }
    contador++
}

alert('A soma dos números pares entre 1 e 500 é ' + soma + '.')