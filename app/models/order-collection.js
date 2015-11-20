import Menu from './menu';

var OrderCollection = Backbone.Collection.extend({
  model: Menu,
  comparator: 'price'

});
export default OrderCollection;
