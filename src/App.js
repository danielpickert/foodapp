import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
import Recipe from "./components/Recipe.js";
import Header from "./components/Header.js";
import Search from "./components/Search";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Recipe Hub</h1>
          <div>
            {" "}
            Designed by
            <h2>Daniel, Maseeh, & Michelle </h2>
          </div>
        </header>
        <main>
          To get started, search for a recipe!
          <form action="/search/" method="GET">
            <input
              style={{ margin: "10px auto", display: "block", width: "140px" }}
              type="text"
              name="title"
              placeholder="Name of dish or ingredient"
            />
            <input type="submit" value="Submit" class="btn" />
          </form>
          <Header name="poop" />
        </main>
      </div>
    );
  }
}

export default App;
