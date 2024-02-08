// j) Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.

var dividendo = parseInt(prompt('Digite o número dividendo:'))
var divisor = parseInt(prompt('Digite o número divisor:'))
var resto = dividendo, quociente = 0

do {
    resto -= divisor
    quociente++
} while (resto > 0);

if (resto < 0) {
    resto += divisor
    quociente--
}

alert('Divisor '+divisor+' cabe '+quociente+' vezes no dividendo '+dividendo+', com resto '+resto+'.')