import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';

import Settings from './Settings';
import Clock from './Clock';
import Controlers from './Controlers';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');
  body {
    font-family: 'Roboto';
  }
`;

const Pomodoro = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  text-align: center;
  padding: 20px;
  font-size: 3rem;
  font-weight: 700;
  color: white;
  background: linear-gradient(to top right, crimson 0%, tomato 100%);
`;

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      workTime: 25, 
      breakTime: 5,
      timeLeft: 0,
      work: true,
      start: false,
      pause: false,
      stop: true
    };
  }

  componentDidMount() {
    let length = this.length = Math.PI * 2 * 100;
    let progressBar = this.progressBar = document.querySelector('.clock-progress');
    progressBar.style.strokeDasharray = length;
  }

  changeWorkTime = time => {
    if (time < 10 || time > 120) return;
    this.setState({ workTime: Number(time) });
  }

  changeBreakTime = time => {
    if (time < 2 || time > 40) return;
    this.setState({ breakTime: Number(time) });
  }

  startTimer = () => {
    let { work, workTime, breakTime } = this.state;
    let seconds = work ? workTime * 60 : breakTime * 60;

    this.setState({ start: true, stop: false });

    let remainTime = (this.state.timeLeft && Date.now() + this.state.timeLeft * 1000) || Date.now() + (seconds * 1000);

    let intervalTimer = this.intervalTimer = setInterval(() => {
      let timeLeft = Math.round((remainTime - Date.now()) / 1000);

      let offset = - this.length + this.length * timeLeft / seconds;
      this.progressBar.style.strokeDashoffset = offset;

      this.setState({ timeLeft });

      if(timeLeft <= 0) {
        clearInterval(intervalTimer);
        this.setState(prevState => {
          return {
            work: !prevState.work
          }
        });
        this.startTimer();
      }
    }, 1000);
  }

  pauseTimer = () => {
    clearInterval(this.intervalTimer);
    this.setState({ pause: true, start: false });
  }

  stopTimer = () => {
    clearInterval(this.intervalTimer);
    this.setState({ 
      start: false, 
      pause: false, 
      stop: true, 
      timeLeft: 0, 
      work: true 
    });
    this.progressBar.style.strokeDashoffset = 0;
  }

  render() {
    return (
      <div>
        <Title>Pomodoro</Title>
        <Pomodoro>
          <Settings 
            workTime={this.state.workTime}
            changeWorkTime={this.changeWorkTime}
            breakTime={this.state.breakTime}
            changeBreakTime={this.changeBreakTime}
            stop={this.state.stop}
          />
          <Clock 
            workTime={this.state.workTime}
            timeLeft={this.state.timeLeft}
            work={this.state.work}
            stop={this.state.stop}
          />
          <Controlers 
            start={this.state.start}
            startTimer={this.startTimer}
            pauseTimer={this.pauseTimer}
            stopTimer={this.stopTimer}
          />
        </Pomodoro>
      </div>  
    );
  }
}

export default App;
