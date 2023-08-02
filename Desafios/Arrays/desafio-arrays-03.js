/*

03 - Encontre uma pessoa convidada em uma lista de nomes

Escreva um algoritmo que recebe um array de nomes quaisquer e o nome da pessoa convida a ser encontrada. 

Se encontrar o nome na lista retorne:
-----------------------
"O nome está na lista."
-----------------------

Caso o contrário:
---------------------------
"O nome não está na lista."
---------------------------

*/

function findGuest(names, guest){
  // Desenvolva seu código nessa função
  const positiveAnswer = "O nome está na lista.";
  const negativeAnswer = "O nome não está na lista.";
  // return names.includes(guest) ? positiveAnswer : negativeAnswer;
  for (const name of names) {
    if (name === guest) {
      return positiveAnswer;
    }
  }
  return negativeAnswer;
}

module.exports = findGuest;
