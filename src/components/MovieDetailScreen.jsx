import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowLeft, Clock } from 'lucide-react';

const MovieDetailScreen = ({ movie, isCompleted, onBack, onStartQuiz }) => {
  const [timeSpent, setTimeSpent] = useState('');

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
    >
      <button className="btn btn-secondary" onClick={onBack} style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', marginBottom: '1rem' }}>
        <ArrowLeft size={20} /> Volver
      </button>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2rem' }}>
        {movie.posterUrl && (
          <img 
            src={movie.posterUrl} 
            alt={movie.title} 
            style={{ width: '200px', height: '300px', objectFit: 'cover', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.5)', marginBottom: '1.5rem', border: '2px solid rgba(255,255,255,0.1)' }}
          />
        )}
        <div style={{ display: 'inline-block', padding: '0.5rem 1rem', backgroundColor: 'rgba(226,54,54,0.1)', color: 'var(--primary)', borderRadius: '20px', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '1px' }}>
          {movie.type === 'Movie' ? 'PELÍCULA' : 'SERIE'} • {movie.year}
        </div>
        <h2 style={{ fontSize: '2.5rem', lineHeight: '1.1', marginBottom: '1rem', textAlign: 'center' }}>{movie.title}</h2>
        <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', fontStyle: 'italic', textAlign: 'center' }}>
          "{movie.teaser}"
        </p>
      </div>

      {!isCompleted && (
        <div style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '2rem' }}>
          <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Clock size={20} color="var(--accent)"/> Tiempo Invertido
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed bg-[#1a1f26] p-4 rounded-xl border border-gray-800">
            {movie.teaser || "Una increíble aventura del Universo Cinematográfico de Marvel."}
          </p>
          
          <p style={{ color: 'var(--text-light)', marginBottom: '1rem', fontSize: '0.9rem' }}>
            ¿Cuántas horas te tomó verla? Ingresa solo el número de horas.
          </p>
          <input 
            type="number" 
            min="0"
            step="0.5"
            className="input-field" 
            placeholder="Ej: 2 o 2.5" 
            value={timeSpent}
            onChange={(e) => setTimeSpent(e.target.value)}
          />
        </div>
      )}

      {isCompleted ? (
        <div style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'rgba(74, 222, 128, 0.1)', borderRadius: '16px', border: '1px solid var(--correct)' }}>
          <h3 style={{ color: 'var(--correct)' }}>¡Ya superaste esta misión!</h3>
          <p style={{ color: 'var(--text-main)', marginTop: '0.5rem' }}>Dato curioso: {movie.funFact}</p>
        </div>
      ) : (
        <motion.button 
          className="btn btn-primary"
          style={{ width: '100%', padding: '1.25rem', fontSize: '1.2rem' }}
          onClick={() => onStartQuiz(timeSpent || '0')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Play size={24} fill="currentColor" /> INICIAR QUIZ
        </motion.button>
      )}
    </motion.div>
  );
};

export default MovieDetailScreen;
