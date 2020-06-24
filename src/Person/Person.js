import React from 'react';



const Person = props => {
  return <p>Hey! I'm a person! I'm {Math.floor((Math.random())*100)} years old!</p>
};

export default Person;