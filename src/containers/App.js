import React, {Component} from 'react';
// import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// const StyledButton = styled.button`
//             background-color: ${props => props.alt ? 'red' : 'green'};
//             color: white;
//             font: inherit;
//             border: 1px solid blue;
//             padding: 8px;
//             cursor: pointer;
//
//             &:hover {
//                 background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//                 color: black;
//             }`;

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            {id: '123123', name: 'Colman', age: 26},
            {id: '123124', name: 'Marco', age: 27},
            {id: '123125', name: 'Max', age: 28}
        ],
        otherState: 'some other value',
        showPersons: false,
        showCockpit: true
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props)
        return state;
    }

    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }


    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({persons: persons});
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }

    //switches the state (boolean)
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        //showPersons is equal to the opposite of doesShow
        this.setState({showPersons: !doesShow})
    }

    render() {
        console.log('[App.js] render');

        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler}/>;
        }

        return (
            <div className={classes.App}>
                <button onClick={() => {
                    this.setState({showCockpit: false});
                }}>Remove Cockpit
                </button>
                {this.state.showCockpit ? (
                    <Cockpit
                        title={this.props.appTitle}
                        showPersons={this.state.showPersons}
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                    />
                ) : null}
                {persons}
            </div>
        );
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
    }
}

export default App;
