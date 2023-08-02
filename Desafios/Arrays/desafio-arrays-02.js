/*

02 - Encontre o menor número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o menor valor e o retorne.

*/

function getMinNumber(numbers) {
  // Desenvolva seu código nessa função
  // return Math.min(...numbers)
  let min = Number.POSITIVE_INFINITY;
  for (const number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
}

module.exports = getMinNumber;
