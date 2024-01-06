// m) Elaborar um programa que efetue a leitura de três valores (A,B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.

var A = parseFloat(prompt('Digite o valor de A:'))
var B = parseFloat(prompt('Digite o valor de B:'))
var C = parseFloat(prompt('Digite o valor de C:'))
var quadrado_soma = ((A+B+C)**2)

alert('O quadrado da soma dos três valores é '+quadrado_soma+'.')