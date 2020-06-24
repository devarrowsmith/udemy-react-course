import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi! I'm a React app!</h1>
      </div>
    );


  /* the code above compiles to:
    return React.createElement(
      'div', {className: 'App'}, React.createElement(
        'h1', null, `Hi! I'm a React app!`
      ));
  */
  }
}

export default App;
