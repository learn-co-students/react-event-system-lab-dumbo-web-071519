// Code Keypad Component Here
import React, { Component } from "react";

class Keypad extends Component{
    render(){
        return (
            <input type="password" onKeyUp={e => console.log('Entering password...')}></input>
        )
    }
}
export default Keypad;