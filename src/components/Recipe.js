import React, { Component } from "react";
// import logo from "./logo.svg";
import "../Style/Recipe.css";

class Recipe extends Component {
  render() {
    return (
      <div className="Recipe">
        <header className="Recipe-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="Recipe-title">
            The recipe for {this.props.name} is below{" "}
          </h1>
        </header>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Recipe;
