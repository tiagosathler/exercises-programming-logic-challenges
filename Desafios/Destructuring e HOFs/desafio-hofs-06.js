const data = require("./data");

// 6 - Filtre e retorne um array com todos os álbuns que possuem nota igual a 100

const highestRatingFilter = () => {
  return data.bands.flatMap(({ bestAlbuns }) =>
    bestAlbuns.flatMap((album) => (album.rate == 100 ? album : []))
  );
  // return data.bands
  // .reduce((acc, { bestAlbuns }) => {
  //   const album = bestAlbuns
  //     .filter(({ rate }) => rate === 100);
  //   return [...acc, ...album];
  // }, []);
};

module.exports = highestRatingFilter;
