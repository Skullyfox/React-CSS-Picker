import * as React from 'react';
import * as _ from 'lodash';
export default function () {
    return React.createElement('div', { 'className': 'home flex columns center centered' }, React.createElement('p', { 'className': 'title' }, 'Bienvenue sur CSS-Picker.foxhub.fr'), React.createElement('p', { 'className': 'subtitle' }, 'Qu\'est-ce que c\'est ?'), React.createElement('p', { 'className': 'description-1' }, '\n        CSS-Picker est une application regroupera :\n        ', React.createElement('ul', {}, React.createElement('li', {}, '- Des animations Keyframes,'), React.createElement('li', {}, '- Des dégradés de couleurs,')), '\n        Et pleins d\'autres choses qui seront listés dans le menu de gauche. ', React.createElement('br', {})), React.createElement('p', { 'className': 'description-2' }, '\n        Vous aurez la possibilité, en cliquant sur l\'un des produits, ', React.createElement('br', {}), '\n        de copier le code CSS de celui-ci pour l\'ajouter à votre projet Web !\n    '));
}