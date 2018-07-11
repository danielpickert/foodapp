import React, { Component } from "react";
import "../Style/Display.css";

class Display extends Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Display;
