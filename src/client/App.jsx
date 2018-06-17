import React                              from 'react';
import { BrowserRouter, Switch, Route}    from 'react-router-dom';

import Home                               from './pages/Home/Home.jsx';
import Menu                               from './components/Menu/Menu.jsx';
import Loader                          from './pages/Loader/Loader.jsx';

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
                        <Route path="/" component={Loader}/>
                        <Route path="/Loader" component={Loader}/>
                    </Switch>
                </React.Fragment>    
            </BrowserRouter>
        )
    }
}

export default App;