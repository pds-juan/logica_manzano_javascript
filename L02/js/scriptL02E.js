// e. Efetuar a leitura de três valores (variáveis A, B e C) e efetuar o cálculo da equação completa de segundo grau, apresentando as duas raízes, se para os valores informados for possível efetuar o referido cálculo. Lembre-se de que a variável A deve ser diferente de zero.

var A = parseFloat(prompt('Digite o valor de A:'))
var B = parseFloat(prompt('Digite o valor de B:'))
var C = parseFloat(prompt('Digite o valor de C:'))

if (A != 0 && B != 0 && C != 0) {

    var delta = (B ** 2) - (4 * A * C)

    var x1 = (-B + Math.sqrt(delta)) / (2 * A)
    var x2 = (-B - Math.sqrt(delta)) / (2 * A)

    alert('Delta = ' + delta + '.\nx1 = ' + x1 + '.\nx2 = ' + x2 + '.')

} else {
    alert('Não é possível realizar uma equação completa de segundo grau.')
}