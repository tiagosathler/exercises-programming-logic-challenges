/*

07 - Onde está o elemento?

Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.

Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------

*/

function findIndexOf(array, element) {
  let position;

  for (index in array) {
    if (array[index] === element) {
      position = index;
      break;
    }
  }

  return position ? Number(position) : "Elemento Não encontrado no array.";
}

module.exports = findIndexOf;
