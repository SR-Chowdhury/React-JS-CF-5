import React from "react";

/**
 * Chapter 5: What is State?
 * Answer: State means data of a component. It is a object. In React state of a component can declare by two ways.
 * Method 1: React version < 16.0
 */

class Method1 extends React.Component {

    constructor(props) {
        super(props);
        this.count = 0; // we can use anywhere within this class with the help of 'this' keyword
    }

    render () {
        return (
            <div>
                <h1>Bismillah, Chapter 5: What is Sate?</h1>
                <h3>Count: {this.count} [We got that value from constructor of this class]</h3>
            </div>
        );
    }
}

export default Method1;

