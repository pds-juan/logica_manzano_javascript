// j) Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira.

var cotacao = parseFloat(prompt('Digite o valor atual da cotação do dólar:'))
var dolar = parseFloat(prompt('Digite a quantidade de dólares a ser convertida:'))
var real = dolar * cotacao

alert('Valor da conversão: R$ '+real+'.')