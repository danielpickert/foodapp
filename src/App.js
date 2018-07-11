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
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to The Recipe Hub</h1>
          <div> A project designed by </div>
          <h2>Daniel </h2>
          <h2>Maseeh </h2>
          <h2> && Michelle </h2>
        </header>
        
        <p className="App-intro">
          To get started, search for a recipe!

          <form action="/search/" method="GET">
            <input style={{ margin:"10px auto", display: "block", width: "140px" }} type="text" name="title" placeholder="Name of dish or ingredient" />
            <input type="submit" value="Submit" class="btn" />
          </form>
          <Display name="The dish you selected" />
          <Recipe name="Burger" />
          <Header name="Header" />
          <Search name="Search" />
        </p>
      </div>
    );
  }
}

export default App;
