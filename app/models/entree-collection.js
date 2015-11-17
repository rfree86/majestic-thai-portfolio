import Menu from './menu';

var EntreeCollection = Backbone.Collection.extend({
  model: Menu,
  url: "https://api.parse.com/1/classes/entree",
  parse(response) {
    return response.results;
  }
});

export default EntreeCollection;
