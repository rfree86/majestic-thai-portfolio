import React from 'react';
import BackboneMixin from '../mixins/Backbone';
import store from '../store';
import Sticky from 'react-sticky';

const App = React.createClass({

  mixins: [BackboneMixin],

  getInitialState() {
    return {
      order: []
    };
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
    }
  },

  addToOrder() {
var order= store.addOrder(this.state.entree);

  },

  render() {

    var entrees = this.state.entree;
    var starters = this.state.starter;
    var soups = this.state.soup;


    return (
      <div>
        <div className = "header">
          <h1 className = "header-title">Majestic Thai</h1>
          </div>
    <div className = "outer-container">


       <div className = "menu-list">
         <h1 className = "menu-title">Menu Items</h1>

         <ul>
           <li className="entree-picture"><h1 className ="entree-title">Entrees</h1></li>
           {entrees.map((e) => {
               return (<li key={e.objectId}><h4 className ="food-title">{e.title}</h4>
                <p className ="description">{e.description}  </p>
                <span className = "order-button"><button onClick={this.addToOrder} className = "success tiny round">Order</button>  <span>${e.price}</span></span>
                <hr/>
               </li>)
           })}
         </ul>

         <ul>
           <li className = "starters-picture"><h1 className = "starter-title">Starters</h1></li>
            {starters.map((s) => {
              return (<li key={s.objectId}><h4 className ="food-title">{s.title}</h4>
               <p className = "description">{s.description}  </p>
              <span className = "order-button"><button className = "success tiny round">Order</button>  <span>${s.price}</span> </span>
               <hr/>
               </li>)
             })}
         </ul>

          <ul>
            <li className = "soup-picture"><h1 className = "soup-title">Soups</h1></li>
              {soups.map((s) => {
                return (<li key={s.objectId}><h4 className = "food-title">{s.title}</h4>
                <p className = "description">{s.description}  </p>
              <span className = "order-button"><button className = "success tiny round">Order</button> <span>${s.price}</span> </span>
                <hr/>
            </li>)
                  })}
          </ul>
        </div>

        <Sticky stickyClass="supersticky" stickyStyle ={{}}>
        <div className = "order-menu">
          <h4 className = "order-title">
            order list
          </h4>
          <ul>
            <li className = "order-item">food item <i className="fa fa-times-circle"> <span className = "order-delete"> delete</span></i></li>
          </ul>
        </div>
        </Sticky>

      </div>

      </div>
    );
  }
});

export default App;
