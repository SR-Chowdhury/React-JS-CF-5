import React from "react";

/**
 * Chapter 5: What is State?
 * Answer: State means data of a component. In React state of a component can declare by two ways.
 * Method 2: 
 */

class Method2 extends React.Component {

    count = 5; // we can declare property like this if React version > 16.0


    render () {
        return (
            <div>
                <h3>Count: {this.count} [We got that value from state of this class]</h3>
            </div>
        );
    }
}

export default Method2;