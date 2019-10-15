import React, { Component } from "react";
import "./App.css";
import RecipeComp from "./component/RecipeComp";
const API_Key = "3e45306e92385956afb06806206d4424";


class App extends Component {
  state = {
    recipe:[]
  }
  fetchRecipes = () => {
    fetch(`https://www.food2fork.com/api/search?key=${API_Key}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          recipe:data.recipes
        })
      )
  }
  componentDidMount(){
    this.fetchRecipes();
  }
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Recipes</h1>
        </header>
        <RecipeComp recipes = {this.state.recipe}/>
      </div>
    );
  }
}

export default App;
