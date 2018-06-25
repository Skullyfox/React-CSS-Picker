import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    return React.createElement('div', { 'className': 'menu' }, React.createElement('h1', { 'className': 'menuTitle' }, 'Menu'), React.createElement('div', { 'className': 'separator' }), React.createElement('button', {
        'id': 'homeButton',
        'className': 'button dropDownToggler',
        'onClick': this.props.goHome
    }, 'Home'), React.createElement('button', {
        'id': 'firstCategoryButton',
        'className': 'button dropDownToggler',
        'onClick': () => this.droppedToggle()
    }, 'Keyframes'), React.createElement('div', { 'className': 'dropDownCategory ' + (this.state.toggled ? 'hidden' : '') }, React.createElement('li', { 'onClick': this.props.goLoader }, React.createElement('p', {}, 'Loaders Basiques')), React.createElement('li', {}, React.createElement('p', {}, '[Coming Soon]')), React.createElement('li', {}, React.createElement('p', {}, '[Coming Soon]'))), React.createElement('button', {
        'id': 'secondCategoryButton',
        'className': 'button dropDownToggler',
        'onClick': this.props.goGradient
    }, 'Gradients'));
}