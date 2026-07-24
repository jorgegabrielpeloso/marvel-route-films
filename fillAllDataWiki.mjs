import fs from 'fs';
import { marvelMovies } from './src/data/marvelChronology.js';

const wikiPages = {
  1: "Capitán América: el primer vengador",
  2: "Capitana Marvel (película)",
  3: "Iron Man (película)",
  4: "The Incredible Hulk (película)",
  5: "Iron Man 2",
  6: "Thor (película)",
  7: "The Avengers (película de 2012)",
  8: "Iron Man 3",
  9: "Thor: The Dark World",
  10: "Captain America: The Winter Soldier",
  11: "Guardianes de la Galaxia (película)",
  12: "Guardianes de la Galaxia vol. 2",
  13: "I Am Groot",
  14: "Avengers: Age of Ultron",
  15: "Ant-Man (película)",
  16: "Capitán América: Civil War",
  17: "Black Widow (película)",
  18: "Black Panther (película)",
  19: "Doctor Strange (película)",
  20: "Spider-Man: Homecoming",
  21: "Ant-Man and the Wasp",
  22: "Thor: Ragnarok",
  23: "Avengers: Infinity War",
  24: "Avengers: Endgame",
  25: "WandaVision",
  26: "The Falcon and the Winter Soldier",
  27: "Spider-Man: Far From Home",
  28: "Loki (serie de televisión)",
  29: "Spider-Man: No Way Home",
  30: "Eternals",
  31: "Shang-Chi y la leyenda de los Diez Anillos",
  32: "Hawkeye (serie de televisión)",
  33: "Doctor Strange en el multiverso de la locura",
  34: "Moon Knight (serie de televisión)",
  35: "Ms. Marvel (serie de televisión)",
  36: "Thor: Love and Thunder",
  37: "Ironheart (serie de televisión)",
  38: "She-Hulk: Attorney at Law",
  39: "Werewolf by Night",
  40: "Black Panther: Wakanda Forever",
  41: "Ant-Man and the Wasp: Quantumania",
  42: "Guardianes de la Galaxia vol. 3",
  43: "Invasión secreta (serie de televisión)",
  44: "Loki (serie de televisión)",
  45: "The Marvels",
  46: "Echo (serie de televisión)",
  47: "Deadpool & Wolverine",
  48: "Agatha All Along",
  49: "Captain America: Brave New World",
  50: "Daredevil: Born Again",
  51: "Thunderbolts (película)",
  52: "The Fantastic Four: First Steps"
};

