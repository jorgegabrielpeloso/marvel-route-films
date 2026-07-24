import fs from 'fs';
import { marvelMovies } from './src/data/marvelChronology.js';

async function updateMovies() {
    const updated = [];
    for (const movie of marvelMovies) {
        let posterUrl = null;
        try {
            const query = encodeURIComponent(movie.title + (movie.type === 'Movie' ? ' movie' : ' tv'));
            const res = await fetch(`https://itunes.apple.com/search?term=${query}&entity=${movie.type === 'Movie' ? 'movie' : 'tvSeason'}&limit=1`);
            const data = await res.json();
            if (data.results && data.results.length > 0) {
                posterUrl = data.results[0].artworkUrl100.replace('100x100bb', '600x600bb');
            }
        } catch (e) {
            console.error("Error fetching", movie.title);
        }
        
        console.log(`Fetched poster for ${movie.title}: ${posterUrl}`);
        updated.push({
            ...movie,
            posterUrl: posterUrl || 'https://via.placeholder.com/600x900/1f2833/e23636?text=' + encodeURIComponent(movie.title)
        });
        
        // Wait 200ms to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    const fileContent = `export const marvelMovies = ${JSON.stringify(updated, null, 2)};\n\n// Helper to fill in placeholders for the rest of the quizzes so the app doesn't break\nmarvelMovies.forEach(movie => {\n  if (movie.questions.length === 0) {\n    movie.questions = [\n      { question: "¿Disfrutaste esta entrega?", options: ["¡Sí!", "Estuvo bien", "No mucho", "¡Me encantó!"], correctAnswerIndex: 0 },\n      { question: "¿Cuál fue el mejor personaje?", options: ["El héroe", "El villano", "El alivio cómico", "El mentor"], correctAnswerIndex: 0 },\n      { question: "¿Cómo estuvo la acción?", options: ["Increíble", "Buena", "Promedio", "Faltó más"], correctAnswerIndex: 0 },\n      { question: "¿Te sorprendió la escena poscréditos?", options: ["¡Muchísimo!", "Un poco", "Ya lo sabía", "No la vi"], correctAnswerIndex: 0 },\n      { question: "¿Lista para la siguiente?", options: ["¡Vamos!", "Por supuesto", "Dame un respiro", "Siempre lista"], correctAnswerIndex: 0 }\n    ];\n    movie.funFact = "¡Agrega más preguntas y datos divertidos para esta película en el archivo de datos!";\n  }\n});\n`;
    
    fs.writeFileSync('./src/data/marvelChronology.js', fileContent);
    console.log("Updated marvelChronology.js with posters!");
}

updateMovies();
