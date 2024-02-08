// f) Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE , em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

var base = parseInt(prompt('Digite o valor da base:'))
var expoente = parseInt(prompt('Digite o valor do expoente:'))
var resultado = 1, contador = 0

if (expoente == 0) {
    alert(base+' elevado a 0 é igual a '+resultado+'.')
} else {
    while (contador < expoente) {
    contador++
    resultado = resultado * base
}
alert(base+' elevado a '+contador+' é igual a '+resultado+'.')
}