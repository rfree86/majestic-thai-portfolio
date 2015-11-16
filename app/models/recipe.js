import store from '../store';
import User from './user';
import _ from 'underscore';

var Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',
  urlRoot: "https://api.parse.com/1/classes/Recipe",

  url: function() {
    var base = _.result(this, 'urlRoot');
    if (this.isNew()) return base;
    var id = this.get(this.idAttribute);
    return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id) + "?include=creator";
  },

  defaults() {
    return {
      ingredients: [],
    }
  },

  parse(response) {
    return response;
  },

  toJSON(options) {
    // I'm saving the model
    if(options) {
      return _.extend({}, this.attributes, {
      });
    } else { // I'm using toJSON to use with React
      return _.extend({}, this.attributes, {
      });
    }
  },
});

export default Recipe;
