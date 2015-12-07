import React from 'react';
import BackboneMixin from '../mixins/Backbone';
import store from '../store';
import Sticky from 'react-sticky';

const App = React.createClass({

  mixins: [BackboneMixin],

  getInitialState() {
    return {
      total: 0
    }
  },


  componentWillMount() {
    store.fetchEntree();
    store.fetchStarter();
    store.fetchSoup();
  },

  // sets up the state of this component
  getModels() {
    return {
      entree: store.getEntree(),
      starter: store.getStarter(),
      soup: store.getSoup(),
      order: store.getOrder(),
    }
  },

  addToOrder(item) {
  var order= store.addOrder(item);
  this.addToTotal(item);

  },

  removeFromOrder(item) {
  var order = store.removeOrder(item);
  this.removeFromTotal(item);
  },

  addToTotal(item) {
    let subtotal = Number(this.state.total);
    this.setState({
      total: (subtotal + item.price).toFixed(2)
    });

  },

  removeFromTotal(item) {
    let subtotal = Number(this.state.total);
    this.setState({
      total: (subtotal - item.price).toFixed(2)
    });
  },



  render() {

    var entrees = this.state.entree;
    var starters = this.state.starter;
    var soups = this.state.soup;
    var orders = this.state.order;



    return (
      <div className="body">

        <div className = "row-column header">
          <div className="overlay"></div>
          <h1 className = "header-title">Welcome to Majestic Thai</h1>
          <ul className="vertical medium-horizontal menu expanded text-center links">
            <li><a className="link" href="#entree">Entrees</a></li>
            <li><a className="link" href="#starters">Starters</a></li>
            <li><a className="link" href="#soups">Soups</a></li>
          </ul>
        </div>
    <div className = "outer-container">

       <div className = "menu-list">
         <h1 className = "menu-title">Menu Items</h1>

         <ul id="entree" className= "menu-ul">
           <li className="entree-picture"><h1 className ="entree-title">Entrees</h1></li>
           {entrees.map((e) => {
               return (<li key={e.objectId}><h4 className ="food-title">{e.title}</h4>
                <p className ="description">{e.description}  </p>
                <span className = "order-button"><button onClick={this.addToOrder.bind(this, e)} className = "success tiny round">Order</button>  <span>${e.price}</span></span>
                <hr/>
               </li>)
           })}
         </ul>

         <ul id="starters" className= "menu-ul">
           <li className = "starters-picture"><h1 className = "starter-title">Starters</h1></li>
            {starters.map((s) => {
              return (<li key={s.objectId}><h4 className ="food-title">{s.title}</h4>
               <p className = "description">{s.description}  </p>
              <span className = "order-button"><button onClick={this.addToOrder.bind(this, s)} className = "success tiny round">Order</button>  <span>${s.price}</span> </span>
               <hr/>
               </li>)
             })}
         </ul>

          <ul id="soups" className= "menu-ul">
            <li  className = "soup-picture"><h1 className = "soup-title">Soups</h1></li>
              {soups.map((s) => {
                return (<li key={s.objectId}><h4 className = "food-title">{s.title}</h4>
                <p className = "description">{s.description}  </p>
              <span className = "order-button"><button onClick={this.addToOrder.bind(this, s)} className = "success tiny round">Order</button> <span>${s.price}</span> </span>
                <hr/>
            </li>)
                  })}
          </ul>
        </div>

        <Sticky stickyClass="supersticky" className="order" stickyStyle ={{}}>
        <div className = "order-menu">
          <h4 className = "order-title">
            order list
          </h4>
          <ul className = "order-title">
            {orders.map((o) => {
              return (<li key={o.objectId} className = "order-item">{o.title} ${o.price} <span onClick = {this.removeFromOrder.bind(this, o)}>X</span></li>)
            })}
          </ul>
          <span> Subtotal = ${this.state.total}</span>
        </div>
        </Sticky>

      </div>

      </div>
    );
  }
});

export default App;
