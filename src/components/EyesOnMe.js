import React, { Component } from 'react';

export default class EyesOnMe extends Component {
    state = { }

    eventHandlerOnFocus = () => (console.log("Good!"))
    eventHandlerOnBlur = () => (console.log("Hey! Eyes on me!"))

    render() { 
        return ( 
            <button onFocus={ this.eventHandlerOnFocus } onBlur={ this.eventHandlerOnBlur }>
                Eyes on me please!
            </button> )
    }
}
 
