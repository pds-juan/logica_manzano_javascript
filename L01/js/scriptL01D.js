// d) Efetuar o cálculo da quantidade de litros de combustível gasta em uma viagem, utilizando um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deve fornecer o tempo gasto (TEMPO) e a velocidade média (VELOCIDADE) durante a viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTANCIA  TEMPO * VELOCIDADE. Possuindo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula LITROS_USADOS  DISTANCIA / 12. Ao final, o programa deve apresentar os valores da velocidade média (VELOCIDADE), tempo gasto na viagem (TEMPO), a distancia percorrida (DISTANCIA) e a quantidade de litros (LITROS_USADOS) utilizada na viagem.

var tempo_gasto = parseInt(prompt('Digite o tempo gasto na viagem: (em horas)'))
var velocidade_media = parseInt(prompt('Digite a velocidade média durante a viagem: (em km/h)'))
var distancia_percorrida = tempo_gasto * velocidade_media
var litros_usados = distancia_percorrida / 12

alert('Velocidade média: '+velocidade_media+' km/h.\nTempo de viagem: '+tempo_gasto+' horas.\nDistância percorrida: '+distancia_percorrida+' km.\nCombustível gasto: '+litros_usados+' litros.')