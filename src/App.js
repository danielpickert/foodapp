import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
// import Display from "./components/Display.js";
// import Recipe from "./components/Recipe.js";
// import Header from "./components/Header.js";
// import Search from "./components/Search";
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
          <h1 className="App-title">Welcome to The Recipe Hub</h1>
          <img
            src="https://comps.canstockphoto.com/recipes-3d-concept-stock-illustration_csp9417848.jpg"
            className="App-logo"
            alt="logo"
          />
        </header>
        
        <div className="Search">
          To get started, search for a recipe!

          <form action="/search/" method="GET">
            <input style={{ margin:"10px auto", display: "block", width: "140px" }} type="text" name="title" placeholder="Name of dish or ingredient" />
            <input type="submit" value="Submit" class="btn" />
          </form>
        </div>

          </div>  
          // className="App-intro">
          // // <Display name="The dish you selected" />
          // <Recipe name="Burger" />
          // <Header name="Header" />
          // <Search name="Search" />
          // </p>
    
    );
  }
}

export default App;
