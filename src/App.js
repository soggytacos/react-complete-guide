import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app!</h1>
        <p>This is really working!</p>
        {/*<Person /> is calling the person component from Person.js file*/}
        <Person name ="Colman" age="26"/>
        <Person name="Max" age="28">My Hobbies: Racing</Person>
        <Person name="Marco" age="27"/>
      </div>
    );
    //The above code is not HTML but JSX, it's compiled to the exact same as the below code
    //([element that's rendered to the DOM], [configuration (JS Object)], [children...])
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
