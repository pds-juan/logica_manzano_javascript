// j) Elaborar um programa que apresente os resultados da soma e da média aritmética dos valores pares situados na faixa numérica de 50 a 70.

var contador = 50, soma = 0, media = 0

while (contador <= 70) {
    if (contador % 2 == 0) {
        soma = soma + contador
        media++
    }
    contador++
}

media = soma / media
alert('A soma dos números pares entre 50 e 70 é '+soma+'.\nE sua média é '+media+'.')