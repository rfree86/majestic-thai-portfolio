import React from 'react';
import BackboneMixin from '../mixins/Backbone';
import store from '../store';

const App = React.createClass({

  mixins: [BackboneMixin],

  componentWillMount() {
    store.fetchRecipes();
  },

  // sets up the state of this component
  getModels() {
    return {
      recipes: store.getRecipes()
    }
  },

  render() {

    var recipes = this.state.recipes;

    return (
      <div>
        <h1>Hello</h1>
        <ul>
          {recipes.map((recipe) => {
              return <li>{recipe.name}</li>
          })}
        </ul>
      </div>
    );
  }
});

export default App;
