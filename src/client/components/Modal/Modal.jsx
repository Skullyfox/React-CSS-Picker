import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
    
    constructor(props){
        super(props);
        state = { modalOpen: false }
    }

    handleOpen(){
        this.setState({ modalOpen: true })
    }

    handleClose(){
        this.setState({ modalOpen: false })
    } 

  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <h3>This website uses cookies to ensure the best user experience.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
