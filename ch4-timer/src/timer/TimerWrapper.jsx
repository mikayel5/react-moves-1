import React from "react";
import ReactDOM from "react-dom";

class Timer extends React.Component {
  render() {
    if (this.props.timerLeft == 0) {
      document.getElementById("end-of-time").play();
      console.log("hello");
    }
    if (this.props.timerLeft == null || this.props.timerLeft == 0)
      return <div />;
    return <h1>Time left: {this.props.timerLeft}</h1>;
  }
}
class Button extends React.Component {
  startTimer(event) {
    return this.props.startTimer(this.props.time);
  }

  render() {
    return (
      <button
        type="button"
        className="btn-default btn"
        onClick={() => {
          this.props.startTimer(this.props.time);
        }}
      >
        {this.props.time} seconds
      </button>
    );
  }
}
class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timerLeft: null, timer: null };
    this.startTimer = this.startTimer.bind(this);
  }
  startTimer(timerLeft) {
    clearInterval(this.state.timer);
    let timer = setInterval(() => {
      var timerLeft = this.state.timerLeft - 1;
      if (timerLeft == 0) {
        clearInterval(timer);
      }
      this.setState({ timerLeft: timerLeft });
    }, 1000);
    console.log("1: After setInterval");
    return this.setState({ timerLeft: timerLeft, timer: timer });
  }

  render() {
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer} />
          <Button time="10" startTimer={this.startTimer} />
          <Button time="15" startTimer={this.startTimer} />
        </div>
        <Timer timerLeft={this.state.timerLeft} />
        <audio id="end-of-time" preload="auto">
          <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
        </audio>
      </div>
    );
  }
}

export default TimerWrapper;
