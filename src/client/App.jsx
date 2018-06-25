import React                              from 'react';
import { BrowserRouter, Switch, Route}    from 'react-router-dom';


import Home                               from './pages/Home/Home.jsx';
import Menu                               from './components/Menu/Menu.jsx';
import Loader                             from './pages/Loader/Loader.jsx';
import Gradient                             from './pages/Gradient/Gradient.jsx';
import KeyframesList from './components/keyframesList/keyframesList.jsx'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            homeView: true,
            loaderView: false,
            gradientView: false,
        }
        this.goLoaderView = this.goLoaderView.bind(this);
        this.goHomeView = this.goHomeView.bind(this);
        this.goGradientView = this.goGradientView .bind(this);
    }

    goLoaderView(){
        this.setState({
            loaderView : true,
            homeView: false,
            gradientView: false,
        })
    }

    goHomeView(){
        this.setState({
            loaderView : false,
            homeView: true,
            gradientView: false,
        })
    }

    goGradientView(){
        this.setState({
            loaderView : false,
            homeView: false,
            gradientView: true,
        })
    }

    render() {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <Menu 
                        goLoader={this.goLoaderView} 
                        goHome={this.goHomeView}
                        goGradient={this.goGradientView}  
                        />
                        {this.state.homeView ? (<Home />): null}
                        {this.state.loaderView ? (<Loader />): null}
                        {this.state.gradientView ? (<Gradient />): null}
                </React.Fragment>    
            </BrowserRouter>
        )
    }
}

export default App;