import React from 'react';
import BackboneMixin from '../mixins/Backbone';
import store from '../store';

const App = React.createClass({

  mixins: [BackboneMixin],

  componentWillMount() {
    store.fetchEntree();
  },

  // sets up the state of this component
  getModels() {
    return {
      entree: store.getEntree()
    }
  },

  render() {

    var entrees = this.state.entree;

    return (
      <div>
        <h1>Menu Items</h1>
        <ul>
          <li><h1>Entrees</h1></li>
          {entrees.map((e) => {
              return (<li key={e.objectId}>{e.title} <br/>
              <p>{e.description}  <span>{e.price}</span></p>

              </li>)
          })}
        </ul>
      </div>
    );
  }
});

export default App;
