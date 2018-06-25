import React from "react";
import template from "./template.html.js";
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import ModalExampleControlled from '../../components/Modal/Modal.jsx'

class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state = { modalOpen: false }
    }

    openModal(){
        this.setState({ modalOpen: true });
      } 
    
    closeModal(){
        this.setState({ modalOpen: false });
      }

    render(){
        return template.apply(this)
        
    }
}

export default Loader;