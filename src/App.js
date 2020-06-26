import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

//Here we define the component's State, an Object containing parameters.
//If anything in a component's State is changed while the app is rendered, React will update that component in the DOM; so it will update the page. 
  state = {
    persons: [
      { name: 'David', age: 25 },
      { name: 'Pablo', age: 28 },
      { name: 'Dani', age: 26 }
    ]
  }

  //Here's an event handler for the button component below. We may want to put this into a different document later, along with the button itself, to make the code properly modular.

  switchNameHandler = () => {
    // Previously we may have done something like this:
    //this.state.persons[0].name = 'Dave'
    // React does NOT allow this kind of direct mutation of state. Instead we use a special method which merges new content with the esxisting state, and lets React know about it so it can update the DOM appropriately:
    this.setState({
      persons: [
        { name: 'Andy', age: 25 },
        { name: 'Carlos', age: 28 },
        { name: 'Carley', age: 26 }
      ]
    })
    // This only updates the specified bit of state, and it only updates that part of the DOM. Only chanding state and changing props cause these kind of realtime DOM updates :3
  }

  // Here we render the direct Child component(/s).
  render() {
    return (
      <div className="App">
       <h1>Hi! I'm a React app!</h1>
       <button onClick={this.switchNameHandler}>Switch Name</button>
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
