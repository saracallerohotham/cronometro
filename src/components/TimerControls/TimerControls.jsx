import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
  background: violet;
  color: black;
  border-radius: 30px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 0 10px;
`;

function TimerControls({ isRunning, startTimer, stopTimer, resetTimer }) {
  const handleButtonClick = () => {
    if (isRunning) {
      stopTimer(); // Detiene el temporizador si está corriendo
    } else {
      startTimer(); // Inicia el temporizador si no está corriendo
    }
  };

  const handleResetClick = () => {
    resetTimer(); // Reinicia el temporizador
  };

  return (
    <div>
      <StyledButton onClick={handleButtonClick}>
        {isRunning ? 'Detener' : 'Iniciar'}
      </StyledButton>
      <StyledButton onClick={handleResetClick}>
        Reiniciar
      </StyledButton>
    </div>
  );
}

export default TimerControls;
