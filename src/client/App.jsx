import React                              from 'react';
import { BrowserRouter, Switch, Route}    from 'react-router-dom';

import Home                               from './pages/Home/Home.jsx';
import Menu                               from './components/Menu/Menu.jsx';
import Keyframes                          from './pages/Keyframes/Keyframes.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Menu />
                    <Switch>
                        <Route path="/" component={Home}/>
                        <Route path="/keyframes" component={Keyframes}/>
                    </Switch>
                </React.Fragment>    
            </BrowserRouter>
        )
    }
}

export default App;