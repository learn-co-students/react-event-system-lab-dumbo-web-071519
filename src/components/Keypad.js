// Code Keypad Component Here
import React, {Component} from "react";

// ## Keypad
// ![Keypad](https://media.giphy.com/media/3o6MbdTboTFWOUsLkc/giphy.gif)

//     Mr.Burns has requested us to build a new keypad component for the nuclear
// plant, since the last one was way too complicated for his employees to use.
//     We'll keep things super simple instead, and use an `<input type="password" />`
// field to capture input.Here's how to complete the exercise:

// 1. In the`components/Keypad.js` file, create a`Keypad` React component.
// 2. In that component, render an`input` with the right type.
// 3. On that`input`, add an event handler that listens for the`keyUp` event.
// 4. When that event fires, use`console.log` to print out the text`'Entering password...'`.

export default class Keypad extends Component {
    handleKeyUp(event){
        console.log("Entering password...")
    }
    render(){
        return(
            <input type="password" onKeyUp={this.handleKeyUp}></input>
        )

    }
}
