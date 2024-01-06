// f) Ler dois valores (inteiros, reais ou caracteres) para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados

var A = prompt('Digite o valor de A:'), B = prompt('Digite o valor de B:')
var troca = A, A = B, B = troca

alert('O valor de A é '+A+'.\nO valor de B é '+B+'.')