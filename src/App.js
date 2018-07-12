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
<<<<<<< HEAD
          <Header name="poop" />
=======
      Switch>
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
>>>>>>> b0d182308c12b3d4cc933729445bc4b7647b82ac
        </main>
      </div>
    );
  }
}

export default App;
