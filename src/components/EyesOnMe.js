// Code EyesOnMe Component Here
import React, { Component } from "react";

// ## Eyes on the ball

// Let's say you're in the club with your buddy.The music's blaring, lights are
// flashing...It's so hard to get his attention! Your job is to create a component
// that registers whenever he focuses on you, _and_ when his eyes are drifting off.

// 1. In the`components/EyesOnMe.js` file, create a`EyesOnMe` React component.
// 2. In that component, render a`button`.
// 3. On that`button`, add event handlers that listens for the`focus` and`blur` events.
// 4. When the`focus` event fires, use`console.log` to print out the text`'Good!'`.
// 5. When the`blur` event fires, use`console.log` to print out the text`'Hey! Eyes on me!'`.

export default class EyesOnMe extends Component {
    handleFocus(event){
        console.log("Good!")
    }

    handleBlur(event){
        console.log("Hey! Eyes on me!")
    }
    render() {
        return (
            <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Button</button>
        )
    }
}
