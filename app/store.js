import _ from 'underscore';
import Backbone from 'backbone';
import EntreeCollection from './models/entree-collection';

let entree = new EntreeCollection();


const Store = _.extend({}, Backbone.Events, {
  initialize() {
    this.listenTo(entree, 'add remove change',() => {
      this.trigger('change');
    });
  },

  getEntree() {
    return entree.toJSON();
  },

  fetchEntree() {
    return entree.fetch();
  },

});

Store.initialize();

export default Store;
