import Menu from './menu';

var StarterCollection = Backbone.Collection.extend({
  model: Menu,
  url: "https://api.parse.com/1/classes/starter",
  parse(response) {
    return response.results;
  }
});

export default StarterCollection;
