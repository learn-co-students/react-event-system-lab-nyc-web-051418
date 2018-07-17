// Code Keypad Component Here
import React, {Component} from 'react'

class Keypad extends Component {
  constructor() {
    super()
  }

  handleKeyUp = () => {
    console.log('Entering password...')
  }

  render(){
    return (
      <input onKeyUp={this.handleKeyUp} type="password" />
    )
  }
}

export default Keypad;
