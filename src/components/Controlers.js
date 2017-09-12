import React from 'react';

const Controlers = ({ start, pause, stop, startTimer, pauseTimer, stopTimer }) => {
  return (
    <div>
      {
        !start
        ? <button onClick={() => startTimer()}>Start</button>
        : <div>
            <button onClick={() => pauseTimer()}>Pause</button>
            <button onClick={() => stopTimer()}>Stop</button>
          </div>
      }
    </div>
  );
};

export default Controlers;
