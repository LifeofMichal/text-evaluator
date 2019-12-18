import React, { Component } from 'react'

interface buttonProps {
    handler: any
}

export default class Button extends Component <buttonProps, {}> {

    render() {
        return (
            <button onClick={this.props.handler}>Number of words is:</button>
        )
    }
}