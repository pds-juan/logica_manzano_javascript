// b) Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).

var salario_mensal = parseFloat(prompt('Digite o valor de salário mensal do trabalhador:'))
var percentual_reajuste = parseFloat(prompt('Digite o percentual de reajuste:'))
var novo_salario = salario_mensal * (percentual_reajuste/100) + salario_mensal

alert('O valor de salário reajustado é R$ '+novo_salario+'.')