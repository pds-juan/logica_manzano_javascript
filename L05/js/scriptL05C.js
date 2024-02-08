// c) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

var soma = 0

for (let contador = 1; contador <= 100; contador++) {
    soma += contador
}

alert('A soma dos números inteiros entre 1 e 100 é ' + soma + '.')