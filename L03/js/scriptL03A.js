// a) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

var numero = parseInt(prompt('Digite um número a ser gerada sua tabuada:'))
var contador = 1, resultado = 0

while (contador <= 10) {
    resultado = numero * contador
    alert(numero+' x '+contador+' = '+resultado)
    contador++
}