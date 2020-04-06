import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import RecipesPage from './pages/RecipesPage';
import jsonUsers from './data/users'
import jsonRecipes from './data/recipes'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
         activeUser:   {
           "id": 1,
         "fname": "Mary",
         "lname": "Samovol",
         "email": "marsam@ua.com",
         "pwd": "123"
     },
      allUsers: jsonUsers,
      allRecipes: jsonRecipes,
      //activeUserRecipes: []
      activeUserRecipes: jsonRecipes.filter(recipe => recipe.userId === 1)
    }
    this.addRecipe = this.addRecipe.bind(this);

    console.log(this.state.allRecipes);
  }

  addRecipe(newRecipe) {

    newRecipe.userId = this.state.activeUser.id;
    newRecipe.id = this.state.allRecipes[this.state.allRecipes.length - 1].id + 1;

    const allRecipes = this.state.allRecipes.concat(newRecipe);
    const activeUserRecipes = this.state.activeUserRecipes.concat(newRecipe);

    this.setState({allRecipes, activeUserRecipes});

    return newRecipe;
  }

  render() {

    const { activeUser, allUsers, activeUserRecipes } = this.state;
    // const activeUser = this.state.activeUser;

    return (
      <Switch>
        <Route exact path="/">
          <HomePage activeUser={activeUser} handleLogout={this.handleLogout}/>
        </Route>
        <Route path="/recipes">
          <RecipesPage recipes={activeUserRecipes} activeUser={activeUser} handleLogout={this.handleLogout} addRecipe={this.addRecipe}/>
        </Route>
      </Switch>
    );
  }
}

export default App;
