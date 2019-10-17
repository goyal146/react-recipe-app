import React, { Component } from "react";
import "./App.css";
import RecipeComp from "./component/RecipeComp";
const API_Key = "3e45306e92385956afb06806206d4424";

class App extends Component {
  state = {
    recipe: [],
    search: ""
  };
  fetchRecipes = () => {
    fetch(`https://www.food2fork.com/api/search?key=${API_Key}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          recipe: data.recipes
        })
      );
  };
  componentDidMount() {
    this.fetchRecipes();
  }
  updateData = e => {
    this.setState({ search: e.target.value.substr(0, 20) });
  };
  render() {
    let filteredData = this.state.recipe.filter(recipe => {
      return recipe.title.toLowerCase().indexOf(this.state.search) !== -1;
    });
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipes</h1>
        </header>
        <form>
        <input
            type="text"
            value={this.state.search}
            placeholder="Search Recipe"
            name="search"
            className ="recipe-search"
            onChange={this.updateData}
          ></input>
        </form>
        <RecipeComp recipes={filteredData} />
      </div>
    );
  }
}

export default App;
