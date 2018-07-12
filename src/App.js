import React, { Component } from "react";
// import logo from "./logo.svg";
import "./Style/App.css";
import Form from './components/Form';
import Recipes from './components/Recipes';


// // API KEY for Food Recipes
const API_KEY = 'e932a4dbf99f934fb4163d7391dc9865';



class App extends Component {
    state = {
      recipes: []
    }

    getRecipe = async (e) => {
      const recipeName = e.target.elements.recipeName.value;
      e.preventDefault();
      const api_call = await fetch(`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);
      
      const data = await api_call.json();
      this.setState({ recipes: data.recipes });
      console.log(this.state.recipes)
    }

    componentDidMount = () => {
      const json = localStorage.getItem("recipes");
      const recipes = JSON.parse(json);
      this.setState({ recipes: recipes});
    }

    componentDidUpdate = () => {
      const recipes = JSON.stringify(this.state.recipes);
      localStorage.setItem("recipes", recipes);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to The Recipe Hub</h1>
          
        </header>
        
        <div className="Form">
          <Form getRecipe={this.getRecipe} />
          <Recipes recipes={this.state.recipes} />
        </div>

      </div>
    
    );
  }


}



export default App; 
