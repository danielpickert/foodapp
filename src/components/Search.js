import React, { Component } from "react";
import "../Style/Search.css";
import axios from "axios";

const Form = props => (
  <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="recipeName" />
    <button className="form__button">Search</button>
  </form>
);

export default Form;
