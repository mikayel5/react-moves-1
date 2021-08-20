import React from "react";
import ReactDOM from "react-dom";

// class Timer extends React.Component {
//   render() {
//     if (this.props.timerLeft == 0) {
//       document.getElementById("end-of-time").play();
//     }
//     if (this.props.timerLeft == null || this.props.timerLeft == 0) {
//       return <div />;
//     }

//     return <h1>Time left:{this.props.timerLeft}</h1>;
//   }
// }

// export default Timer;

// function Timer(props) {
//   if (this.props.timerLeft == 0) {
//     document.getElementById("end-of-time").play();
//   }
//   if (this.props.timerLeft == null || this.props.timerLeft == 0) {
//     return <div />;
//   }

//   return <h1>Time left:{this.props.timerLeft}</h1>;
// }

// export default Timer;

const Timer = (props) => {
  if (this.props.timerLeft == 0) {
    document.getElementById("end-of-time").play();
  }
  if (this.props.timerLeft == null || this.props.timerLeft == 0) {
    return <div />;
  }

  return <h1>Time left:{this.props.timerLeft}</h1>;
};

export default Timer;
