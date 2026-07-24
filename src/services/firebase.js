import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, query, orderBy, limit, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTHvbut1QscCBTJztbAiGZYRAFfxKs-Eg",
  authDomain: "mcu-tracker-8c2b1.firebaseapp.com",
  projectId: "mcu-tracker-8c2b1",
  storageBucket: "mcu-tracker-8c2b1.firebasestorage.app",
  messagingSenderId: "161812567636",
  appId: "1:161812567636:web:7f3a58d2dcf9e60537bfc1",
  measurementId: "G-YZ6C9TFFD2"
};

// Inicializar Firebase solo si hay un apiKey válido
let app, db;

try {
    if (firebaseConfig.apiKey !== "TU_API_KEY") {
        app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        console.log("Firebase inicializado correctamente");
    } else {
        console.warn("Firebase no está configurado. Usando modo local.");
    }
} catch (error) {
    console.error("Error al inicializar Firebase", error);
}

// Función para guardar el progreso de un usuario
export const saveUserProgress = async (userName, score, completedMoviesCount, badgesCount) => {
    if (!db) return false;
    
    try {
        const userRef = doc(db, "users", userName);
        await setDoc(userRef, {
            name: userName,
            score: score,
            moviesWatched: completedMoviesCount,
            badges: badgesCount,
            lastUpdated: new Date()
        }, { merge: true });
        return true;
    } catch (error) {
        console.error("Error guardando progreso en Firebase", error);
        return false;
    }
};

// Función para escuchar el ranking en tiempo real
export const subscribeToRanking = (callback) => {
    if (!db) {
        // Retornar datos falsos si no hay base de datos configurada
        callback([
            { name: "Stan Lee", score: 5000, moviesWatched: 52, badges: 10 },
            { name: "Agente Romannof", score: 3500, moviesWatched: 30, badges: 5 },
            { name: "Usuario Local", score: 0, moviesWatched: 0, badges: 0 }
        ]);
        return () => {};
    }
    
    const usersRef = collection(db, "users");
    const q = query(usersRef, orderBy("score", "desc"), limit(10));
    
    return onSnapshot(q, (snapshot) => {
        const ranking = [];
        snapshot.forEach((doc) => {
            ranking.push(doc.data());
        });
        callback(ranking);
    });
};
