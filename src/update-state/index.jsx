import React from "react";

/**
 * Chapter 5: Why we need State?
 * Answer: If we want to change or update any thing that comes from user or server-end then we need to update.
 * Like if we want to change our representation layer than we need to update our data / logic layer first
 */

class AttemptUpdate extends React.Component {

    count = 10;

    render () {
        return (
            <div className="container text-center mt-3">
                <h1>Bismillah, Chapter 5: Why we need state?</h1>
                <h3>Count: {this.count}; [Check Console Log]</h3>
                <button className="btn btn-outline-secondary mt-5" onClick={ () => {
                    this.count++;
                    console.log('Clicked ', this.count);
                    // Here it work fine. but count value in display or view not changing.
                    // Because if you want to change state then you need to use setState() function
                }}> Add + 1</button>                
            </div>
        );
    }
}

export default AttemptUpdate;