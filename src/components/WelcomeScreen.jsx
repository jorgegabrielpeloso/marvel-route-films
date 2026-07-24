import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Play } from 'lucide-react';

const WelcomeScreen = ({ onSaveName }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim()) {
      onSaveName(`${firstName.trim()} ${lastName.trim()}`);
    }
  };

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      style={{ justifyContent: 'center' }}
    >
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="bangers" style={{ fontSize: '4rem', color: 'var(--primary)', textShadow: '2px 2px 0 #000' }}>INICIATIVA VENGADORES</h1>
        <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginTop: '1rem', fontFamily: 'Outfit' }}>
          Para acceder a los archivos clasificados y registrar tu progreso hacia Avengers Doomsday, necesitamos identificarte.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>Nombre</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Ej: Juan" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--accent)', fontWeight: 'bold' }}>Apellido</label>
          <input 
            type="text" 
            className="input-field" 
            placeholder="Ej: Perez" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <motion.button 
          type="submit"
          className="btn btn-primary"
          style={{ width: '100%', padding: '1.25rem', fontSize: '1.2rem' }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={!firstName.trim() || !lastName.trim()}
        >
          <User size={24} /> INGRESAR AL SISTEMA
        </motion.button>
      </form>
    </motion.div>
  );
};

export default WelcomeScreen;
