const data = require("./data");

/* 2 - Através do destructuring, acesse o nome e os melhores álbuns primeira banda, 
retornando uma string no seguinte formato: "os melhores álbuns do Radiohead: In Rainbows,Kid A,OK Computer,Pablo Honey"
*/

const getBestAlbuns = () => {
  const response = "Os melhores álbuns do Radiohead: ";
  const bestAlbuns = data.bands
    .find(({ bandName }) => bandName === 'Radiohead')
    .bestAlbuns
    .map(({ name }) => name)
    .join(",");
  return response + bestAlbuns;
};

module.exports = getBestAlbuns;
