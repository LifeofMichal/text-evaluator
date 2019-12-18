import React, {Component} from 'react'

interface inputProps {
    inputText: string,
    handler: any
}

export default class InputField extends Component <inputProps, {}> {
    
    render () {
        return (
          <textarea onChange={this.props.handler} value={this.props.inputText} placeholder="Enter sentence..." />
        )
    }

}