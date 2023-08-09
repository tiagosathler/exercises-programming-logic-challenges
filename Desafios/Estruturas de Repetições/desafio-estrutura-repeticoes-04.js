/*

04 - Escreva um nome N vezes

Escreva um algoritmo usando a estrutura "FOR" que irá receber um nome e a quantidade de vezes que o mesmo deve ser repetido e retorná-lo.

Por exemplo:
-------------------------------
Entradas:
"João", 5

Saída:
"João, João, João, João, João."
-------------------------------

*/

function repeatName(name, quantity) {
  let response = "";

  for (let i = 1; i <= quantity; i++) {
    if (i < quantity) {
      response += name + ", ";
    } else {
      response += name + ".";
    }
  }

  return response;
}

module.exports = repeatName;
