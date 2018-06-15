import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    return React.createElement('div', { 'className': 'menu' }, React.createElement('h1', { 'className': 'menuTitle' }, 'Menu'), React.createElement('div', { 'className': 'separator' }), React.createElement('button', {
        'className': 'dropDownToggler',
        'onClick': () => this.droppedToggle()
    }, 'Category #1'), React.createElement('div', { 'className': 'dropDownCategory ' + (this.state.toggled ? 'hidden' : '') }, React.createElement('li', {}, React.createElement('p', {}, 'Keyframes Picker')), React.createElement('li', {}, React.createElement('p', {}, '[Coming Soon]')), React.createElement('li', {}, React.createElement('p', {}, '[Coming Soon]'))), React.createElement('button', { 'className': 'dropDownToggler' }, 'Category #2'));
}