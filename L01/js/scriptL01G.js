// g) Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída.

var A = parseInt(prompt('Digite o valor de A:'))
var B = parseInt(prompt('Digite o valor de B:'))
var C = parseInt(prompt('Digite o valor de C:'))
var D = parseInt(prompt('Digite o valor de D:'))

alert('A soma de AB é '+(A+B)+'. E sua multiplicação é '+(A*B)+'.\nA soma de AC é '+(A+C)+'. E sua multiplicação é '+(A*C)+'.\nA soma de AD é '+(A+D)+'. E sua multiplicação é '+(A*D)+'.\nA soma de BC é '+(B+C)+'. E sua multiplicação é '+(B*C)+'.\nA soma de BD é '+(B+D)+'. E sua multiplicação é '+(B*D)+'.\nA soma de CD é '+(C+D)+'. E sua multiplicação é '+(C*D)+'.')