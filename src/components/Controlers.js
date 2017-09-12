import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 1.5rem;
  font-weight: 700;
  color: crimson;
  margin: 10px;
  cursor: pointer;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

const Controlers = ({ start, startTimer, pauseTimer, stopTimer }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {
        !start
        ? <Button onClick={() => startTimer()}>Start</Button>
        : <div>
            <Button onClick={() => pauseTimer()}>Pauza</Button>
            <Button onClick={() => stopTimer()}>Stop</Button>
          </div>
      }
    </div>
  );
};

Controlers.propTypes = {
  start: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  pauseTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired
};

export default Controlers;
