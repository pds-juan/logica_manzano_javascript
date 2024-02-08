// k) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.

for (let contador = 1; contador <= 10; contador++) {

    if (contador % 2 != 0) {
        numero = contador

        for (let fatorial = contador -1; fatorial > 0; fatorial--) {
            numero *= fatorial
        }

        alert('O fatorial de ' + contador + ' é ' + numero + '.')
    }
}