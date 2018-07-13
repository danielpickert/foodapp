import React from "react";
import { Link } from "react-router-dom";
import Axios from "../../node_modules/axios";

const API_KEY = "e932a4dbf99f934fb4163d7391dc9865";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
	componentDidMount = async () => {
	  const title = this.props.location.state.recipe;
      const req = await fetch 
      (`http://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
      
      const res = await req.json();
      this.setState({ activeRecipe: res.recipes[0]});
      console.log(this.state.activeRecipe)
	}
	render() {
		const recipe = this.state.activeRecipe
		return (
			<div className="container">
				{ this.state.activeRecipe.length !== 0 && 
					<div className="active-recipe">
						<img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
						<h3 className="active-recipe__title">{recipe.title}</h3>
						<h4 className="active-recipe__publisher">
							Publisher: <span>{recipe.publisher}</span>
						</h4>
						<p className="active-recipe__">
							Recipe: <span><a href={recipe.f2f_url}>{recipe.f2f_url}</a></span></p>
						<button className="active-recipe__button">
						<Link to="/">Go Home</Link>
						</button>
					</div>
				}
			</div>
		);
	}
}


export default Recipe;
