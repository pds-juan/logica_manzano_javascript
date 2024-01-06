// e) Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula PRESTACAO  VALOR + (VALOR * TAXA/100) * TEMPO).

var valor_inicial = parseFloat(prompt('Digite o valor inicial da prestação:'))
var tempo_atraso = parseFloat(prompt('Digite o tempo de atraso:'))
var taxa_juros = parseFloat(prompt('Digite a taxa de juros:'))
var valor_final = (valor_inicial + (valor_inicial * taxa_juros / 100) * tempo_atraso).toFixed(2)

alert('O valor a ser pago pela prestação recalculada é R$ '+valor_final+'.')