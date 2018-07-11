import React, { Component } from "react";
// import logo from "./logo.svg";
import "../Style/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="Header-title">Welcome The Recipe Hub</h1>
          <div> A project designed Us  </div>
          
         
        </header>
        <p className="Header-intro">
          To get started, click on the recipe that you want to browse.
          <p>{this.props.name}</p>
        </p>
      </div>
    );
  }
}

export default Header;