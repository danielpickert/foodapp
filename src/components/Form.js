import React from 'react';

const Form = props => (
	<form onSubmit={props.getRecipe}>
		<input style={{ margin:"10px auto", display: "block", width: "140px" }} type="text" name="recipeName"/>
		<button>Search</button>
	</form>
	);

export default Form;