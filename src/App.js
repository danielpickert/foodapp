import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
import Display from "./components/Display.js";
import Recipe from "./components/Recipe.js";
import axios from 'axios';

// // API KEY for Food Recipes
// const FOOD_KEY = 'e932a4dbf99f934fb4163d7391dc9865';

class App extends Component {
  state = {
    title: undefined
  }




componentDidMount() {
  axios.get("http://localhost:3000/search/salt")
    .then(res => {
    console.log(res)
    })
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome The Recipe Hub</h1>
          <div> A project designed by </div>
          <h2>Daniel </h2>
          <h2>Maseeh </h2>
          <h2> && Michelle </h2>
        </header>
        <p className="App-intro">
          To get started, click on the recipe that you want to browse.
          <Display name="The dish you selected" />
          <Recipe name="Burger" />
        </p>
      </div>
    );
  }
}

export default App;
