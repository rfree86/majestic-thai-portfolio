import Menu from './menu';

var SoupCollection = Backbone.Collection.extend({
  model: Menu,
  url: "https://api.parse.com/1/classes/soup",
  parse(response) {
    return response.results;
  }
});

export default SoupCollection;
