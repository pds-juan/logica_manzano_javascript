// l. Elaborar um programa que efetue a leitura do nome e do sexo de uma pessoa, apresentando com saída uma das seguintes mensagens: "Ilmo Sr.", se o sexo informado como masculino, ou a mensagem "Ilma Sra.", para o sexo informado como feminino. Apresente também junto da mensagem de saudação o nome previamente informado.

var nome = prompt('Digite o seu nome:')
var sexo = prompt('Digite o sexo:').toLowerCase()

if (sexo == 'm' || sexo == 'masc' || sexo == 'masculino') {
    alert('Ilmo Sr. '+nome+'!')
} else if (sexo == 'f' || sexo == 'fem' || sexo == 'feminino') {
    alert('Ilma Sra. '+nome+'!')
} else {
    alert('Erro! Tente novamente!')
}