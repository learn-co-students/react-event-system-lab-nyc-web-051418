// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {
  clog = () => console.log('Entering password...');
  render() {
    return <input type="password" onKeyUp={this.clog} />;
  }
}
