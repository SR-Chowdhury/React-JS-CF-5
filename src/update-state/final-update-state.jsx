import React from "react";

class FinalUpdateState extends React.Component {

    state = {
        count: 20
    };

    render () {

        return (
            <div className="container text-center mt-3">
                <h1>Final Update State</h1>
                <h3>Count: {this.state.count}; [Check Console Log]</h3>
                <button className="btn btn-outline-secondary mt-5" onClick={ () => {
                    this.setState(
                        // Using a call back function for changing data layers value
                        prev_value => {
                            return {
                                count: prev_value.count + 1,
                            };
                        },
                        // Using another callback function for getting updated state value
                        () => {
                            console.log('Clicked ', this.state.count);
                        }
                    );
                    
                    // done! we can get same result from representation layer and console

                }}> Add + 1</button>                
            </div>
        );
    }
}

export default FinalUpdateState;