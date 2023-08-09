/*

06 - Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------

*/

function oddNumbers() {
  let response = "";
  const limit = 50;

  for (let i = 1; i <= limit; i++) {
    if (i % 2) {
      response += `${i}`;

      if (i + 1 < limit) {
        response += ", ";
      } else {
        response += ".";
      }
    }
  }

  return response;
}

module.exports = oddNumbers;
