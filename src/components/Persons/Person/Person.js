import React, {Component, Fragment} from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css'
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    // const style = {  //If you are not using styled-components
    //     '@media(min-width: 500px)': {
    //         width: '450px'
    //     }
    // };

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    render() {

        console.log('[Person.js] rendering...');

        return (
            <Aux>
                {/*// <div className="Person" style={style}> //If you are not using styled-components*/}
                {/*// <div className={classes.Person}>*/}
                <AuthContext.Consumer>
                    {context =>
                        context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                {/*// CS children accesses anything b/w the opening and closing tags of a JSX element*/}
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);

