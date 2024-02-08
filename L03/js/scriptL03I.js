// i) Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.

var contador = 0, numero, soma = 0, media

while (contador < 10) {
    numero = parseFloat(prompt('Digite um número:'))
    soma = soma + numero
    contador++
}

media = soma / contador
alert('A soma dos números apresentados é '+soma+'.\nE sua média é '+media+'.')