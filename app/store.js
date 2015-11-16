import _ from 'underscore';
import Backbone from 'backbone';
import RecipesCollection from './models/recipes-collection';

let recipes = new RecipesCollection();


const Store = _.extend({}, Backbone.Events, {
  initialize() {
    this.listenTo(recipes, 'add remove change',() => {
      this.trigger('change');
    });
  },

  getRecipes() {
    return recipes.toJSON();
  },

  fetchRecipes() {
    return recipes.fetch();
  },

  createRecipe(data) {
    recipes.create(data);
  }
});

// get global access to recipes for demonstration/debug
window.Store = Store;

Store.initialize();

export default Store;
