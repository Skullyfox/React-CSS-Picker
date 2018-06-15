import React from 'react';
import template      from './template.html.js';

class Menu extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            toggled : true,
        }
    }

    droppedToggle(){
        this.setState({ toggled : !this.state.toggled })
    }

    render(){
        return template.apply(this);
    }
}

export default Menu;