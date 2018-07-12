import React, { Component } from "react";
import "../Style/Search.css";
import axios from "axios";

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <p>{this.props.name} gg </p>
        </header>
      </div>
    );
  }
}

export default Search;
