import React from 'react';
import styled from 'styled-components';
import './Person.css'

const StyledDiv = styled.div`
            width: 60%;
            margin: 20px auto;
            border: 1px solid #eee;
            box-shadow: 0 2px 3px #ccc;
            padding: 16px;
            text-align: center;
            
            @media (min-width: 500) {
                width: 450px;
            }
        `;

const person = (props) => {
    // const style = {  //If you are not using styled-components
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    return (
        // <div className="Person" style={style}> //If you are not using styled-components
        <StyledDiv>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            {/*CS children accesses anything b/w the opening and closing tags of a JSX element*/}
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
};

export default person;

