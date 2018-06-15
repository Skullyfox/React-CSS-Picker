import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <h1>Hello World</h1>
            </BrowserRouter>
        )
    }
}

export default App;