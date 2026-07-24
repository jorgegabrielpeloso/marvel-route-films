import { useState, useEffect } from 'react';

const STORAGE_KEY = 'marvel_tracker_progress';

export const useProgress = () => {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      // Handle legacy saves that didn't have userName
      const parsed = JSON.parse(saved);
      if (parsed.userName === undefined) {
        parsed.userName = '';
      }
      return parsed;
    }
    return {
      userName: '',
      currentMovieIndex: 0,
      completedMovies: [], // Array of objects: { id, score, timeSpent }
      totalScore: 0
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const setUserName = (name) => {
    setProgress(prev => ({ ...prev, userName: name }));
  };

  const completeMovie = (id, score, timeSpent) => {
    setProgress(prev => {
      // Avoid duplicates
      const alreadyCompleted = prev.completedMovies.find(m => m.id === id);
      if (alreadyCompleted) return prev;

      return {
        ...prev,
        completedMovies: [...prev.completedMovies, { id, score, timeSpent }],
        currentMovieIndex: prev.currentMovieIndex + 1,
        totalScore: prev.totalScore + score
      };
    });
  };

  const resetProgress = () => {
    if(window.confirm("¿Estás segura de que quieres reiniciar todo tu progreso?")) {
        setProgress({
        userName: '',
        currentMovieIndex: 0,
        completedMovies: [],
        totalScore: 0
        });
    }
  };

  return { progress, setUserName, completeMovie, resetProgress };
};
