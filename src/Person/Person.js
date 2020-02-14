import React from 'react';

import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/*CS children accesses anything b/w the opening and closing tags of a JSX element*/}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;

