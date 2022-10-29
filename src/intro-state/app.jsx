import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Method1 from ".";
import Method2 from "./method2";

class App extends React.Component {

    render() {
        return (
            <div className="container my-5">
                <Method1/>
                <Method2/>
            </div>
        );
    }
}

export default App;