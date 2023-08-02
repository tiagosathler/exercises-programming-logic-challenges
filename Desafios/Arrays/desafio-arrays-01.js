/*

01 - Encontre o maior número de um array

Escreva um algoritmo que recebe um array de números inteiros, procure o maior valor e o retorne.

*/

function getMaxNumber(numbers) {
  // Desenvolva seu código nessa função
  // return Math.max(...numbers)
  let max = Number.NEGATIVE_INFINITY;
  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}

module.exports = getMaxNumber;
