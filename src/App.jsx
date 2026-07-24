import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './components/WelcomeScreen';
import RouteScreen from './components/RouteScreen';
import MovieDetailScreen from './components/MovieDetailScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { useProgress } from './hooks/useProgress';
import { marvelMovies } from './data/marvelChronology';

function App() {
  const { progress, setUserName, completeMovie } = useProgress();
  
  // Si no hay nombre, el estado inicial es 'welcome', sino 'route'
  const [gameState, setGameState] = useState(progress.userName ? 'route' : 'welcome'); 
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  // Quiz states
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [currentTimeSpent, setCurrentTimeSpent] = useState('');

  const handleSaveName = (name) => {
    setUserName(name);
    setGameState('route');
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setGameState('detail');
  };

  const handleStartQuiz = (timeSpent) => {
    setCurrentTimeSpent(timeSpent);
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameState('quiz');
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    if (currentQuestionIndex < selectedMovie.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Quiz finished
      completeMovie(selectedMovie.id, score + (isCorrect ? 1 : 0), currentTimeSpent);
      setGameState('result');
    }
  };

  const handleContinue = () => {
    setGameState('route');
    setSelectedMovie(null);
  };

  return (
    <AnimatePresence mode="wait">
      {gameState === 'welcome' && (
        <WelcomeScreen 
          key="welcome"
          onSaveName={handleSaveName}
        />
      )}

      {gameState === 'route' && (
        <RouteScreen 
          key="route" 
          progress={progress} 
          onSelectMovie={handleSelectMovie} 
        />
      )}
      
      {gameState === 'detail' && selectedMovie && (
        <MovieDetailScreen 
          key="detail" 
          movie={selectedMovie}
          isCompleted={progress.completedMovies.some(m => m.id === selectedMovie.id)}
          onBack={() => setGameState('route')}
          onStartQuiz={handleStartQuiz}
        />
      )}

      {gameState === 'quiz' && selectedMovie && (
        <QuizScreen 
          key="quiz" 
          movie={selectedMovie}
          currentIndex={currentQuestionIndex}
          isLastQuestion={currentQuestionIndex === selectedMovie.questions.length - 1}
          onAnswer={handleAnswer}
        />
      )}

      {gameState === 'result' && selectedMovie && (
        <ResultScreen 
          key="result" 
          movie={selectedMovie}
          score={score}
          total={selectedMovie.questions.length}
          onContinue={handleContinue}
        />
      )}
    </AnimatePresence>
  );
}

export default App;
