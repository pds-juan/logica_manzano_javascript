// c) Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: Volume <- PI * Raio^2 * Altura

var raio = parseFloat(prompt('Digite o valor do raio da lata de óleo:'))
var altura = parseFloat(prompt('Digite o valor da altura da lata de óleo:'))
var volume = (Math.PI * (raio**2) * altura).toFixed(2)

alert('O volume da lata de óleo é ' + volume + '.')