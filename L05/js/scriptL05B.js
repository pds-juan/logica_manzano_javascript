// b) Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

var numero = parseInt(prompt('Digite o número a ser gerada sua tabuada:'))

for (let contador = 1; contador <= 10; contador++) {
    alert(numero+' x '+contador+' = '+(numero*contador))
}