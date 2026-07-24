import fs from 'fs';
import { marvelMovies } from './src/data/marvelChronology.js';

// Manually fix teasers and images for the first 10 movies
const fixes = {
  1: {
    teaser: "El origen del primer súper soldado de la historia en la Segunda Guerra Mundial.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Captain_America_The_First_Avenger_logo.svg/500px-Captain_America_The_First_Avenger_logo.svg.png"
  },
  2: {
    teaser: "Una heroína con poderes cósmicos regresa a la Tierra en los años 90.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Captain_Marvel_The_Infinity_Saga_logo.svg/500px-Captain_Marvel_The_Infinity_Saga_logo.svg.png"
  },
  3: {
    teaser: "El inicio del multimillonario excéntrico que lo empezó todo.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Iron_Man_-_2008_movie_logo.svg/500px-Iron_Man_-_2008_movie_logo.svg.png"
  },
  4: {
    teaser: "Un científico fugitivo busca la cura para su monstruosa condición.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/The_Incredible_Hulk_The_Infinity_Saga_logo.svg/500px-The_Incredible_Hulk_The_Infinity_Saga_logo.svg.png"
  },
  5: {
    teaser: "Tony Stark se enfrenta a las consecuencias de revelar su identidad al mundo.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Iron_Man_2_The_Infinity_Saga_logo.svg/500px-Iron_Man_2_The_Infinity_Saga_logo.svg.png"
  },
  6: {
    teaser: "Un arrogante dios del trueno es desterrado a la Tierra sin sus poderes.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Thor_The_Infinity_Saga_logo.svg/500px-Thor_The_Infinity_Saga_logo.svg.png"
  },
  7: {
    teaser: "Los héroes más poderosos de la Tierra se reúnen para salvar Nueva York.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/The_Avengers_The_Infinity_Saga_logo.svg/500px-The_Avengers_The_Infinity_Saga_logo.svg.png"
  },
  8: {
    teaser: "Tony Stark lidia con el estrés postraumático mientras enfrenta a una nueva amenaza.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Iron_Man_3_The_Infinity_Saga_logo.svg/500px-Iron_Man_3_The_Infinity_Saga_logo.svg.png"
  },
  9: {
    teaser: "Thor debe enfrentarse a los Elfos Oscuros para salvar a Jane y al universo.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Thor_The_Dark_World_The_Infinity_Saga_logo.svg/500px-Thor_The_Dark_World_The_Infinity_Saga_logo.svg.png"
  },
  10: {
    teaser: "Steve Rogers descubre un oscuro secreto infiltrado en el corazón de SHIELD.",
    posterUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Captain_America_The_Winter_Soldier_The_Infinity_Saga_logo.svg/500px-Captain_America_The_Winter_Soldier_The_Infinity_Saga_logo.svg.png"
  }
};

marvelMovies.forEach(movie => {
  if (fixes[movie.id]) {
    movie.teaser = fixes[movie.id].teaser;
    movie.posterUrl = fixes[movie.id].posterUrl;
  } else {
    // Make sure we have a generic teaser for the rest to avoid mismatch embarrassment
    movie.teaser = `¡Siguiente misión: ${movie.title}!`;
    // For posters without an explicit URL, we can use a cool red gradient fallback
    movie.posterUrl = `https://placehold.co/600x900/1f2833/e23636.png?text=${encodeURIComponent(movie.title)}`;
  }
});

const fileContent = `export const marvelMovies = ${JSON.stringify(marvelMovies, null, 2)};`;

fs.writeFileSync('./src/data/marvelChronology.js', fileContent);
console.log("Fixed teasers and added correct images.");
