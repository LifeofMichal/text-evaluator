import React, {Component} from 'react'

interface outputProps {
    outputText: string
}

export default class InputField extends Component <outputProps, {}> {
    
    render () {

        return (
          <input type="text" value={this.props.outputText ? this.props.outputText.split(" ").length : 0}></input>
        )
    }

}