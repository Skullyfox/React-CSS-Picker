import * as React from 'react';
import * as _ from 'lodash';
import keyframesList from '../../components/keyframesList/keyframesList.jsx';
export default function () {
    return React.createElement('div', { 'className': 'Loader' }, React.createElement('div', { 'className': 'category flex columns center centered' }, React.createElement('p', {}, 'Loader')), React.createElement(keyframesList, {}));
}