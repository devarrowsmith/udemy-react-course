import React from 'react';



const Person = props => {
  return (
    <div>
      <p>Hey! I'm {props.name}! I'm {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
};

//In the code above, props.children allows us to pass HTML elements into this component at the parent level.
// When this component is called in the parent, we put this structured HTML in the 'person' element (component) we create in JSX.
// eg. <Person> <h1>This is the material accessed by props.children.</h1></Person>

export default Person;