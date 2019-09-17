// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{
constructor(){
    super()
}
    sayHi=()=>{
        return console.log("Entering password...")
    }
render(){
    return(
        <input placeholder= "type password here" type="password" onKeyUp={this.sayHi}></input>
    )
}

}
export default Keypad;