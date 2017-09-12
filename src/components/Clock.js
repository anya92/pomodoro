import React from 'react';

const Clock = () => {
  return (
    <div className="clock">
      <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(110, 110)">
          <circle r="100" className="clock-base" fill="none" stroke="tomato" strokeWidth="10px" />
          <g transform="rotate(-90)">
            <circle r="100" className="clock-progress" fill="none" stroke="crimson" strokeWidth="10px" />
          </g>
          <g>
            <circle r="90" fill="crimson" />
            <text textAnchor="middle" fill="white" fontSize="30px" dy="10px">25:00</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Clock;
