// b. Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1.

var A = parseInt(prompt('Digite um número inteiro:'))

if (A > 0) {
    alert('O valor é ' + A + '.')
} else if (A < 0) {
    A = A * -1
    alert('O valor é ' + A + '.')
} else {
    alert('O número é 0.')
}