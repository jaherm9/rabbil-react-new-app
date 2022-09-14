import React, {Component} from 'react';
import HomePage from "./pages/HomePage";

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <HomePage/>
            </div>
        );
    }
}

export default App;


// functional component
/*
import React from 'react';
import HomePage from "./pages/HomePage";

const App = () => {
    return (
        <div>
          <HomePage/>
        </div>
    );
};

export default App;
*/