const teasers = {
  1: "El origen del primer súper soldado en la Segunda Guerra Mundial.",
  2: "Una heroína con poderes cósmicos regresa a la Tierra en los años 90.",
  3: "El inicio del multimillonario excéntrico que lo empezó todo.",
  4: "Un científico fugitivo busca la cura para su monstruosa condición.",
  5: "Tony Stark se enfrenta a las consecuencias de revelar su identidad.",
  6: "Un arrogante dios del trueno es desterrado a la Tierra sin sus poderes.",
  7: "Los héroes más poderosos de la Tierra se reúnen para salvar Nueva York.",
  8: "Tony lidia con el estrés postraumático mientras enfrenta al Mandarín.",
  9: "Thor debe enfrentarse a los Elfos Oscuros para salvar el universo.",
  10: "Steve Rogers descubre un oscuro secreto infiltrado en SHIELD.",
  11: "Un grupo de inadaptados en el espacio se unen para salvar la galaxia.",
  12: "Los Guardianes descubren el misterio del verdadero linaje de Peter Quill.",
  13: "Las divertidas aventuras de Baby Groot por la galaxia.",
  14: "Los Vengadores enfrentan a una IA diseñada para destruir a la humanidad.",
  15: "Un ladrón con un traje que encoge su tamaño debe salvar el mundo.",
  16: "Los Vengadores se dividen en dos bandos liderados por Tony y Steve.",
  17: "Natasha Romanoff confronta las partes más oscuras de su pasado.",
  18: "T'Challa regresa a Wakanda para asumir el trono y defender a su pueblo.",
  19: "Un cirujano descubre el mundo oculto de la magia y las dimensiones alternativas.",
  20: "Peter Parker intenta equilibrar su vida escolar con ser un superhéroe.",
  21: "Scott Lang y Hope van Dyne se unen para rescatar a Janet del Reino Cuántico.",
  22: "Thor debe escapar de Sakaar para salvar Asgard de la diosa Hela.",
  23: "Thanos busca recolectar las seis Gemas del Infinito. Los héroes deben detenerlo.",
  24: "Los héroes sobrevivientes buscan revertir el daño causado por Thanos.",
  25: "Wanda y Visión viven una vida suburbana perfecta... o eso parece.",
  26: "Sam y Bucky lidian con el legado del escudo del Capitán América.",
  27: "Peter viaja a Europa y debe enfrentar nuevas amenazas con Mysterio.",
  28: "Loki altera la línea temporal y es capturado por la TVA.",
  29: "El multiverso se abre y desata villanos de otras realidades.",
  30: "Una raza inmortal sale de las sombras para proteger la Tierra.",
  31: "Shang-Chi debe enfrentar el pasado que creyó dejar atrás.",
  32: "Clint Barton hace equipo con la joven arquera Kate Bishop.",
  33: "Stephen Strange viaja por el multiverso para enfrentar un nuevo peligro.",
  34: "Un empleado de museo descubre que comparte cuerpo con un mercenario.",
  35: "Kamala Khan, una joven fan de Capitana Marvel, obtiene sus propios poderes.",
  36: "Thor busca la paz interior, pero es interrumpido por Gorr el Carnicero de Dioses.",
  37: "La genial inventora Riri Williams crea la armadura más avanzada desde Iron Man.",
  38: "Jennifer Walters navega por su vida como abogada y Hulk.",
  39: "Cazadores de monstruos compiten por una poderosa reliquia.",
  40: "Wakanda llora a su rey y enfrenta la amenaza de Namor.",
  41: "La familia Ant-Man se adentra en el Reino Cuántico para enfrentar a Kang.",
  42: "Los Guardianes se embarcan en una última misión para salvar a Rocket.",
  43: "Nick Fury descubre una conspiración Skrull en la Tierra.",
  44: "Loki continúa su viaje por el multiverso y la TVA.",
  45: "Carol, Kamala y Monica entrelazan sus poderes cósmicos.",
  46: "Maya Lopez regresa a su pueblo para reconectar con sus raíces.",
  47: "Deadpool recluta a un Lobezno retirado para salvar su universo.",
  48: "Agatha Harkness busca recuperar su poder tras los eventos de Westview.",
  49: "Sam Wilson asume el manto del Capitán América en un nuevo orden mundial.",
  50: "El Diablo de Hell's Kitchen regresa a las calles.",
  51: "Un grupo de antihéroes es reunido para misiones peligrosas.",
  52: "La primera familia de Marvel entra en escena."
};

async function getPoster(pageTitle) {
    try {
        const url = `https://es.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&format=json&pithumbsize=600`;
        const res = await fetch(url, { headers: { 'User-Agent': 'MarvelApp/1.0' }});
        const data = await res.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId] && pages[pageId].thumbnail) {
            return pages[pageId].thumbnail.source;
        }
    } catch(e) {}
    
    // Try english wikipedia if spanish fails
    try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(pageTitle)}&prop=pageimages&format=json&pithumbsize=600`;
        const res = await fetch(url, { headers: { 'User-Agent': 'MarvelApp/1.0' }});
        const data = await res.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        if (pages[pageId] && pages[pageId].thumbnail) {
            return pages[pageId].thumbnail.source;
        }
    } catch(e) {}
    
    return null;
}

async function run() {
    const updated = [];
    for (const movie of marvelMovies) {
        let posterUrl = movie.posterUrl;
        
        // Fetch from wiki
        const pageTitle = wikiPages[movie.id];
        if (pageTitle) {
            const wikiImage = await getPoster(pageTitle);
            if (wikiImage) {
                posterUrl = wikiImage;
                console.log("Got image for", movie.title);
            } else {
                console.log("No image for", movie.title);
                posterUrl = `https://placehold.co/600x900/1f2833/e23636.png?text=${encodeURIComponent(movie.title)}`;
            }
        }
        
        updated.push({
            ...movie,
            teaser: teasers[movie.id] || movie.teaser,
            posterUrl: posterUrl
        });
        
        await new Promise(r => setTimeout(r, 200));
    }
    
    fs.writeFileSync('./src/data/marvelChronology.js', 'export const marvelMovies = ' + JSON.stringify(updated, null, 2) + ';\n');
    console.log("DONE");
}

run();
