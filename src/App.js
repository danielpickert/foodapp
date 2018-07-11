import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
import Display from "./components/Display.js";
import Recipe from "./components/Recipe.js";
import Header from "./components/Header.js";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header name="Header" />
          <h1 className="App-title">Welcome The Recipe Hub</h1>
          {/* <div>
            <h3>A project designed by</h3>
            <h2>Daniel </h2>
            <h2>Maseeh </h2>
            <h2> && Michelle </h2>
          </div> */}
        </header>
        <p className="App-intro">
          To get started, click on the recipe that you want to browse.
          <Display name="The dish you selected" />
          <Recipe name="Burger" />
          <Search name="Search" />
        </p>
      </div>
    );
  }
}

export default App;
