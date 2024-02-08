// b) Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).

var contador = 1, soma = 0

while (contador <= 100) {
    soma = soma + contador
    contador++
}

alert('A soma dos números inteiros entre 1 e 100 é '+soma+'.')