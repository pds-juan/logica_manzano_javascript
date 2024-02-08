// f) Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.

var numero, soma = 0, media, contador = 0

do {
    numero = parseFloat(prompt('Digite um número:'))
    soma = soma + numero
    contador++
} while (numero >= 0);

media = soma / contador
alert('Valor da soma dos números: '+soma+'.\nMédia aritmética: '+media+'.\nQuantidade de números lidos: '+contador+'.')