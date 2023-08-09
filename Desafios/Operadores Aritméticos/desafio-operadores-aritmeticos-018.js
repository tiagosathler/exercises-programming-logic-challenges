/*

18 - Simulação de dado RPG

Escreva um algoritmo que faça a simulação de um dado de RPG que vai receber como parâmetro o número de lados do dado.

Exemplo: um D-6 vai sortear um número entre 1 e 6.

*/

function rollDice(diceSide) {
  return Math.floor(1 + Math.random() * diceSide);
}

module.exports = rollDice;
