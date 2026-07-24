import fs from 'fs';

// Helper snippet to get marvelMovies array string content
const fileData = fs.readFileSync('./src/data/marvelChronology.js', 'utf8');

// I'll dynamically import the array
import { marvelMovies } from './src/data/marvelChronology.js';

const details = {
  "Capitán América: El primer vengador": {
    teaser: "El origen del primer súper soldado en la Segunda Guerra Mundial.",
    query: "Captain America The First Avenger", type: "movie"
  },
  "Capitana Marvel": {
    teaser: "Una heroína con poderes cósmicos regresa a la Tierra en los años 90.",
    query: "Captain Marvel", type: "movie"
  },
  "Iron Man": {
    teaser: "El inicio del multimillonario excéntrico que lo empezó todo.",
    query: "Iron Man", type: "movie"
  },
  "El increíble Hulk": {
    teaser: "Un científico fugitivo busca la cura para su monstruosa condición.",
    query: "The Incredible Hulk", type: "movie"
  },
  "Iron Man 2": {
    teaser: "Tony Stark se enfrenta a las consecuencias de revelar su identidad.",
    query: "Iron Man 2", type: "movie"
  },
  "Thor": {
    teaser: "Un arrogante dios del trueno es desterrado a la Tierra sin sus poderes.",
    query: "Thor", type: "movie"
  },
  "Los Vengadores": {
    teaser: "Los héroes más poderosos de la Tierra se reúnen para salvar Nueva York.",
    query: "The Avengers", type: "movie"
  },
  "Iron Man 3": {
    teaser: "Tony lidia con el estrés postraumático mientras enfrenta al Mandarín.",
    query: "Iron Man 3", type: "movie"
  },
  "Thor: El mundo oscuro": {
    teaser: "Thor debe enfrentarse a los Elfos Oscuros para salvar el universo.",
    query: "Thor The Dark World", type: "movie"
  },
  "Capitán América: El soldado de invierno": {
    teaser: "Steve Rogers descubre un oscuro secreto infiltrado en SHIELD.",
    query: "Captain America The Winter Soldier", type: "movie"
  },
  "Guardianes de la Galaxia": {
    teaser: "Un grupo de inadaptados en el espacio se unen para salvar la galaxia.",
    query: "Guardians of the Galaxy", type: "movie"
  },
  "Guardianes de la Galaxia Vol. 2": {
    teaser: "Los Guardianes descubren el misterio del verdadero linaje de Peter Quill.",
    query: "Guardians of the Galaxy Vol 2", type: "movie"
  },
  "Serie en Disney+: Yo Soy Groot": {
    teaser: "Las divertidas aventuras de Baby Groot por la galaxia.",
    query: "I Am Groot", type: "tvSeason"
  },
  "Vengadores: La era de Ultrón": {
    teaser: "Los Vengadores enfrentan a una IA diseñada para destruir a la humanidad.",
    query: "Avengers Age of Ultron", type: "movie"
  },
  "Ant-Man": {
    teaser: "Un ladrón con un traje que encoge su tamaño debe salvar el mundo.",
    query: "Ant-Man", type: "movie"
  },
  "Capitán América: Civil War": {
    teaser: "Los Vengadores se dividen en dos bandos liderados por Tony y Steve.",
    query: "Captain America Civil War", type: "movie"
  },
  "Viuda Negra": {
    teaser: "Natasha Romanoff confronta las partes más oscuras de su pasado.",
    query: "Black Widow", type: "movie"
  },
  "Black Panther": {
    teaser: "T'Challa regresa a Wakanda para asumir el trono y defender a su pueblo.",
    query: "Black Panther", type: "movie"
  },
  "Doctor Strange": {
    teaser: "Un cirujano descubre el mundo oculto de la magia y las dimensiones alternativas.",
    query: "Doctor Strange", type: "movie"
  },
  "Spider-Man: Homecoming": {
    teaser: "Peter Parker intenta equilibrar su vida escolar con ser un superhéroe.",
    query: "Spider-Man Homecoming", type: "movie"
  },
  "Ant-Man y la Avispa": {
    teaser: "Scott Lang y Hope van Dyne se unen para rescatar a Janet del Reino Cuántico.",
    query: "Ant-Man and the Wasp", type: "movie"
  },
  "Thor: Ragnarok": {
    teaser: "Thor debe escapar de Sakaar para salvar Asgard de la diosa Hela.",
    query: "Thor Ragnarok", type: "movie"
  },
  "Vengadores: Infinity War": {
    teaser: "Thanos busca recolectar las seis Gemas del Infinito. Los héroes deben detenerlo.",
    query: "Avengers Infinity War", type: "movie"
  },
  "Vengadores: Endgame": {
    teaser: "Los héroes sobrevivientes buscan revertir el daño causado por Thanos.",
    query: "Avengers Endgame", type: "movie"
  },
  "Serie en Disney+: Bruja Escarlata y Vision": {
    teaser: "Wanda y Visión viven una vida suburbana perfecta... o eso parece.",
    query: "WandaVision", type: "tvSeason"
  },
  "Serie en Disney+: Falcon y el soldado de invierno": {
    teaser: "Sam y Bucky lidian con el legado del escudo del Capitán América.",
    query: "The Falcon and the Winter Soldier", type: "tvSeason"
  },
  "Spider-Man: Far from Home": {
    teaser: "Peter viaja a Europa y debe enfrentar nuevas amenazas con Mysterio.",
    query: "Spider-Man Far From Home", type: "movie"
  },
  "Serie en Disney+: Loki": {
    teaser: "Loki altera la línea temporal y es capturado por la TVA.",
    query: "Loki", type: "tvSeason"
  },
  "Spider-Man: No Way Home": {
    teaser: "El multiverso se abre y desata villanos de otras realidades.",
    query: "Spider-Man No Way Home", type: "movie"
  },
  "Eternals": {
    teaser: "Una raza inmortal sale de las sombras para proteger la Tierra.",
    query: "Eternals", type: "movie"
  },
  "Shang-Chi y la Leyenda de los Diez Anillos": {
    teaser: "Shang-Chi debe enfrentar el pasado que creyó dejar atrás.",
    query: "Shang-Chi", type: "movie"
  },
  "Serie en Disney+: Ojo de Halcón": {
    teaser: "Clint Barton hace equipo con la joven arquera Kate Bishop.",
    query: "Hawkeye", type: "tvSeason"
  },
  "Doctor Strange en el multiverso de la locura": {
    teaser: "Stephen Strange viaja por el multiverso para enfrentar un nuevo peligro.",
    query: "Doctor Strange in the Multiverse of Madness", type: "movie"
  },
  "Serie en Disney+: Caballero Luna": {
    teaser: "Un empleado de museo descubre que comparte cuerpo con un mercenario.",
    query: "Moon Knight", type: "tvSeason"
  },
  "Serie en Disney+: Ms. Marvel": {
    teaser: "Kamala Khan, una joven fan de Capitana Marvel, obtiene sus propios poderes.",
    query: "Ms Marvel", type: "tvSeason"
  },
  "Thor: Love and Thunder": {
    teaser: "Thor busca la paz interior, pero es interrumpido por Gorr el Carnicero de Dioses.",
    query: "Thor Love and Thunder", type: "movie"
  },
  "Serie en Disney+: Ironheart": {
    teaser: "La genial inventora Riri Williams crea la armadura más avanzada desde Iron Man.",
    query: "Ironheart", type: "tvSeason"
  },
  "Serie en Disney+: She-Hulk": {
    teaser: "Jennifer Walters navega por su vida como abogada y Hulk.",
    query: "She-Hulk", type: "tvSeason"
  },
  "Especial: Werewolf by Night": {
    teaser: "Cazadores de monstruos compiten por una poderosa reliquia.",
    query: "Werewolf by Night", type: "movie"
  },
  "Black Panther: Wakanda Forever": {
    teaser: "Wakanda llora a su rey y enfrenta la amenaza de Namor.",
    query: "Black Panther Wakanda Forever", type: "movie"
  },
  "Ant-Man y la Avispa: Quantumania": {
    teaser: "La familia Ant-Man se adentra en el Reino Cuántico para enfrentar a Kang.",
    query: "Ant-Man and the Wasp Quantumania", type: "movie"
  },
  "Guardianes de la Galaxia Vol 3.": {
    teaser: "Los Guardianes se embarcan en una última misión para salvar a Rocket.",
    query: "Guardians of the Galaxy Vol 3", type: "movie"
  },
  "Serie en Disney+: Invasión Secreta": {
    teaser: "Nick Fury descubre una conspiración Skrull en la Tierra.",
    query: "Secret Invasion", type: "tvSeason"
  },
  "Serie en Disney+: Loki 2": {
    teaser: "Loki continúa su viaje por el multiverso y la TVA.",
    query: "Loki", type: "tvSeason"
  },
  "The Marvels": {
    teaser: "Carol, Kamala y Monica entrelazan sus poderes cósmicos.",
    query: "The Marvels", type: "movie"
  },
  "Serie en Disney+: ECHO": {
    teaser: "Maya Lopez regresa a su pueblo para reconectar con sus raíces.",
    query: "Echo", type: "tvSeason"
  },
  "Deadpool y Lobezno": {
    teaser: "Deadpool recluta a un Lobezno retirado para salvar su universo.",
    query: "Deadpool and Wolverine", type: "movie"
  },
  "Serie en Disney+: Agatha, ¿quién si no?": {
    teaser: "Agatha Harkness busca recuperar su poder tras los eventos de Westview.",
    query: "Agatha All Along", type: "tvSeason"
  },
  "Capitán América: Brave New World": {
    teaser: "Sam Wilson asume el manto del Capitán América en un nuevo orden mundial.",
    query: "Captain America Brave New World", type: "movie"
  },
  "Serie en Disney+: Daredevil: Born Again": {
    teaser: "El Diablo de Hell's Kitchen regresa a las calles.",
    query: "Daredevil", type: "tvSeason"
  },
  "Thunderbolts": {
    teaser: "Un grupo de antihéroes es reunido para misiones peligrosas.",
    query: "Thunderbolts", type: "movie"
  },
  "Los 4 Fantásticos: Primeros pasos": {
    teaser: "La primera familia de Marvel entra en escena.",
    query: "Fantastic Four First Steps", type: "movie"
  }
};

