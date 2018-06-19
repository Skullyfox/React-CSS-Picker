import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import template from './template.html.js';

export default class KeyframesList extends Component {
  constructor(props){
    super(props);
    this.state = { 
    dimmer: 'blurring',
    modalOpen: false,
    keyframes: {
        "CircleOne": {
            "class" : "circle one",
            "title" : "Circle One",
            "code"  : `
            /* Sass */

            .circle
                height: 50px
                width: 50px 
                border-radius: 100%
                animation: circleLoad 1s infinite linear
                border: 3px solid $primary
                border-bottom-color: $black

            @keyframes circleLoad
                0%
                    transform: rotate(0deg)
                100%
                    transform: rotate(360deg)
            `
        },
        "CircleTwo": {
            "class" : "circle two",
            "title" : "Circle Two",
            "code"  : `
            /* Sass */

            .circle
                height: 50px
                width: 50px 
                border-radius: 100%
                animation: circleLoad 1s infinite linear
                border: 5px dotted $primary
                border-bottom-color: $black

            @keyframes circleLoad
                0%
                    transform: rotate(0deg)
                100%
                    transform: rotate(360deg)
            `
        },
        "CircleThree": {
            "class" : "circle three",
            "title" : "Circle Three",
            "code"  : `
            /* Sass */

            .circle
                height: 50px
                width: 50px 
                border-radius: 100%
                animation: circleLoad 1s infinite linear
                border: 3px dashed $primary
                border-bottom-color: $black

            @keyframes circleLoad
                0%
                    transform: rotate(0deg)
                100%
                    transform: rotate(360deg)
            `
        },
        "CircleFour": {
            "class" : "circle four",
            "title" : "Circle Four",
            "code"  : `
            /* Sass */

            .circle
                height: 50px
                width: 50px 
                border-radius: 100%
                animation: circleLoad 1s infinite linear
                border: 3px double $primary
                border-bottom-color: $black

            @keyframes circleLoad
                0%
                    transform: rotate(0deg)
                100%
                    transform: rotate(360deg)
            `
        }
    },
    selectedItem: {}
     };
  }

  openModal(kf){
    this.setState({ modalOpen: true, selectedItem : kf });
    console.log(kf);
  } 

  closeModal(){
    this.setState({ modalOpen: false });
  }

  render() {
    return template.apply(this);
  }
}