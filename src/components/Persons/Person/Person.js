import React, {Component} from 'react';
import classes from './Person.css'

class Person extends Component {
    // const style = {  //If you are not using styled-components
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // };
    render() {

        console.log('[Person.js] rendering...');

        return (
            // <div className="Person" style={style}> //If you are not using styled-components
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                {/*CS children accesses anything b/w the opening and closing tags of a JSX element*/}
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
};

export default Person;

