import React, { useState } from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const QuizScreen = ({ movie, currentIndex, onAnswer, isLastQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const questionData = movie.questions[currentIndex];
  const totalQuestions = movie.questions.length;

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
  };

  const handleNext = () => {
    const isCorrect = selectedOption === questionData.correctAnswerIndex;
    onAnswer(isCorrect);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <motion.div 
      className="screen-container"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="quiz-header">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="question-counter">
          PREGUNTA {currentIndex + 1} / {totalQuestions}
        </div>
      </div>

      <motion.h2 
        className="question-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        key={`text-${currentIndex}`}
        style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.8rem' }}
      >
        {questionData.question}
      </motion.h2>

      <div className="options-grid">
        {questionData.options.map((option, index) => {
          let btnClass = "option-btn";
          if (isAnswered) {
            if (index === questionData.correctAnswerIndex) {
              btnClass += " correct";
            } else if (index === selectedOption) {
              btnClass += " wrong";
            }
          } else if (selectedOption === index) {
            btnClass += " selected";
          }

          return (
            <motion.button
              key={index}
              className={btnClass}
              onClick={() => handleOptionClick(index)}
              disabled={isAnswered}
              whileHover={!isAnswered ? { scale: 1.02, x: 5 } : {}}
              whileTap={!isAnswered ? { scale: 0.98 } : {}}
            >
              <span style={{ fontWeight: 'bold', marginRight: '10px', color: 'var(--accent)' }}>
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {isAnswered && (
          <motion.div 
            className={`feedback-overlay ${selectedOption === questionData.correctAnswerIndex ? 'correct' : 'wrong'}`}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          >
            <div className="feedback-title">
              {selectedOption === questionData.correctAnswerIndex ? (
                <><CheckCircle2 /> ¡CORRECTO!</>
              ) : (
                <><XCircle /> INCORRECTO</>
              )}
            </div>
            <p className="feedback-text">
              {selectedOption === questionData.correctAnswerIndex 
                ? "¡Digno de los Vengadores!" 
                : "La respuesta correcta era: " + questionData.options[questionData.correctAnswerIndex]
              }
            </p>
            <button className="btn btn-primary" onClick={handleNext} style={{ alignSelf: 'flex-end', background: 'var(--bg-card)', color: 'var(--white)', border: '1px solid rgba(255,255,255,0.2)' }}>
              {isLastQuestion ? 'Ver Resultados' : 'Siguiente'} <ArrowRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizScreen;
