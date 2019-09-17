// Code EyesOnMe Component Here
import React, { Component } from "react";
export default class EyesOnMe extends Component {
  constructor() {
    super();
  }
  good = () => {
    return console.log("Good!");
  };

  hey = () => {
    return console.log("Hey! Eyes on me!");
  };
  render() {
    return (
      <button type="password" onFocus={this.good} onBlur={this.hey}>Friends eyes</button>
    );
  }
}
