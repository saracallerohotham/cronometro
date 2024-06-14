import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TimerControls from '../TimerControls/TimerControls';



const StyledTimer = styled.div`
  background: #de3030;
  height: 100vh;
  width: 100vw;
  color: #fde1eb;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Timer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000); // Intervalo de 1 segundo (1000 milisegundos)
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Limpieza del intervalo al desmontar el componente o detener el contador
  }, [isRunning]);

  const startTimer = () => setIsRunning(true);
  
  const stopTimer = () => setIsRunning(false);
  
  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <StyledTimer>
      <h1>{time}</h1>
      <TimerControls 
        isRunning={isRunning} 
        startTimer={startTimer} 
        stopTimer={stopTimer} 
        resetTimer={resetTimer} 
      />
    </StyledTimer>
  );
}

export default Timer;
