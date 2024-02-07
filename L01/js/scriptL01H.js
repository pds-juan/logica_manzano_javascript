// h) Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME  COMPRIMENTO * LARGURA * ALTURA.

var comprimento = parseFloat(prompt('Digite o valor do comprimento da caixa retangular:'))
var largura = parseFloat(prompt('Digite o valor da largura da caixa retangular:'))
var altura = parseFloat(prompt('Digite o valor da altura da caixa retangular:'))
var volume = (comprimento * largura * altura)

alert('O volume da caixa retangular é ' + (volume.toFixed(2)) + '.')