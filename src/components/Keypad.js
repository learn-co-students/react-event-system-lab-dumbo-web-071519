import React, { Component } from 'react';

export default class Keypad extends Component {

  state = {}

 eventHandlerKeyUp = () => {
   return console.log('Entering password...')
 }

  render() { 
    return <input type="password" onKeyUp={ this.eventHandlerKeyUp } />
  }

}
