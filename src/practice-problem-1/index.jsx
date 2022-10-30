import React from "react";

class PracticeProblem1 extends React.Component {

    state = {
        count: 0
    }

    intervalId = null;

    incrementTimer = () => { 
        this.setState({count: this.state.count + 1});
    }

    decrementTimer = () => { 
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1});
        }
    }

    startTimer = () => {
        if(this.state.count > 0) {
            this.intervalId = setInterval(() => {
                this.setState({count: this.state.count - 1}, () => {
                    if(this.state.count == 0) {
                        alert("Timer finished");
                        clearInterval(this.intervalId);
                        this.intervalId = null;
                    }
                });
            }, 1000);
        }
    }

    pauseTimer = () => {
        if(this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    resetTimer = () => {
        this.setState({count: 0});
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    render() {
        return (
            <div className="container text-center">
                <h1 className="my-3">Bismillah, Chapter Five: Practice Problem 1</h1>
                <div className="mt-5">
                    <button onClick={this.decrementTimer} className="btn btn-outline-warning">-</button>
                    <span className="countVar">
                        {this.state.count<10 ? "0"+this.state.count : this.state.count}
                    </span>
                    <button onClick={this.incrementTimer} className="btn btn-outline-success">+</button>
                </div>
                <div className="mt-3">
                    <button onClick={this.startTimer} className="btn btn-outline-primary">Start</button>
                    <button onClick={this.pauseTimer} className="btn btn-outline-info">Pause</button>
                    <button onClick={this.resetTimer} className="btn btn-outline-danger">Reset</button>
                </div>
            </div>

        );
    }
}

export default PracticeProblem1;