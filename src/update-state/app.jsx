import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import AttemptUpdate from ".";
import UpdateState from "./update-state";
import FinalUpdateState from "./final-update-state";


class App extends React.Component {

    render() {
        return (
            <div className="container my-5">
                <AttemptUpdate/>
                <UpdateState/>
                <FinalUpdateState/>
            </div>
        );
    }
}

export default App;