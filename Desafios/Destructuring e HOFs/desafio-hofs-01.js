const data = require('./data');

/** 1 - Retorne e exiba um array com as informações da primeira e da segunda banda utilizando destructuring
*/
const getBandsInformation = () => {
  const { bands } = data;
  return [bands[0], bands[1]]
}

module.exports = getBandsInformation;
