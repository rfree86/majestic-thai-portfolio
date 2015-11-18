import _ from 'underscore';
import Backbone from 'backbone';
import EntreeCollection from './models/entree-collection';
import StarterCollection from './models/starters-collection';
import SoupCollection from './models/soup-collection';



let entree = new EntreeCollection();
let starter = new StarterCollection();
let soup = new SoupCollection();



const Store = _.extend({}, Backbone.Events, {
  initialize() {
    this.listenTo(entree, 'add remove change',() => {this.trigger('change')});
    this.listenTo(starter, 'add remove change', () => {this.trigger('change')});
    this.listenTo(soup, 'add remove change', () => {this.trigger('change')});
  },

//Entrees////
////
  getEntree() {
    return entree.toJSON();
  },

  fetchEntree() {
    return entree.fetch();
  },


//Starters//
////
  getStarter() {
    return starter.toJSON();
  },

  fetchStarter() {
    return starter.fetch();
  },

//Soups//
///

getSoup() {
  return soup.toJSON();
},

fetchSoup() {
  return soup.fetch();
},

});

Store.initialize();

export default Store;
