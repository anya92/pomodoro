import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-family: 'Roboto';
  color: crimson;
  font-size: 1.4rem;
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
`;

const Controlers = ({ start, pause, startTimer, pauseTimer, stopTimer }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {
        !start
        ? <Button onClick={() => startTimer()}>Start</Button>
        : <div>
            <Button onClick={() => pauseTimer()}>Pause</Button>
            <Button onClick={() => stopTimer()}>Stop</Button>
          </div>
      }
    </div>
  );
};

export default Controlers;
