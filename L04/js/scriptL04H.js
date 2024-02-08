// h) Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.

var nome_comodo, largura_comodo, comprimento_comodo, area_comodo, area_casa = 0, continuar

do {
    nome_comodo = prompt('Qual é o cômodo?')
    largura_comodo = parseFloat(prompt('Digite sua largura:'))
    comprimento_comodo = parseFloat(prompt('Digite seu comprimento:'))
    area_comodo = largura_comodo * comprimento_comodo
    area_casa = area_casa + area_comodo

    alert('A área do(a) '+nome_comodo+' é '+area_comodo+' m².')
    continuar = prompt('Deseja continuar?').toLowerCase()
} while (continuar != 'não' && continuar != 'nao' && continuar != 'n');

alert('A área total da casa é '+area_casa+' m².')