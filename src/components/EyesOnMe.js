// Code EyesOnMe Component Here
import React, { Component } from 'react';
class EyesOnMe extends Component {
  constructor(props) {
    super(props);
  }

  onFocus = (event) => {
    console.log('Good!')
  }

  onBlur = (event) => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
    )
  }
}

export default EyesOnMe
