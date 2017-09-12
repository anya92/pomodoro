import React from 'react';

const formatTime = timeInSeconds => {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

  if (hours && hours < 10) { hours = `0${hours}`};
  if (minutes < 10) { minutes = `0${minutes}`};
  if (seconds < 10) { seconds = `0${seconds}`};
  return `${hours ? hours + ':' : ''}${minutes}:${seconds}`;
}

const Clock = ({ timeRemain, workTime }) => {
  return (
    <div className="clock">
      <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(110, 110)">
          <circle r="100" className="clock-base" fill="none" stroke="lightgreen" strokeWidth="10px" />
          <g transform="rotate(-90)">
            <circle r="100" className="clock-progress" fill="none" stroke="crimson" strokeWidth="10px" style={{transition: 'stroke-dashoffset .5s'}} />
          </g>
          <g>
            <circle r="90" fill="crimson" />
            <text textAnchor="middle" fill="white" fontSize="30px" dy="10px">{formatTime(timeRemain || workTime * 60)}</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Clock;
