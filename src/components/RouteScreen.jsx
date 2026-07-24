import React from 'react';
import { motion } from 'framer-motion';
import { marvelMovies } from '../data/marvelChronology';
import { Check, Lock, Play } from 'lucide-react';

const RouteScreen = ({ progress, onSelectMovie }) => {
  const currentMovieId = marvelMovies[progress.currentMovieIndex]?.id;

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 className="bangers" style={{ fontSize: '3rem', color: 'var(--primary)', textShadow: '2px 2px 0 #000' }}>MCU TRACKER</h1>
        <p style={{ color: 'var(--accent)', fontFamily: 'Outfit', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
          Agente: {progress.userName}
        </p>
        <p style={{ color: 'var(--text-light)', fontFamily: 'Outfit' }}>
          {progress.completedMovies.length} de {marvelMovies.length} completadas ({Math.round((progress.completedMovies.length / marvelMovies.length) * 100)}%)
        </p>
      </div>

      <div className="timeline-container">
        {marvelMovies.map((movie, index) => {
          const isCompleted = progress.completedMovies.some(m => m.id === movie.id);
          const isCurrent = movie.id === currentMovieId;
          const isLocked = !isCompleted && !isCurrent;

          let statusClass = "timeline-item ";
          if (isCompleted) statusClass += "completed";
          else if (isCurrent) statusClass += "current";
          else statusClass += "locked";

          return (
            <motion.div 
              key={movie.id} 
              className={statusClass}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: isLocked ? 0.5 : 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="timeline-marker">
                {isCompleted ? <Check size={24} /> : isCurrent ? <Play size={24} fill="currentColor" /> : <Lock size={20} />}
              </div>
              <div 
                className="timeline-content"
                onClick={() => {
                  if (isCompleted || isCurrent) {
                    onSelectMovie(movie);
                  }
                }}
              >
                <div className="movie-meta">
                  <span className="tag" style={{ background: movie.type === 'Movie' ? 'rgba(226,54,54,0.2)' : 'rgba(69,162,158,0.2)' }}>
                    {movie.type === 'Movie' ? 'Película' : 'Serie'}
                  </span>
                  <span>{movie.year}</span>
                </div>
                <h3 className="movie-title">{movie.title}</h3>
                {isCurrent && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--accent)', marginTop: '0.5rem' }}>
                    Siguiente misión...
                  </p>
                )}
                {isCompleted && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--correct)', marginTop: '0.5rem' }}>
                    Completada ✓
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default RouteScreen;
