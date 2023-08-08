/*

04 - Quem é a pessoa mais velha?

Dado um array de pessoas, escreva um algoritmo que identifique qual tem a maior idade e retorne o nome da pessoa e sua idade.

O array terá o seguinte formato:
people = [
  { name: 'Ramon', age: 35 },
  { name: 'José', age: 28 },
  { name: 'Amanda', age: 19 }
];

O retorno deve ser no seguinte formato:
---------------------------------
"x tem a maior idade com y anos."
---------------------------------

*/

function getOldPerson(arrPeople) {
  // arrPeople.sort((p1, p2) => p2.age - p1.age);
  // const { name, age } = arrPeople[0];
  let { age, name } = arrPeople[0];

  arrPeople.forEach((p) => {
    if (p.age > age) {
      age = p.age;
      name = p.name;
    };
  });

  return `${name} tem a maior idade com ${age} anos.`;
}

module.exports = getOldPerson;
