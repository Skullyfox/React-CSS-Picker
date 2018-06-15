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


        /* let menu = document.querySelector('.dropDownCategory');

        if(!this.state.toggled){
            setTimeout(
                () => {
                    menu.style='display : none;'
                },
            800);
        } else {
            menu.style='display : block;'
        } */
    }

    render(){
        return template.apply(this);
    }
}

export default Menu;