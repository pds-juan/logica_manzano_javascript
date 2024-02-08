// l) Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.

var numero = 1, maior = 0, menor = 999999

while (numero >= 0) {
    numero = parseInt(prompt('Digite um número:'))

    if (numero > maior) {
        maior = numero
    } else if (numero < maior) {
        menor = numero
    }
}

alert('O maior número apresentado foi '+maior+'.\nE o menor número apresentado foi '+menor+'.')