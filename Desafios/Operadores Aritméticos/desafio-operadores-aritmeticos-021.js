/*

21 - Média ponderada

Escreva um algoritmo que recebe 3 notas com valores de 0 a 10 e calcule a media ponderada com pesos 3, 3 e 4 respectivamente.

Considere a seguintes premissas:
* “Aprovação” caso a média seja igual ou superior a 6;
* “Reprovação” caso a média das notas seja inferior a 6.

Retorne uma mensagem no seguinte formato:
---------------------------------------------------
'Aprovação, média: 7.7' ou 'Reprovação, média: 5.9'
---------------------------------------------------

*/

function weightedAverage(score1, score2, score3) {
  let average = (score1 * 3 + score2 * 3 + score3 * 4) / 10;
  average = Number(average.toFixed(1))
  const result = average >= 6 ? "Aprovação" : "Reprovação";
  return result + `, média: ${average}`;
}

module.exports = weightedAverage;
