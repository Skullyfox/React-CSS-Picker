import React                              from 'react';
import { BrowserRouter, Switch, Route}    from 'react-router-dom';


import Home                               from './pages/Home/Home.jsx';
import Menu                               from './components/Menu/Menu.jsx';
import Loader                             from './pages/Loader/Loader.jsx';
import KeyframesList from './components/keyframesList/keyframesList.jsx'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            homeView: true,
            loaderView: false,
        }
        this.goLoaderView = this.goLoaderView.bind(this);
        this.goMenuView = this.goMenuView.bind(this);
    }

    goLoaderView(){
        this.setState({
            loaderView : true,
            homeView: false
        })
    }

    goMenuView(){
        this.setState({
            loaderView : false,
            homeView: true
        })
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Menu 
                        onClick={this.goLoaderView} 
                        onClick2={this.goMenuView} 
                        />
                        {this.state.homeView ? (<Home />): null}
                        {this.state.loaderView ? (<Loader />): null}
                </React.Fragment>    
            </BrowserRouter>
        )
    }
}

export default App;