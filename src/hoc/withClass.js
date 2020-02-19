import React from 'react';

const withClass = (WrappedComponent, className) => {

    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );


    //alternative function body for a higher order component
    // <div className={props.classes}>
    //     {props.children}
    // </div>
};

export default withClass;