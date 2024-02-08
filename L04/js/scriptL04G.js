// g) Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.

var fatorial, numero, contador = 1

do {

    if (contador % 2 != 0) {
        numero = contador

        if (numero != 1) {
            fatorial = numero - 1
        } else {
            fatorial = numero
        }

        do {
            numero = numero * fatorial
            fatorial--
        } while (fatorial > 0);

        alert('O fatorial do número ' + contador + ' é igual a ' + numero + '.')
    }

    contador++
} while (contador <= 10);