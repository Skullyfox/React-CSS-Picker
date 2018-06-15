import template      from './template.html.js';

class Menu extends React.Component{
    constructor (props) {
        super(props);
    }

    render(){
        return template.apply(this);
    }
}

export default Menu;