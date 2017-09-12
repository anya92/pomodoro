import React, { Component } from 'react';

import Settings from './Settings';
import Clock from './Clock';
import Controlers from './Controlers';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      workTime: 1, 
      breakTime: 0.5,
      timeRemain: 0,
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
    this.setState({ workTime: Number(time) });
  }

  changeBreakTime = time => {
    this.setState({ breakTime: Number(time) });
  }

  startTimer = () => {
    let { work, workTime, breakTime } = this.state;
    let seconds = work ? workTime * 60 : breakTime * 60;

    this.setState({ start: true, stop: false });

    let remainTime = (this.state.timeRemain && Date.now() + this.state.timeRemain * 1000) || Date.now() + (seconds * 1000);

    let intervalTimer = this.intervalTimer = setInterval(() => {
      let timeLeft = Math.round((remainTime - Date.now()) / 1000);

      let offset = - this.length + this.length * timeLeft / seconds;
      this.progressBar.style.strokeDashoffset = offset;

      this.setState({ timeRemain: timeLeft });

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
    this.setState({ start: false, pause: false, stop: true, timeRemain: 0 });
    this.progressBar.style.strokeDashoffset = 0;
  }

  render() {
    return (
      <div>
        <Settings 
          workTime={this.state.workTime}
          changeWorkTime={this.changeWorkTime}
          breakTime={this.state.breakTime}
          changeBreakTime={this.changeBreakTime}
        />
        <Clock 
          workTime={this.state.workTime}
          timeRemain={this.state.timeRemain}
        />
        <Controlers 
          start={this.state.start}
          pause={this.state.pause}
          stop={this.state.stop}
          startTimer={this.startTimer}
          pauseTimer={this.pauseTimer}
          stopTimer={this.stopTimer}
        />
      </div>
    );
  }
}

export default App;
