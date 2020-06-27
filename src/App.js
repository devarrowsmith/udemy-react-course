import React, { Component, useState } from 'react';
import './App.css';
import Person from './Person/Person'


//We begin constructing the component by defining it in one of two ways.
// Where possible it's preferable to use functiopn expressions as components. These are called Pure components. A key feature of Pure components is that they do not have State.

// If we require state then we define the component as a Class component. We create a class which extends the 'Component' prototype provided by React. The Component prototype contains the key methods and features required for the component to work in its very specific manner.

// NB: Technically functional components -can- have state these days, since a React update added a feature for this. A feature called React Hooks is used for this. But use of classes is the established method that most companies continue to use, according to my current course. So it's required knowledge. 

//See Footnote 1 for the syntax.
class App extends Component {

//Here we define the component's State, an Object containing parameters.
//If anything in a component's State is changed while the app is rendered, React will update that component in the DOM; so it will update the page.
//While Props are passed down the component tree to children, State is configured within the component itself.
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
    // React does NOT allow this kind of direct mutation of state. Instead we use a special method which merges new content with the existing state, and lets React know about it so it can update the DOM appropriately:
    this.setState({
      persons: [
        { name: 'Andy', age: 25 },
        { name: 'Carlos', age: 28 },
        { name: 'Carley', age: 26 }
      ]
    })
    // This only updates the specified bit of state, and it only updates that part of the DOM. Only changing state and/or changing props causes these kind of real-time DOM updates, as I currently understand it.
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



// NB: Technically functional components -can- have state these days, since a React update added a feature for this. A feature called React Hooks is used for this. But use of classes is the established method that most companies continue to use, according to my current course. So it's required knowledge.



///////////////////////////////////////////////////////////////////////////
//Footnote 1: Using React Hooks
/*

//We need to import the useState method from React at the top of the js file. This is an example of a Hook. Other hooks exist and will be used later.

import React, { useState} from 'react'

//On to creating the component! We define the component as a functional component.

  const App = props => {

// We use the useState hook to define the initial state of the component.
// UseState returns an array with -exactly two- elements:
  // The first element is the current state.
  // The second element is a function that can update the first element and re-render it. We can call this to update the state. Nifty" the syntax is:
// We can store this in a constant.

    const stateArray = useState({
      persons: [
        { name: 'David', age: 25 },
        { name: 'Pablo', age: 28 },
        { name: 'Dani', age: 26 }
      ]
    });

// Oh, but we can go a step further! We can use Array Destructuring to attach these elements to variables, so that we can call them easily. Array destructuring is like object destructuring; `const [  element1, element2] = array`.

    const [personsState, setPersonsState] = useState({
      persons: [
        { name: 'David', age: 25 },
        { name: 'Pablo', age: 28 },
        { name: 'Dani', age: 26 }
      ]
    });

// We also include the switch name handler function in the functional component. Looks strange, but it's just fine for building functional components using React hooks.

// There are two semantic differences here compared to the Class based component. 
  // We no longer need to use the 'this.' keyword to call things from whtihin thic omponent. Classes need to use 'this.', so class based components need to use 'this.'. However functional components are functions,a nd these can call their own properties using just the property's name.
  // Previously we called state using this.setState. Now we use the  setPersonsState method from the destructured useState expression above, and pass the new state into it.

    const switchNameHandler = () => {
      useState({
        persons: [
          { name: 'Andy', age: 25 },
          { name: 'Carlos', age: 28 },
          { name: 'Carley', age: 26 }
        ]
      })
    }

// The Render part of the component is basically the same, but again we don't need to use .this where we did previously and we access the destructured `personsState` rather than `this.state` when providing some values.

    render() {
      return (
        <div className="App">
         <h1>Hi! I'm a React app!</h1>
         <button onClick={switchNameHandler}>Switch Name</button>
         <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
         <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>
           <p>This text is a child of a Perosn component. Children can be passed to a component using the reserved word 'children'.</p>
           <p>You can pass in a ton of structured HTML using props.children.</p> 
        </Person>
        </div>
      );
   }
}





*/
