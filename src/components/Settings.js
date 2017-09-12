import React from 'react';

const Settings = ({ workTime, changeWorkTime, breakTime, changeBreakTime }) => {
  return (
    <div>
      <label htmlFor="workTime">{ workTime }</label>
      <input id="workTime" type="range" min="5" max="120" value={ workTime } onChange={e => changeWorkTime(e.target.value)} />
      <label htmlFor="breakTime">{ breakTime }</label>
      <input id="breakTime" type="range" min="2" max="40" value={ breakTime } onChange={e => changeBreakTime(e.target.value)} />
    </div>
  );
};

export default Settings;
