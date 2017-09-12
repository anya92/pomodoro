import React from 'react';
import PropTypes from 'prop-types';

const formatTime = timeInSeconds => {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds = timeInSeconds - (hours * 3600) - (minutes * 60);

  if (hours && hours < 10) { hours = `0${hours}`};
  if (minutes < 10) { minutes = `0${minutes}`};
  if (seconds < 10) { seconds = `0${seconds}`};
  return `${hours ? hours + ':' : ''}${minutes}:${seconds}`;
}

const Clock = ({ timeLeft, workTime, work, stop }) => {
  return (
    <div style={{ display: `${stop ? 'none' : 'block'}`, textAlign: 'center' }} >
      <svg width="300" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(110, 110)">
          <circle r="100" className="clock-base" fill="none" stroke="white" strokeWidth="10px" />
          <g transform="rotate(-90)">
            <circle r="100" className="clock-progress" fill="none" stroke="crimson" strokeWidth="10px" style={{transition: 'stroke-dashoffset .5s'}} />
          </g>
          <g>
            <circle r="90" fill="crimson" />
            <text textAnchor="middle" fill="white" fontSize="1rem" fontWeight="300" dy="-1.6rem">
              { work ? 'praca' : 'przerwa' }
            </text>
            <text textAnchor="middle" fill="white" fontSize="2.5rem" dy="1rem">
              {formatTime(timeLeft || workTime * 60)}
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

Clock.propTypes = {
  workTime: PropTypes.number.isRequired,
  timeLeft: PropTypes.number.isRequired,
  work: PropTypes.bool.isRequired,
  stop: PropTypes.bool.isRequired
};

export default Clock;
