import fs from 'fs';
import path from 'path';
import { marvelMovies } from './src/data/marvelChronology.js';

const sourceDir = './posters';
const targetDir = './public/posters';

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

// Map filenames manually to IDs based on the chronological order
const fileMapping = {
    1: "Capitán América El primer vengador.jpg",
    2: "capitana marvel.webp",
    3: "iron man 2008.webp",
    4: "el increible hulk 2008.jpg",
    5: "iron man 2 2010.webp",
    6: "thor 2011.webp",
    7: "los vengadores 2012.webp",
    8: "iron man 2003.webp", // Assuming this is Iron Man 3
    9: "thor el mundo oscuro.jpg",
    10: "capitan america el soldado del invierno.webp",
    11: "guardianes de la galaxy 1.webp",
    12: "guardianes de la galaxy 2.webp",
    13: "yo soy groot.webp",
    14: "vengadores la era de ultron.webp",
    15: "ant man 1.webp",
    16: "Captain_America_Civil_War_-_Poster_definitivo.webp",
    17: "viuda negra pelicula.jpg",
    18: "black panther 1.jpeg",
    19: "DoctorStrange2016.webp",
    20: "spiderman homecoming.jpg",
    21: "ant man y la avispa.webp",
    22: "thor ragnarok.jpg",
    23: "vengadores infinity war.jpg",
    24: "vengadores end game.jpg"
};

const updatedMovies = marvelMovies.map(movie => {
    const filename = fileMapping[movie.id];
    let posterUrl = movie.posterUrl; // Keep default if no local file

    if (filename) {
        const ext = path.extname(filename);
        const newFilename = `${movie.id}${ext}`;
        const sourcePath = path.join(sourceDir, filename);
        const targetPath = path.join(targetDir, newFilename);

        if (fs.existsSync(sourcePath)) {
            fs.copyFileSync(sourcePath, targetPath);
            posterUrl = `/posters/${newFilename}`;
            console.log(`Moved and mapped ${filename} -> ${newFilename}`);
        } else {
            console.log(`File not found: ${sourcePath}`);
        }
    }

    return {
        ...movie,
        posterUrl
    };
});

fs.writeFileSync('./src/data/marvelChronology.js', 'export const marvelMovies = ' + JSON.stringify(updatedMovies, null, 2) + ';\n');
console.log("Database updated successfully.");
