import React, { Component } from "react";
import "../Style/Display.css";

class Display extends Component {
  render() {
    return (
      <div className="Display">
        <header className="Display-header">
          <p>{this.props.name} gg </p>
        </header>
      </div>
    );
  }
}

export default Display;
