import React, { Component } from "react";
import logo from "../logo.svg";
import "../Style/Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img
            src="https://comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg"
            className="App-logo"
            alt="logo"
          />
          <img
            src="https://tedx.iiita.ac.in/img/about-image.jpg"
            className="About-logo"
            alt="logo"
          />
          <h1 className="Header-title">Welcome The Recipe Hub</h1>
          <div> A project designed by Michelle, Maseeh and Daniel </div>
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
