// d) Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.

var soma = 0

for (let contador = 1; contador <= 500; contador++) {
    if (contador % 2 == 0) {
        soma += contador
    }
}

alert('A soma dos números pares entre 1 e 500 é ' + soma + '.')