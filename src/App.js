import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>Hi! I'm a React app!</h1>
       <Person name='David' age='25' />
       <Person name='Pablo' age='27' />
       <Person name='Dani' age='26' > This text is a child of a Perosn component. Children can be passed to a component using the reserved word 'children'. </Person>
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
