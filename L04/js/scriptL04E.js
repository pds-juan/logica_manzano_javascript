// e) Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.

var numero, fatorial, soma_fatorial = 0, contador = 1

do {
    numero = parseInt(prompt('Digite um número a ser calculado o fatorial:'))
    fatorial = numero -1

    do {
        numero = numero * fatorial
        fatorial--
    } while (fatorial > 0);

    soma_fatorial = soma_fatorial + numero
    contador++
} while (contador <= 15);

alert('A soma do fatorial dos 15 números é '+soma_fatorial+'.')