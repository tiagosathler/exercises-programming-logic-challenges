/*

08 - Ordem decrescente

Escreva um algoritmo que retorne uma string com os números inteiros do intervalo de 100 a 200 em ordem decrescente.

Exemplo de saída:
-------------
x, y, z ...n.
-------------

*/

function sortDec() {
  const upperBound = 200;
  const lowerBound = 100;

  let response = "";

  for (let i = upperBound; i >= lowerBound; i--) {
    response += `${i}`;
    if (i > lowerBound) {
      response += ", ";
    } else {
      response += ".";
    }
  }

  return response;
}

module.exports = sortDec;
