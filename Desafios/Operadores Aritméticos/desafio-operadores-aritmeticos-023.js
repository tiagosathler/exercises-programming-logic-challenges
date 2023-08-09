/*

23 - Divisões sucessivas

Escreva um algoritmo que leia um número e divida-o por dois sucessivamente até que o seu resultado seja menor que 1.

Retorne a quantidade de vezes que o número foi dividido no formato:
--------------------------
'Quantidade total de divisões: n'
--------------------------

*/

function successiveDivisions(number) {
  let division = number;
  let count = 0;
  while (division >= 1) {
    division /= 2;
    count++;
  }
  return `Quantidade total de divisões: ${count}`;
}

module.exports = successiveDivisions;
