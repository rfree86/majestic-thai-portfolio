import Order from './order';

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  comparator: 'price'

});
export default OrderCollection;
