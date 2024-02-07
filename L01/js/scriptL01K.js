// k) Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.

var cotacao = parseFloat(prompt('Digite o valor atual da cotação do dólar:'))
var real = parseFloat(prompt('Digite a quantidade de reais a ser convertida:'))
var dolar = real / cotacao

alert('Valor da conversão: US$ '+dolar+'.')