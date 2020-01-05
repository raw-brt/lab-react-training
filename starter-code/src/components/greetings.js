import React, { Component } from 'react'

class Greetings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.text
    }
  }

  render() {
    return(
      <div className="greetings-box">
        <p>{this.state.text}</p>
      </div>
    )
  }
}

export default Greetings;