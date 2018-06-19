import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    return React.createElement('div', { 'className': 'menu' }, React.createElement('h1', { 'className': 'menuTitle' }, 'Menu'), React.createElement('div', { 'className': 'separator' }), React.createElement('button', {
        'id': 'homeButton',
        'className': 'dropDownToggler',
        'onClick': this.props.onClick2
    }, 'Home'), React.createElement('button', {
        'id': 'firstCategoryButton',
        'className': 'dropDownToggler',
        'onClick': () => this.droppedToggle()
    }, 'Keyframes'), React.createElement('div', { 'className': 'dropDownCategory ' + (this.state.toggled ? 'hidden' : '') }, React.createElement('li', { 'onClick': this.props.onClick }, React.createElement('p', {}, 'Loader Picker')), React.createElement('li', {}, React.createElement('p', {}, '[Coming Soon]')), React.createElement('li', {}, React.createElement('p', {}, '[Coming Soon]'))), React.createElement('button', {
        'id': 'secondCategoryButton',
        'className': 'dropDownToggler'
    }, '[Coming Soon]'));
}