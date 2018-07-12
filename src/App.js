import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
import { Route, Switch } from "react-router-dom";
import Display from "./components/Display.js";
import Recipe from "./components/Recipe.js";
import Header from "./components/Header.js";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null
    };
    this.setRecipe = this.setRecipe.bind(this);
  }
  setRecipe(recipe) {
    this.setState({ recipe: recipe });
  }

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
        <main>
          <Switch>
            <Route path="/Display" component={Display} />
            <Route
              path="/Recipe/:title"
              render={routerParams => {
                return;
                <Recipe
                  setRecipe={this.setRecipe}
                  {...routerParams}
                  {...this.state}
                />;
              }}
            />
            <Route path="/" component={Display} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
