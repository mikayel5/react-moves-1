import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  handleStartTimer(event) {
    return this.props.handleStartTimer(this.props.time);
  }

  render() {
    return (
      <button
        type="button"
        className="btn-default btn"
        onClick={() => {
          this.handleStartTimer.bind(this);
        }}
      >
        {this.props.time} seconds
      </button>
    );
  }
}

export default Button;
