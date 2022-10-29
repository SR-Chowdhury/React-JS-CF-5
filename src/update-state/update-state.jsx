import React from "react";

class UpdateState extends React.Component {

    state = {
        count: 0
    };

    render () {

        return (
            <div className="container text-center mt-3">
                <h1>How does state work?</h1>
                <h3>Count: {this.state.count}; [Check Console Log]</h3>
                <button className="btn btn-outline-secondary mt-5" onClick={ () => {
                    this.setState({
                        count: this.state.count + 1
                    });
                    console.log('Clicked ', this.state.count);
                    // Here it works fine. And representation means count value also changing.
                    // As setState() is asynchronous so representation value and console value wont same.
                }}> Add + 1</button>                
            </div>
        );
    }
}

export default UpdateState;