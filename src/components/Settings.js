import React from 'react';
import styled from 'styled-components';

const SettingsDiv = styled.div`
  display: ${props => props.stopTime ? 'block' : 'none'};
  margin-top: 20px;
`;

const Title = styled.div`
  text-align: center;
  text-decoration: underline;
  font-size: 1.4rem;
  margin-bottom: 20px;
`;

const Label = styled.div`
  display: block;
  text-align: center;
  font-size: 1.2rem;
  span {
    color: crimson;
    font-weight: 700;
  }
`;

const Input = styled.input`
  -webkit-appearance: none;
  width: 200px;
  height: 40px;
  margin: 10px 50px;
  background: linear-gradient(to right, crimson 0%, tomato 100%);
  background-size: 190px 5px;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  outline: none;
  zoom: 130%;
  display: block;
  margin: auto;
  margin-bottom: 30px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    cursor: pointer;
    background: white;
    border-radius: 50%;
    border: 2px solid crimson;
    position: relative;
    z-index: 3;
  }
`;

const Settings = ({ workTime, changeWorkTime, breakTime, changeBreakTime, stopTime }) => {
  return (
    <SettingsDiv stopTime={stopTime}>
      <Title>Ustawienia</Title>
      <Label>Czas pracy: <span>{ workTime }</span> minut</Label>
      <Input 
        id="workTime" 
        type="range" 
        min="10" 
        max="120" 
        disabled={!stopTime}
        value={ workTime } 
        onChange={e => changeWorkTime(e.target.value)} 
      />
      <Label>Czas przerwy: <span>{ breakTime }</span> minut</Label>
      <Input 
        id="breakTime" 
        type="range" 
        min="1" 
        max="30"
        disabled={!stopTime} 
        value={ breakTime } 
        onChange={e => changeBreakTime(e.target.value)} 
      />
    </SettingsDiv>
  );
};

export default Settings;
