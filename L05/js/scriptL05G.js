// g) Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).

var base = 3, resultado = 1

alert('O número ' + base + ' elevado a 0 é igual a ' + resultado + '.')

for (let contador = 1; contador <= 15; contador++) {
    resultado *= base
    alert('O número ' + base + ' elevado a ' + contador + ' é igual a ' + resultado + '.')
}