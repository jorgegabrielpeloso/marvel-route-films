import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { marvelMovies } from '../data/marvelChronology';

const ResultScreen = ({ movie, score, total, onContinue }) => {
  const nextMovieIndex = marvelMovies.findIndex(m => m.id === movie.id) + 1;
  const nextMovie = marvelMovies[nextMovieIndex];

  return (
    <motion.div 
      className="screen-container result-screen"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
    >
      <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem', fontFamily: 'Outfit', fontWeight: 800 }}>MISIÓN COMPLETADA</h2>
      
      <motion.div 
        className="score-circle"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <span className="score-number">{score}</span>
        <span className="score-total">de {total}</span>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: '16px', marginBottom: '2rem', border: '1px solid rgba(255,255,255,0.1)', width: '100%' }}
      >
        <h3 style={{ color: 'var(--accent)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Star size={20} fill="currentColor"/> DATO CURIOSO
        </h3>
        <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: '1.4' }}>
          {movie.funFact}
        </p>
      </motion.div>

      {nextMovie && (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{ width: '100%', marginBottom: '2rem', textAlign: 'left' }}
        >
          <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Próxima Fase:</p>
          <div style={{ padding: '1rem', background: 'rgba(226, 54, 54, 0.1)', borderRadius: '12px', borderLeft: '4px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>{nextMovie.title}</h4>
            <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontStyle: 'italic' }}>"{nextMovie.teaser}"</p>
          </div>
        </motion.div>
      )}

      {!nextMovie && (
        <p style={{ color: 'var(--correct)', marginBottom: '2rem', fontSize: '1.2rem', fontWeight: 'bold' }}>
          ¡Has completado toda la cronología hasta ahora! ¡Lista para Avengers Doomsday!
        </p>
      )}

      <motion.button 
        className="btn btn-primary"
        onClick={onContinue}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{ width: '100%' }}
      >
        VOLVER A LA RUTA <ArrowRight size={20} />
      </motion.button>
    </motion.div>
  );
};

export default ResultScreen;
