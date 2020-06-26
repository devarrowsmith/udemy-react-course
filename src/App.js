import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

//Here we define the component'S State, an Object containing parameters.
//If anything in a component's State is changed while the app is rendered, React will update that component in the DOM; so it will update the page. 
  state = {
    persons: [
      { name: 'David', age: 25 },
      { name: 'Pablo', age: 28 },
      { name: 'Dani', age: 26 }
    ]
  }

  // Here we render the direct Child component(/s).
  render() {
    return (
      <div className="App">
       <h1>Hi! I'm a React app!</h1>
       <button>Switch Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
         <p>This text is a child of a Perosn component. Children can be passed to a component using the reserved word 'children'.</p>
         <p>You can pass in a ton of structured HTML using props.children.</p> 
      </Person>
      </div>
    );

    //NB: Any children of the child components (grandchildren of app.js, if you will), should be rendered within those children. A sensible heirarchy of components must be maintained so that the app's modules are composed in a sensible human-useable structure.


  /* the code above compiles to:
    return React.createElement(
      'div', {className: 'App'}, React.createElement(
        'h1', null, `Hi! I'm a React app!`
      ));
  */
  }
}

export default App;
