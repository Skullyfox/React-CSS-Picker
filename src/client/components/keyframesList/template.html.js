import * as React from 'react';
import * as _ from 'lodash';
import { Modal } from 'semantic-ui-react';
import { Header } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';
export default function () {
    function repeatKf1(kf, kfIndex) {
        return [React.createElement('div', {
                'className': 'item flex columns center centered',
                'onClick': () => this.openModal(kf),
                'key': '2501'
            }, React.createElement('div', { 'className': kf.class }), React.createElement(Modal, {
                'open': this.state.modalOpen && this.state.selectedItem === kf,
                'onClose': () => this.closeModal(),
                'basic': true,
                'size': 'small'
            }, React.createElement(Header, {
                'icon': 'code',
                'content': this.state.selectedItem.title
            }), React.createElement(Modal.Content, {}, React.createElement('pre', {}, React.createElement('code', {}, this.state.selectedItem.code))), React.createElement(Modal.Actions, {}, React.createElement(Button, {
                'color': 'green',
                'onClick': () => this.closeModal(),
                'inverted': true
            }, React.createElement(Icon, { 'name': 'checkmark' }), ' Got it\n                    '))))];
    }
    return React.createElement.apply(this, [
        'div',
        { 'className': 'row grid is-4-columns' },
        _.map(this.state.keyframes, repeatKf1.bind(this))
    ]);
}