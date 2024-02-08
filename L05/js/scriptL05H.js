// h) Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE, em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

var base = parseInt(prompt('Digite o valor da base:'))
var expoente = parseInt(prompt('Digite o valor do expoente:'))
var resultado = 1

if (expoente == 0) {
    alert('O número ' + base + ' elevado a ' + expoente + ' é igual a ' + resultado + '.')
} else {
    for (let contador = 1; contador <= expoente; contador++) {
        resultado *= base
    }
    alert('O número ' + base + ' elevado a ' + expoente + ' é igual a ' + resultado + '.')
}