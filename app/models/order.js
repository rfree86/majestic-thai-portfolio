var Order = Backbone.Model.extend({
  idAttribute: 'objectId',
  defaults: {
    title: "",
    description: "",
    //price in cents
    price: 0,
    category: ""
  }

});

export default Order;
