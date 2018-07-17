// Code EyesOnMe Component Here
import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  focusHandler = (event) => console.log("Good!")

  blurHandler = (event) => console.log("Hey! Eyes on me!")
  
  render() {
  	return(
  		<button onFocus={this.focusHandler} onBlur={this.blurHandler}></button>
  	)
  }
}