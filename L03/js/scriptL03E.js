// e) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

var tres = 3, resultado = 1, expoente = 15, contador = 1

alert(tres+' elevado a 0 é igual a '+resultado+'.')

while (contador <= expoente) {
    resultado = resultado * tres
    alert(tres+' elevado a '+contador+' é igual a '+resultado+'.')
    contador++
}