// b) Ler uma temperatura em graus Fahrenheit e apresentá-la convertida em graus Celsius. A fórmula de conversão é C  (F - 32) * (5/9) , sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.

var fahrenheit = parseFloat(prompt('Digite a temperatura em graus Fahrenheit:'))
var celsius = (fahrenheit - 32) * (5 / 9)

alert('A temperatura em Celsius é ' + celsius + '°.')