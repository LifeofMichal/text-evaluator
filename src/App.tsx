import React, {Component} from 'react'
import './App.css'

import InputField from './FormFields/InputField'
import Button from './FormFields/Button'
import OutputField from './FormFields/OutputField'

interface appState {
  inputText: string,
  outputText: string
}

class App extends Component <{}, appState> {

  constructor(props: any) {
    super(props)
    this.state = {
      inputText: "",
      outputText: ""
    }
  }

  handleChange = (event: any) => {
    const { value } = event.target

    this.setState({
      inputText: value
    })
  }

  handleClick = () => {
    this.setState({
      outputText: this.state.inputText
    })
  }

  render () {
    return (
      <div className="App">
        <InputField handler={this.handleChange} inputText={this.state.inputText}/>
        <div>
          <Button handler={this.handleClick}/>
          <OutputField outputText={this.state.outputText}/>
        </div>
      </div>
    )
  }
}

export default App