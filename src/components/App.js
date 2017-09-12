import React, { Component } from 'react';

import Settings from './Settings';
import Clock from './Clock';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      workTime: 25, // sec
      breakTime: 5
    };
  }

  changeWorkTime = time => {
    this.setState({ workTime: Number(time) });
  }

  changeBreakTime = time => {
    this.setState({ breakTime: Number(time) });
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
        />
      </div>
    );
  }
}

export default App;
