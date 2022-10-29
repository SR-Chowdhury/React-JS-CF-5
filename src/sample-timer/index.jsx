import React from "react";

class SampleTimer extends React.Component {

    state = {
        count: 0,
    };
    intervalID = null;

    incrementTimer = () => {
        this.setState({count: this.state.count + 1});
    }

    decrementTimer = () => {
        if(this.state.count > 0) {
            this.setState({count: this.state.count - 1});
        }
    }

    startTimer = () => {
        if(this.state.count > 0 && !this.intervalID) {
            this.intervalID = setInterval(() => {
                this.setState({count: this.state.count - 1},
                    () => {
                        if(this.state.count == 0) {
                            alert('Timer finished');
                            clearInterval(this.intervalID);
                            this.intervalID = null;
                        }
                    });
            }, 1000);
        }
    }

    pauseTimer = () => {
        if(this.intervalID) {
            clearInterval(this.intervalID);
            this.intervalID = null;
        }
    }

    resetTimer = () => {
        this.setState({count: 0});
        clearInterval(this.intervalID);
        this.intervalID = null;
    }

    render() {
        return (
            <div className="container text-center">
                <h1 className="my-3">Bismillah, Chapter Five: Sample Timer</h1>
                <div className="mt-5">
                    <button onClick={this.decrementTimer} className="btn btn-outline-secondary">-</button>
                    <span className="countVar">{this.state.count}</span>
                    <button onClick={this.incrementTimer} className="btn btn-outline-secondary">+</button>
                </div>
                <div className="mt-3">
                    <button onClick={this.startTimer} className="btn btn-outline-secondary">Start</button>
                    <button onClick={this.pauseTimer} className="btn btn-outline-secondary">Pause</button>
                    <button onClick={this.resetTimer} className="btn btn-outline-secondary">Reset</button>
                </div>
            </div>

        );
    }
}

export default SampleTimer;