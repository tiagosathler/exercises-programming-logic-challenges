/*

16 - Verdadeiro ou falso?

Escreva um algoritmo que retorne de forma aleatória true ou false.

Obs: O retorne deve ser do tipo boolean.

*/

function randomBoolean() {
  const number = Math.floor(Math.random() * 2);
  return number === 1;
}

module.exports = randomBoolean;
