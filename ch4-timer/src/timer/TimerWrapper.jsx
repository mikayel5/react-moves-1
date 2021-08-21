import React from "react";
import ReactDOM from "react-dom";
import Timer from "./timer";


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
class ButtonPause extends React.Component {

  render() {
    return (
      <button
        type="button"
        className="btn-default btn"
        value={this.props.value}
        onClick={() => {
          this.props.startTimer(this.props.time);
        }}
      >
     {this.props.value}     
 </button>
    );
  }
}
class TimerWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
         timerLeft: null,
         timer: null,
         paused:true
       };
    this.startTimer = this.startTimer.bind(this);
    this.pauseTime = this.pauseTime.bind(this);
    this.resumeTimer = this.resumeTimer.bind(this)



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
  pauseTime(paused){
    if(this.state.paused==true ){
      clearInterval(this.state.timer)
      this.setState({
        timer: null,
      })
      this.setState({paused:!this.state.paused})
      console.log("mtav")

    }
  
    
  }
  resumeTimer(){
    if(this.state.timerLeft > 0  ){
      this.startTimer(this.state.timerLeft)
      console.log("stex el")
      this.setState({paused:!this.state.paused})
    }
  }

  


  render() {
    const {paused}=this.state
    let title = this.state.paused ? "Pause" : "Resume"
    return (
      <div className="row-fluid">
        <h2>Timer</h2>
        <div className="btn-group" role="group">
          <Button time="5" startTimer={this.startTimer} />
          <Button time="10" startTimer={this.startTimer} />
          <Button time="15" startTimer={this.startTimer} />
          
        </div>
        <div>
        {this.state.paused == true
              ?
              <button onClick={this.pauseTime}>{title}</button>
              :
              <button onClick={this.resumeTimer}>{title}</button>
            }

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
