import React, { Component } from "react";

class Stopwatch extends Component {
  state = {
    isRunning: false,
    timer: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => this.counter(), 500);
  }

  handleStart = () => {
    this.setState({ isRunning: !this.state.isRunning });
  };

  counter() {
    if (this.state.isRunning) {
      this.setState(prev => ({ timer: prev.timer + 1 }));
    }
  }

  handleReset = () => {
    this.setState({ isRunning: false, timer: 0 });
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{this.state.timer}</span>
        <button onClick={this.handleStart}>
          {this.state.isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Stopwatch;