async function run() {
    const updated = [];
    for (const movie of marvelMovies) {
        let posterUrl = movie.posterUrl;
        let teaser = movie.teaser;
        
        const d = details[movie.title];
        if (d) {
            teaser = d.teaser;
            // Solo buscar imagen si no tiene una ya puesta en la tanda anterior (las de wikipedia)
            if (!posterUrl || posterUrl.includes('placeholder') || posterUrl.includes('placehold.co')) {
                try {
                    const query = encodeURIComponent(d.query);
                    const type = d.type;
                    const url = `https://itunes.apple.com/search?term=${query}&entity=${type}&limit=1`;
                    const res = await fetch(url);
                    const data = await res.json();
                    
                    if (data.results && data.results.length > 0) {
                        posterUrl = data.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
                        console.log("Got iTunes poster for", movie.title);
                    } else {
                        // Fallback OMDB/Placeholder
                        posterUrl = `https://placehold.co/600x900/1f2833/e23636.png?text=${encodeURIComponent(movie.title)}`;
                        console.log("Not found in iTunes for", movie.title);
                    }
                } catch(e) {
                    console.log("Error fetching", movie.title);
                }
            } else {
                console.log("Already has poster:", movie.title);
            }
        }
        
        updated.push({
            ...movie,
            teaser,
            posterUrl
        });
        
        await new Promise(r => setTimeout(r, 100)); // anti-rate-limit
    }
    
    fs.writeFileSync('./src/data/marvelChronology.js', 'export const marvelMovies = ' + JSON.stringify(updated, null, 2) + ';');
    console.log("DONE!");
}

run();
