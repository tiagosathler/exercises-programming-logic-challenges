/*

01 - Mensagem codificada 

Escreva um algoritmo que recebe uma string e retorne outra string com o index dos respectivos caracteres multiplicado por 3.

Exemplo:
---------
Entrada:
"Trybe"

Saída:
"036912".
---------

*/

function encode(string) {
  const array = Array.from(string);
  for (const index in array) {
    array[index] = index * 3;
  }
  return array.join("");
}

module.exports = encode;
